import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Users, Leaf } from 'lucide-react';

const AboutNepalSection = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Compass,
      title: 'Expert Guides',
      description: 'Certified local guides with decades of Himalayan experience.',
    },
    {
      icon: Shield,
      title: 'Safe Adventures',
      description: 'Comprehensive safety protocols and emergency support.',
    },
    {
      icon: Users,
      title: 'Local Communities',
      description: 'We support local porters, teahouses, and villages.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Leave-no-trace principles and sustainable practices.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-[#143026]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/about-nepal.jpg"
                alt="Nepal landscape with temple and mountains"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E1A]/60 to-transparent" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 glass-card p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-display font-bold text-3xl text-[#CFFF7A]">10+</p>
                  <p className="text-[#A9B6B0] text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-[#CFFF7A]">5000+</p>
                  <p className="text-[#A9B6B0] text-sm">Happy Trekkers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-[#F4F7F5] mb-6">
              Your Trusted Partner
              <br />
              <span className="text-[#A9B6B0]">In The Himalayas</span>
            </h2>
            
            <p className="text-[#A9B6B0] text-base md:text-lg leading-relaxed mb-8">
              Nepal is home to eight of the world&apos;s fourteen highest peaks, including 
              Mount Everest. With over a decade of experience, we&apos;ve guided thousands 
              of trekkers through these majestic landscapes, creating memories that last 
              a lifetime.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#CFFF7A]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#CFFF7A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[#A9B6B0] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover"
            >
              Learn More About Nepal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNepalSection;
