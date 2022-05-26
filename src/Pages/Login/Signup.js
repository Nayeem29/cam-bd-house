import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../SharedComponnets/Loading';
import useToken from '../../Hooks/useToken';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);

  const navigate = useNavigate();
  let signError;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    // const name = data.name;
    // console.log(data);
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: data.name });
  };
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate])
  if (loading || gLoading || updating) {
    return <Loading />
  }
  if (error || gError || updateError) {
    signError = <small className='text-red-600'>{error?.message}{updateError?.message}{gError?.message}</small>
  }

  return (
    <div className=''>
      <div className="hero min-h-screen my-auto bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">

        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className='text-center text-3xl font-bold mt-3 text-[#525252]'>Sign Up Here</h1>
          <hr className='w-full h-3 mt-2' />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("Name", { required: true })}
                  placeholder="name" className="input input-bordered" />

                < label className="label">
                  {errors.Name?.type === 'required' && <span className="label-text-alt text-xs text-red-600">This field is required</span>}
                </label>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  placeholder="email" className="input input-bordered" />
                < label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-xs text-red-600">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-xs text-red-600">{errors.email.message}</span>}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
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
                  placeholder="password" className="input input-bordered" />
                < label className="label">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-xs text-red-600">{errors.password.message}</span>}
                  {errors.password?.type === 'pattern' && <span className="label-text-alt text-xs text-red-600">{errors.password.message}</span>}

                </label>
                {/* <label className="label">
                  <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                </label> */}
              </div>
              {
                error && signError
              }
              <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Sign Up" />
              <label className="label">
                <Link to='/signin' className="label-text-alt link link-hover mx-auto">Have an Account?</Link>
              </label>
            </div>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()}
              className="btn btn-primary rounded-t-none w-full mt-3">Continue with Google</button>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Signup;