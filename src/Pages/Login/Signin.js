import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className=''>
      <div class="hero min-h-screen my-auto bg-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          {/* <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
        </div>
        <div class="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  {...register("email",
                    {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                      ,
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Invalid Email'
                      }
                    })}
                  placeholder="email" class="input input-bordered" />
                < label class="label">
                  {errors.email?.type === 'required' && <span class="label-text-alt text-xs text-red-600">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span class="label-text-alt text-xs text-red-600">{errors.email.message}</span>}
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  {...register("password",
                    {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                      ,
                      pattern: {
                        value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        message: 'Min 8 letters and a uppercase,lowercase,symbol,number'
                      }
                    })}
                  placeholder="password" class="input input-bordered" />
                < label class="label">
                  {errors.password?.type === 'required' && <span class="label-text-alt text-xs text-red-600">{errors.password.message}</span>}
                  {errors.password?.type === 'pattern' && <span class="label-text-alt text-xs text-red-600">{errors.password.message}</span>}

                </label>
                <label class="label">
                  <Link to='' class="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div class="form-control mt-6 mb-2">
                <button class="btn btn-primary">Login</button>
              </div>
              <label class="label">
                <Link to='/signup' class="label-text-alt link link-hover mx-auto">Create an Account?</Link>
              </label>
            </div>
            <div class="divider">OR</div>
            <button class="btn btn-primary rounded-t-none w-full mt-3">Continue with Google</button>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Signin;