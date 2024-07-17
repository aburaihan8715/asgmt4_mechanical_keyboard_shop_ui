import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="py-20">
      <SectionHeading heading="Register" />
      <div className="flex justify-center">
        <form>
          <div className="space-y-4 w-96">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Password</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl">Img Url</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="text"
                name="imgUrl"
                id="imgUrl"
                placeholder="Enter Img Url"
              />
            </div>

            <div className="">
              <Button className="w-full">Register</Button>
            </div>

            <div className="text-center">
              Already register? Please{' '}
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
