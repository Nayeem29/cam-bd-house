import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const imgStorageKey = '31845d07c09eea2471808b91115471cc';

  const onSubmit = data => {
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
            price: data.price,
            minOrderQuantity: data.minOrder,
            available: data.quantity,
            description: data.description
          }
          fetch('https://serene-caverns-13504.herokuapp.com/camera', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
          })
            .then(res => res.json())
            .then(productData => {
              if (productData.insertedId) {
                toast.success('A new Item has been added!!')

              } else {
                toast.error('Something went wrong, try again please!')
              }
              reset();
            }
            )
        }
      })
  }
  return (
    <>
      <h1 className='text-4xl text-center font-bold my-5'>Add New Product</h1>
      <div class="card flex items-center justify-center mx-auto bg-base-100 shadow-xl">
        <div class="card-body">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Product Name</span>
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
              <label class="label">
                <span class="label-text">Price per Unit</span>
              </label>
              <input {...register("price", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.price?.type === 'required' && <span class="label-text-alt text-red-600">{errors.price.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input {...register("minOrder", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.minOrder?.type === 'required' && <span class="label-text-alt text-red-600">{errors.minOrder.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input {...register("quantity", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.quantity?.type === 'required' && <span class="label-text-alt text-red-600">{errors.quantity.message}</span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">

              <label className="label">
                <span className="label-text">Photo</span>
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
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea {...register("description", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })} class="textarea textarea-bordered" placeholder="Product Description"></textarea>
              <label class="label">
                {errors.description?.type === 'required' && <span class="label-text-alt text-red-600">{errors.description.message}</span>}
              </label>
            </div>

            <input className='btn btn-primary my-3 text-right' type="submit" value='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;