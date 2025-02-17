/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common-view/SectionHeading';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { toast } from 'sonner';

interface IFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [loginMutation, { isLoading: isLoginLoading }] =
    useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: IFormValues) => {
    try {
      const response = await loginMutation(data).unwrap();

      if (!response?.data) {
        toast.warning('Invalid response from server');
      }

      const { loginUser: user, accessToken: token } = response.data;

      if (!user || !token) {
        toast.warning('User data or token missing');
      }

      dispatch(setUser({ user, token }));

      toast.info('User logged in successfully!!');
      reset();

      let redirectPath = undefined;
      if (location?.state?.from?.pathname) {
        redirectPath = location?.state?.from?.pathname;
      } else if (user.role === 'admin') {
        redirectPath = '/admin/dashboard';
      } else if (user.role === 'user') {
        redirectPath = '/';
      }

      navigate(redirectPath);
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || error?.message || 'Failed to log in';
      toast.warning(errorMessage);
    }
  };

  const handleCredentials = async (role: string) => {
    if (role === 'admin') {
      setValue('email', 'admin@gmail.com');
      setValue('password', 'test1234');
    } else if (role === 'user') {
      setValue('email', 'user@gmail.com');
      setValue('password', 'test1234');
    }

    await trigger();
  };

  if (user) {
    let redirectPath = undefined;

    if (location?.state?.from?.pathname) {
      redirectPath = location?.state?.from?.pathname;
    } else if (user.role === 'admin') {
      redirectPath = '/admin/dashboard';
    } else if (user.role === 'user') {
      redirectPath = '/';
    }

    return (
      <>
        <Navigate to={redirectPath} replace={true} />;
      </>
    );
  }

  return (
    <section className="pt-5">
      <SectionHeading heading="Login" />

      <div className="flex flex-wrap justify-center gap-2 mb-2">
        <button
          onClick={() => handleCredentials('admin')}
          className="px-2 py-1 text-gray-100 transition duration-300 bg-blue-500 rounded-md"
        >
          admin credentials
        </button>
        <button
          onClick={() => handleCredentials('user')}
          className="px-2 py-1 text-gray-100 transition duration-300 bg-blue-500 rounded-md"
        >
          user credentials
        </button>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 w-96">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.email ? 'border-red-500' : ''
                }`}
                type="email"
                id="email"
                placeholder="Enter email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.password ? 'border-red-500' : ''
                }`}
                type="password"
                id="password"
                placeholder="Enter password"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              {errors.password && (
                <span className="text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="">
              <Button className="w-full" disabled={!isValid} type="submit">
                {isLoginLoading ? 'Loading...' : 'Login'}
              </Button>
            </div>

            <div className="text-center">
              New to here? Please{' '}
              <Link
                className="hover:underline text-primary"
                to="/auth/register"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
