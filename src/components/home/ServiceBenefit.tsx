/* eslint-disable @typescript-eslint/no-explicit-any */
import { serviceBenefitData } from '@/data/serviceBenefitData';
import SectionHeading from '../ui/SectionHeading';

const ServiceBenefit = () => {
  return (
    <section className="pb-20 border-b">
      <SectionHeading heading="Services Benefits" />
      <div className="grid grid-cols-4 gap-10 px-10">
        {serviceBenefitData?.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceBenefit;

const ServiceCard = ({ item }: { item: any }) => {
  return (
    <div
      style={{ background: `${item.background}` }}
      className={`p-10 rounded-md relative flex flex-col gap-1`}
    >
      {item.icon}
      {item.heading}
      {item.desc}
      {item.iconGray}
    </div>
  );
};
