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
              <label htmlFor="phone">Phone</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter phone"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <textarea
                className="w-full px-3 py-2 border rounded outline-none"
                name="address"
                id="address"
                placeholder="Enter address"
              />
            </div>
            <div className="">
              <Button className="w-full">Login</Button>
            </div>
          </div>
        </form>

        <div>
          Already register? Please <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
