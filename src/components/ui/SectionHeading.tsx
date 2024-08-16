type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <div className="flex justify-center mb-10">
      <h1 className="pb-2 mb-4 text-xl font-bold text-transparent text-gray-900 border-b sm:2xl border-primary title-font md:text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeading;
