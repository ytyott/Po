import { useEffect, useRef, useState } from 'react';
import { 
  Mountain, 
  MapPin, 
  Users, 
  Calendar, 
  Compass, 
  Shield, 
  Heart,
  Leaf
} from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Happy Trekkers' },
    { icon: Mountain, value: '10', label: 'Trekking Routes' },
    { icon: MapPin, value: '100%', label: 'Safety Record' },
  ];

  const values = [
    {
      icon: Compass,
      title: 'Expert Guidance',
      description: 'Our certified guides have decades of experience navigating the Himalayas safely.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols and 24/7 emergency support for all treks.',
    },
    {
      icon: Heart,
      title: 'Local Communities',
      description: 'We support local porters, teahouses, and villages along every trail.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Travel',
      description: 'Leave-no-trace principles and eco-friendly practices on all our treks.',
    },
  ];

  const bestSeasons = [
    {
      season: 'Spring (March-May)',
      description: 'Best time for trekking with mild temperatures, clear skies, and blooming rhododendrons.',
      color: 'text-pink-400',
    },
    {
      season: 'Autumn (September-November)',
      description: 'Post-monsoon clarity offers the best mountain views and stable weather.',
      color: 'text-orange-400',
    },
    {
      season: 'Winter (December-February)',
      description: 'Good for lower altitude treks. High passes may be closed due to snow.',
      color: 'text-blue-400',
    },
    {
      season: 'Monsoon (June-August)',
      description: 'Not recommended for most treks due to rain and leeches. Upper Mustang is ideal.',
      color: 'text-green-400',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B1E1A] pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                About Nepal
              </p>
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F4F7F5] mb-6">
                The Land of
                <br />
                <span className="text-[#A9B6B0]">Himalayas</span>
              </h1>
              <p className="text-[#A9B6B0] text-base md:text-lg leading-relaxed mb-6">
                Nepal is a trekker&apos;s paradise, home to eight of the world&apos;s fourteen 
                highest peaks, including Mount Everest. From lush subtropical forests to 
                arid high-altitude deserts, the country offers incredible diversity in 
                landscapes, cultures, and trekking experiences.
              </p>
              <p className="text-[#A9B6B0] text-base md:text-lg leading-relaxed">
                With over a decade of experience, TrailTrustTravel has guided thousands 
                of adventurers through these majestic trails, creating memories that last 
                a lifetime while supporting local communities and practicing sustainable tourism.
              </p>
            </div>

            {/* Image */}
            <div
              className={`relative transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/about-nepal.jpg"
                  alt="Nepal landscape"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E1A]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20 bg-[#143026]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-[#CFFF7A] mx-auto mb-4" />
                <p className="font-display font-bold text-3xl md:text-4xl text-[#F4F7F5] mb-2">
                  {stat.value}
                </p>
                <p className="text-[#A9B6B0] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={sectionRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Our Values
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#F4F7F5]">
              Why Choose TrailTrustTravel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-xl text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#CFFF7A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#CFFF7A]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F4F7F5] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#A9B6B0] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seasons */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24 bg-[#143026]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              When To Visit
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#F4F7F5]">
              Best Trekking Seasons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestSeasons.map((season, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className={`font-display font-bold text-xl mb-3 ${season.color}`}>
                  {season.season}
                </h3>
                <p className="text-[#A9B6B0] leading-relaxed">
                  {season.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal Facts */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Quick Facts
              </p>
              <h2 className="font-display font-black text-3xl md:text-4xl text-[#F4F7F5] mb-8">
                Nepal at a Glance
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CFFF7A] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">Capital</h4>
                    <p className="text-[#A9B6B0]">Kathmandu (1,400m elevation)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CFFF7A] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">Highest Point</h4>
                    <p className="text-[#A9B6B0]">Mount Everest (8,848.86m)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CFFF7A] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">Eight-Thousanders</h4>
                    <p className="text-[#A9B6B0]">8 of the world&apos;s 14 peaks over 8,000m</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CFFF7A] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">National Parks</h4>
                    <p className="text-[#A9B6B0]">Sagarmatha, Annapurna, Langtang & more</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CFFF7A] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">Languages</h4>
                    <p className="text-[#A9B6B0]">Nepali (official), English widely spoken in tourist areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CFFF7A] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#F4F7F5] mb-1">Currency</h4>
                    <p className="text-[#A9B6B0]">Nepalese Rupee (NPR)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-display font-bold text-xl text-[#F4F7F5] mb-6">
                Essential Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#F4F7F5] mb-2">Visa Requirements</h4>
                  <p className="text-[#A9B6B0] text-sm leading-relaxed">
                    Most nationalities can obtain a visa on arrival at Kathmandu airport 
                    or border crossings. Costs: 15 days ($30), 30 days ($50), 90 days ($125).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#F4F7F5] mb-2">Permits</h4>
                  <p className="text-[#A9B6B0] text-sm leading-relaxed">
                    TIMS card ($20) required for most treks. National park permits vary 
                    ($20-50). Restricted areas require special permits ($500+).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#F4F7F5] mb-2">Insurance</h4>
                  <p className="text-[#A9B6B0] text-sm leading-relaxed">
                    Comprehensive travel insurance with helicopter evacuation coverage 
                    up to 6,000m is mandatory for all our treks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#F4F7F5] mb-2">Physical Fitness</h4>
                  <p className="text-[#A9B6B0] text-sm leading-relaxed">
                    Good physical condition is required. We recommend 2-3 months of 
                    cardio training (hiking, running, swimming) before your trek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
