import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Mountain } from 'lucide-react';
import { getTopTreks, type Trek } from '../data/treks';

const FeaturedTreksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const featuredTreks = getTopTreks(3);

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
      case 'Easy-Moderate':
        return 'badge-easy';
      case 'Moderate':
        return 'badge-moderate';
      case 'Hard':
      case 'Moderate-Hard':
        return 'badge-hard';
      case 'Extreme':
        return 'badge-extreme';
      default:
        return 'badge-moderate';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-[#0B1E1A]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Featured Treks
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F4F7F5]">
              Most Popular
              <br />
              <span className="text-[#A9B6B0]">Adventures</span>
            </h2>
          </div>
          <Link
            to="/treks"
            className="inline-flex items-center gap-2 text-[#CFFF7A] font-semibold hover:gap-3 transition-all"
          >
            View All Treks
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredTreks.map((trek, index) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              index={index}
              isVisible={isVisible}
              getDifficultyColor={getDifficultyColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TrekCardProps {
  trek: Trek;
  index: number;
  isVisible: boolean;
  getDifficultyColor: (difficulty: string) => string;
}

const TrekCard = ({ trek, index, isVisible, getDifficultyColor }: TrekCardProps) => {
  return (
    <Link
      to={`/treks/${trek.id}`}
      className={`group block glass-card overflow-hidden card-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E1A] via-transparent to-transparent" />
        
        {/* Rank badge */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#CFFF7A] rounded-full flex items-center justify-center">
          <span className="font-display font-bold text-[#0B1E1A]">#{trek.rank}</span>
        </div>

        {/* Difficulty badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(trek.difficulty)}`}>
          {trek.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-[#F4F7F5] mb-3 group-hover:text-[#CFFF7A] transition-colors">
          {trek.name}
        </h3>
        
        <p className="text-[#A9B6B0] text-sm leading-relaxed mb-4 line-clamp-2">
          {trek.shortDescription}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-[#A9B6B0]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#CFFF7A]" />
            <span>{trek.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mountain className="w-4 h-4 text-[#CFFF7A]" />
            <span>{trek.maxAltitude}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 pt-5 border-t border-[#F4F7F5]/10 flex items-center justify-between">
          <span className="text-[#CFFF7A] font-semibold text-sm">View Details</span>
          <ArrowRight className="w-5 h-5 text-[#CFFF7A] transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedTreksSection;
