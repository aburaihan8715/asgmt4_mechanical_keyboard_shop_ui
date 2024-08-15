import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <section className="py-20">
      <SectionHeading heading="Login" />
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
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>

            <div className="text-center">
              New to here? Please{' '}
              <Link
                className="hover:underline text-primary"
                to="/register"
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
