type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <div className="flex justify-center mb-10">
      <h1 className="pb-2 border-b border-primary mb-4 text-gray-900 title-font sm:text-4xl text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeading;
