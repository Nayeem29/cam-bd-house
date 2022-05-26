import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../SharedComponnets/Loading';
import useToken from '../../Hooks/useToken';

const Signin = () => {
  // const [email, setEmail] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  let signError;
  const onSubmit = data => {
    console.log(data)
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  const [token] = useToken(user || gUser);

  // const passwordResetEmail = async () => {
  //   await sendPasswordResetEmail(email);
  // }
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from])
  if (loading || gLoading) {
    return <Loading />
  }
  if (error || gError) {
    signError = <small className='text-red-600'>{error?.message}{gError?.message}</small>
  }
  return (
    <div className=''>
      <div className="hero min-h-screen my-auto bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className='text-center text-3xl font-bold text-[#525252]'>Sign In Here</h1>
          <hr className='w-full h-3 mt-2' />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
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
                  <button
                    // onClick={passwordResetEmail} 
                    className="label-text-alt link link-hover">Forgot password?</button>
                </label> */}
              </div>
              {error && signError}
              <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Sign In" />
              <label className="label">
                <Link to='/signup' className="label-text-alt link link-hover mx-auto">Create an Account?</Link>
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

export default Signin;