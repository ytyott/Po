import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-[#0B1E1A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#CFFF7A] blur-[150px]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Start Your Journey
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F4F7F5] mb-6">
            Ready To Explore
            <br />
            <span className="text-[#A9B6B0]">The Himalayas?</span>
          </h2>
          
          <p className="text-[#A9B6B0] text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a seasoned trekker or planning your first Himalayan adventure, 
            we&apos;re here to make your dream a reality. Get in touch and let&apos;s start planning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover"
            >
              <Calendar className="w-5 h-5" />
              Book Your Trek
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] font-semibold rounded-full hover:border-[#CFFF7A] hover:text-[#CFFF7A] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-10 border-t border-[#F4F7F5]/10">
            <p className="text-[#A9B6B0] text-sm mb-6">Trusted by trekkers from around the world</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F4F7F5]/20" />
                <span className="text-[#F4F7F5] text-sm font-medium">TripAdvisor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F4F7F5]/20" />
                <span className="text-[#F4F7F5] text-sm font-medium">Lonely Planet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F4F7F5]/20" />
                <span className="text-[#F4F7F5] text-sm font-medium">National Geographic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
