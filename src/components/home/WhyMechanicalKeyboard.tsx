import { FaCheck } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';

const WhyMechanicalKeyboard = () => {
  return (
    <section className="mb-20 h-[90vh] border-b">
      <SectionHeading heading="Why Mechanical Keyboard" />
      <div className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-10 mx-auto md:flex-row">
          <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.istockphoto.com/id/1394788004/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.jpg?b=1&s=612x612&w=0&k=20&c=lUAKZmGrGkztQYr1SSAJeuS8svZec1Ku87CxklPNVfA="
            />
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h3 className="mb-4 font-medium text-gray-900 title-font sm:text-2xl">
              Because of...
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Enhanced Typing Experience</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Durability</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Customization Options</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>N-Key Rollover and Anti-Ghosting</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span> Aesthetics and Build Quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMechanicalKeyboard;
