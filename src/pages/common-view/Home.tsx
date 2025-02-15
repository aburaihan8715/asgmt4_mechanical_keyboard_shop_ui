import CustomerReview from '@/components/common-view/CustomerReview';
import WhyMechanicalKeyboard from '@/components/common-view/WhyMechanicalKeyboard';
import FeaturedProducts from '@/components/common-view/FeaturedProducts';
import TopFeaturedBrand from '@/components/common-view/TopFeaturedBrand';
import TTCarousel from '@/components/common-view/TTCarousel';
import Gallery from '@/components/common-view/Gallery';
import ServiceBenefit from '@/components/common-view/ServiceBenefit';

const Home = () => {
  return (
    <>
      <TTCarousel />
      <ServiceBenefit />
      <FeaturedProducts />
      <TopFeaturedBrand />
      <CustomerReview />
      <WhyMechanicalKeyboard />
      <Gallery />
    </>
  );
};

export default Home;
