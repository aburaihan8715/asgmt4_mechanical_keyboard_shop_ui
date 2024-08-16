import aboutUsPhoto from '../assets/images/aboutus.svg';

const AboutUs = () => {
  return (
    <section className="md:py-20 py-0 px-1 md:px-10">
      <div className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-gray-900 title-font sm:text-4xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              About us
            </h1>
            <p className="mb-8 leading-relaxed">
              At TechTune, we believe that every keystroke matters. Our
              mission is to provide enthusiasts, gamers, and professionals
              with the highest quality mechanical keyboards that offer
              exceptional performance, durability, and style. We
              meticulously curate and design our products to meet the
              diverse needs of our customers, ensuring a perfect blend of
              functionality and aesthetics.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => alert('Not implemented yet!')}
                className="inline-flex px-6 py-2 text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 rounded focus:outline-none hover:from-indigo-600 hover:to-purple-700"
              >
                More Info...
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={aboutUsPhoto}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
