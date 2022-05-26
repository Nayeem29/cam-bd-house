import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../SharedComponnets/Loading';

const AddReview = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const { data: camera, isLoading } = useQuery('products', () => fetch('https://serene-caverns-13504.herokuapp.com/camera', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  const imgStorageKey = '31845d07c09eea2471808b91115471cc';

  if (isLoading) {
    return <Loading />
  }

  const onSubmit = data => {
    // console.log(data);
    const image = data?.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.success) {
          const img = result.data.url;
          const review = {
            name: data.name,
            image: img,
            rating: data.rating,
            comments: data.comment
          }
          fetch('https://serene-caverns-13504.herokuapp.com/review', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
          })
            .then(res => res.json())
            .then(reviewData => {
              if (reviewData.insertedId) {
                toast.success('Thank you for your feedback!!')
                reset();
              } else {
                toast.error('Something went wrong, try again please!')
              }
            })
        }
      })
  }

  return (
    <>
      <h1 className='text-4xl text-center font-bold my-5'>Add Your Review</h1>
      <div class="card flex items-center justify-center mx-auto bg-base-100 shadow-xl">
        <div class="card-body">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input {...register("name", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">

              <label className="label">
                <span className="label-text">Products</span>
              </label>

              <select  {...register('products', {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                className="select select-bordered w-full max-w-xs">
                {
                  camera.map(c => <option>{c.name}</option>)
                }
              </select>
              <label class="label">
                {errors.products?.type === 'required' && <span class="label-text-alt text-red-600">{errors.products.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">

              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input type="file"
                {...register("photo",
                  {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  }
                )}
                placeholder="Photo"
                className="input input-bordered w-full max-w-xs" />
              {errors.photo?.type === 'required' &&
                <span className='label-text-alt text-red-500'>{errors.photo.message}</span>}
            </div>

            <div class="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>

              <select  {...register('rating', {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                className="select select-bordered w-full max-w-xs">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <label class="label">
                {errors.rating?.type === 'required' && <span class="label-text-alt text-red-600">{errors.rating.message}</span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Comments</span>
              </label>
              <textarea {...register("comment", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })} class="textarea textarea-bordered" placeholder="Your Comments"></textarea>
              <label class="label">
                {errors.comment?.type === 'required' && <span class="label-text-alt text-red-600">{errors.comment.message}</span>}
              </label>
            </div>

            <input className='btn btn-primary my-3 text-right' type="submit" value='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReview;