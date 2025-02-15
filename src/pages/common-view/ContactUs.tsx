const ContactUs = () => {
  return (
    <section className="relative text-gray-600 body-font">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746527.4526794753!2d90.3443647!3d23.506657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1721032963880!5m2!1sen!2sbd"
        ></iframe>
      </div>
      <div className="container flex px-5 py-24 mx-auto">
        <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
            Feedback
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Feel free to adjust the contact details and hours to match your
            actual information.
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="text-sm leading-7 text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          <button
            onClick={() => alert('Not implement yet')}
            className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
