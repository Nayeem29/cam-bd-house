import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../SharedComponnets/Loading';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  if (loading) {
    return <Loading />
  }
  const onSubmit = data => {
    console.log(data);
    const updatedUser = {
      name: data.name,
      linkedin: data.linkedin,
      education: data.education,
      location: data.location,
    }
    fetch(`http://localhost:5000/updatedUser/${user.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(updatedUser)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <>
      <h1 className='text-4xl text-center font-bold my-5'>My Profile</h1>
      <div class="card flex items-center justify-center mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <div className='flex justify-around items-center'>
            <label class="label mt-1">
              <span class="label-text">Email:</span>
            </label>
            <h2 className='card-title'>{user.email}</h2>
          </div>
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
                defaultValue={user.displayName} class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">LinkedIn</span>
              </label>
              <input {...register("linkedin", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                placeholder="linkedin Link" class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.linkedin?.type === 'required' && <span class="label-text-alt text-red-600">{errors.linkedin.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input {...register("education", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                placeholder="Your Last Education" class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.education?.type === 'required' && <span class="label-text-alt text-red-600">{errors.education.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input {...register("location", {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
                placeholder="City/District" class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.location?.type === 'required' && <span class="label-text-alt text-red-600">{errors.location.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <textarea {...register("address")} class="textarea textarea-bordered" placeholder="Your Current Address"></textarea>
            </div>
            <input className='btn btn-primary my-3 text-right' type="submit" value='Update' />
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;