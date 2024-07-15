import CustomerReview from '@/components/home/CustomerReview';
import WhyMechanicalKeyboard from '@/components/home/WhyMechanicalKeyboard';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TopFeaturedBrand from '@/components/home/TopFeaturedBrand';
import TTCarousel from '@/components/home/TTCarousel';
import Gallery from '@/components/home/Gallery';
import ServiceBenefit from '@/components/home/ServiceBenefit';

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
