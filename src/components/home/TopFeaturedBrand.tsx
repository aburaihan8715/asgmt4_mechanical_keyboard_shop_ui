import SectionHeading from '../ui/SectionHeading';
import Marquee from 'react-fast-marquee';
import brand1 from '../../assets/images/brandLogos/1.png';
import brand2 from '../../assets/images/brandLogos/2.png';
import brand3 from '../../assets/images/brandLogos/3.png';
import brand4 from '../../assets/images/brandLogos/4.png';
import brand5 from '../../assets/images/brandLogos/5.png';
import brand6 from '../../assets/images/brandLogos/6.png';
import brand7 from '../../assets/images/brandLogos/7.png';
import brand8 from '../../assets/images/brandLogos/8.png';
import brand9 from '../../assets/images/brandLogos/9.png';
import brand10 from '../../assets/images/brandLogos/10.png';

const TopFeaturedBrand = () => {
  return (
    <section className="py-20 pb-20 border-b">
      <SectionHeading heading="Tob Feature Brand" />
      <Marquee>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
        <img src={brand6} alt="" />
        <img src={brand7} alt="" />
        <img src={brand8} alt="" />
        <img src={brand9} alt="" />
        <img src={brand10} alt="" />
      </Marquee>
    </section>
  );
};

export default TopFeaturedBrand;
