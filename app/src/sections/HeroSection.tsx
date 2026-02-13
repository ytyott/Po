import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    if (!hero || !content) return;

    // Initial animation
    const children = content.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      child.style.opacity = '0';
      child.style.transform = 'translateY(40px)';
      setTimeout(() => {
        child.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-mountain.jpg"
          alt="Himalayan mountains at sunrise"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E1A]/90 via-[#0B1E1A]/50 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12"
      >
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="text-[#CFFF7A] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4 md:mb-6">
            Discover Nepal
          </p>

          {/* Main Headline */}
          <h1 className="font-display font-black text-[#F4F7F5] hero-title uppercase mb-6 md:mb-8">
            One Trail
            <br />
            <span className="text-[#CFFF7A]">At A Time</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[#A9B6B0] text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-8 md:mb-10">
            Guided trekking experiences across the Himalayas—safe, responsible, 
            and unforgettable. Your adventure begins here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/treks"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover text-center"
            >
              Explore Top Trails
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] font-semibold rounded-full hover:border-[#CFFF7A] hover:text-[#CFFF7A] transition-colors text-center"
            >
              Book Your Trek
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[#A9B6B0] text-xs tracking-widest uppercase">
          Scroll to Explore
        </span>
        <ChevronDown className="w-5 h-5 text-[#CFFF7A] animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
