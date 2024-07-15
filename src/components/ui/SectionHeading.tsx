type sectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: sectionHeadingProps) => {
  return (
    <div className="flex justify-center mb-10">
      <h3 className="pb-2 text-3xl font-semibold border-b border-primary text-[#212529]">
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeading;
