import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type FormData = {
  name: string;
  email: string;
  password: string;
  imgUrl: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="py-20">
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

            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl">Img Url</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.imgUrl ? 'border-red-500' : ''
                }`}
                type="text"
                id="imgUrl"
                placeholder="Enter Img Url"
                {...register('imgUrl', {
                  required: 'Image URL is required',
                })}
              />
              {errors.imgUrl && (
                <span className="text-red-500">
                  {errors.imgUrl.message}
                </span>
              )}
            </div>

            <div>
              <Button className="w-full" disabled={!isValid}>
                Register
              </Button>
            </div>

            <div className="text-center">
              Already registered? Please{' '}
              <Link className="hover:underline text-primary" to="/login">
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
