import SectionHeading from '../ui/SectionHeading';

const Gallery = () => {
  return (
    <section className="pb-20">
      <SectionHeading heading="Gallery" />
      <div className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">
              The Art and Engineering of Mechanical Keyboards
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">
              Explore the world of mechanical keyboards, where precision
              engineering meets aesthetic design. Discover why enthusiasts
              and professionals alike are passionate about these tactile
              and durable keyboards.
            </p>
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://media.istockphoto.com/id/1394788004/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.jpg?b=1&s=612x612&w=0&k=20&c=lUAKZmGrGkztQYr1SSAJeuS8svZec1Ku87CxklPNVfA="
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://kono.store/cdn/shop/files/GMK_Firefly_-_Prophet_1_3be17f6c-b936-40db-b561-2fdc6463a6f0_1600x600_crop_center.png?v=1631814814&quot"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://kono.store/cdn/shop/files/Discord---Banner---2_2000x800_crop_center.jpg?v=1660947236"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://rb.gy/n2momw"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://media.istockphoto.com/id/1356366044/photo/black-mechanical-keyboard-on-white-background-blue-neon-light.jpg?b=1&s=612x612&w=0&k=20&c=1eoGhUEtkFdg9N4YnzCQlwxKhRBFFOLVgFEbDVXLecE="
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src="https://rb.gy/07zfan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
