import HeroSection from '../sections/HeroSection';
import FeaturedTreksSection from '../sections/FeaturedTreksSection';
import AboutNepalSection from '../sections/AboutNepalSection';
import CTASection from '../sections/CTASection';

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedTreksSection />
      <AboutNepalSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
