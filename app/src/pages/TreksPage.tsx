import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Mountain, Filter, Search } from 'lucide-react';
import { treks, type Trek } from '../data/treks';

const TreksPage = () => {
  const [filteredTreks, setFilteredTreks] = useState<Trek[]>(treks);
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let filtered = treks;

    // Apply difficulty filter
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter((trek) =>
        trek.difficulty.toLowerCase().includes(difficultyFilter.toLowerCase())
      );
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (trek) =>
          trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trek.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTreks(filtered);
  }, [difficultyFilter, searchQuery]);

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

  const difficulties = ['all', 'Easy', 'Moderate', 'Hard', 'Extreme'];

  return (
    <div className="w-full min-h-screen bg-[#0B1E1A] pt-24 md:pt-32">
      {/* Hero Header */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12 md:pb-16">
        <div
          className={`max-w-4xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Top 10 Ranking
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F4F7F5] mb-4">
            Nepal&apos;s Best
            <br />
            <span className="text-[#A9B6B0]">Trekking Trails</span>
          </h1>
          <p className="text-[#A9B6B0] text-base md:text-lg max-w-2xl">
            From the iconic Everest Base Camp to hidden gems in remote valleys, 
            discover the most spectacular trekking routes in the Himalayas.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-8">
        <div
          className={`flex flex-col md:flex-row gap-4 md:items-center md:justify-between transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
            <input
              type="text"
              placeholder="Search treks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#143026] border border-[#F4F7F5]/10 rounded-full text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-[#A9B6B0]" />
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  difficultyFilter === diff
                    ? 'bg-[#CFFF7A] text-[#0B1E1A]'
                    : 'bg-[#143026] text-[#A9B6B0] hover:text-[#F4F7F5]'
                }`}
              >
                {diff === 'all' ? 'All' : diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Cards */}
      <section ref={sectionRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-20 md:pb-32">
        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTreks.map((trek, index) => (
              <TrekCard
                key={trek.id}
                trek={trek}
                index={index}
                getDifficultyColor={getDifficultyColor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#A9B6B0] text-lg">
              No treks found matching your criteria.
            </p>
            <button
              onClick={() => {
                setDifficultyFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-[#CFFF7A] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

interface TrekCardProps {
  trek: Trek;
  index: number;
  getDifficultyColor: (difficulty: string) => string;
}

const TrekCard = ({ trek, index, getDifficultyColor }: TrekCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/treks/${trek.id}`}
        className="group block glass-card overflow-hidden card-hover h-full"
      >
        {/* Image */}
        <div className="relative h-52 md:h-56 overflow-hidden">
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
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
              trek.difficulty
            )}`}
          >
            {trek.difficulty}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-bold text-lg text-[#F4F7F5] mb-2 group-hover:text-[#CFFF7A] transition-colors">
            {trek.name}
          </h3>

          <p className="text-[#A9B6B0] text-sm leading-relaxed mb-4 line-clamp-2">
            {trek.shortDescription}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-[#A9B6B0] mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#CFFF7A]" />
              <span>{trek.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-[#CFFF7A]" />
              <span>{trek.maxAltitude}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-[#F4F7F5]/10">
            <span className="text-[#CFFF7A] font-semibold">{trek.price}</span>
            <span className="flex items-center gap-1 text-sm text-[#A9B6B0] group-hover:text-[#CFFF7A] transition-colors">
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TreksPage;
