import { FaMusic } from 'react-icons/fa6';

const BrandLogo = () => {
  return (
    <div className="flex gap-1 items-center">
      <p className="text-4xl text-primary">
        <FaMusic />
      </p>
      <p className="text-2xl font-semibold text-[#212529]">
        Tune<span className="text-primary">T</span>own
      </p>
    </div>
  );
};

export default BrandLogo;
