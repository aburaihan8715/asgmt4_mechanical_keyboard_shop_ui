/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common-view/SectionHeading';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useAppSelector } from '@/redux/hooks';

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [registerMutation, { isLoading: isRegisterLoading }] =
    useRegisterMutation();

  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: IFormValues) => {
    try {
      const response = await registerMutation(data).unwrap();

      if (!response?.data) {
        toast.warning('Invalid response from server!');
      }

      toast.info('User register successful!');
      reset();

      navigate('/auth/login');
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || error?.message || 'Failed to register!';
      toast.warning(errorMessage);
    }
  };
  if (user) {
    return <Navigate to={`/${user.role}/dashboard`} replace={true} />;
  }
  return (
    <section className="pt-5">
      <SectionHeading heading="Register" />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 w-96">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.name ? 'border-red-500' : ''
                }`}
                type="text"
                id="name"
                placeholder="Enter name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.email ? 'border-red-500' : ''
                }`}
                type="email"
                id="email"
                placeholder="Enter email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Enter a valid email address',
                  },
                })}
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

            <div>
              <Button className="w-full" disabled={!isValid}>
                {isRegisterLoading ? 'Loading...' : 'Register'}
              </Button>
            </div>

            <div className="text-center">
              Already registered? Please{' '}
              <Link
                className="hover:underline text-primary"
                to="/auth/login"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
