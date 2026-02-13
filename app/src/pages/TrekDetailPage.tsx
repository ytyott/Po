import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Mountain, 
  Check, 
  X, 
  Lightbulb,
  ChevronDown,
  ChevronUp,
  MapPin,
  BookOpen
} from 'lucide-react';
import { getTrekById, type Trek } from '../data/treks';

const TrekDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [trek, setTrek] = useState<Trek | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'details'>('overview');
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      const foundTrek = getTrekById(id);
      if (foundTrek) {
        setTrek(foundTrek);
        window.scrollTo(0, 0);
      } else {
        navigate('/treks');
      }
    }
  }, [id, navigate]);

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

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
      case 'Easy-Moderate':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Moderate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Hard':
      case 'Moderate-Hard':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'Extreme':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      default:
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    }
  };

  if (!trek) {
    return (
      <div className="w-full min-h-screen bg-[#0B1E1A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#CFFF7A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#A9B6B0]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1E1A]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E1A] via-[#0B1E1A]/40 to-transparent" />
        
        {/* Back button */}
        <Link
          to="/treks"
          className="absolute top-24 left-4 sm:left-6 lg:left-8 z-10 flex items-center gap-2 text-[#F4F7F5] hover:text-[#CFFF7A] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Treks</span>
        </Link>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Rank badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#CFFF7A] rounded-full mb-4">
              <span className="font-display font-bold text-[#0B1E1A]">#{trek.rank}</span>
              <span className="text-[#0B1E1A] text-sm font-medium">Top Trek</span>
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F4F7F5] mb-4">
              {trek.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getDifficultyColor(trek.difficulty)}`}>
                {trek.difficulty}
              </span>
              <div className="flex items-center gap-2 text-[#A9B6B0]">
                <Clock className="w-5 h-5 text-[#CFFF7A]" />
                <span>{trek.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-[#A9B6B0]">
                <Mountain className="w-5 h-5 text-[#CFFF7A]" />
                <span>{trek.maxAltitude}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-[60px] md:top-[72px] z-30 bg-[#0B1E1A]/95 backdrop-blur-md border-b border-[#F4F7F5]/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center gap-1 md:gap-8">
            {(['overview', 'itinerary', 'details'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-4 text-sm md:text-base font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#CFFF7A]'
                    : 'text-[#A9B6B0] hover:text-[#F4F7F5]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CFFF7A]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section ref={sectionRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16">
        <div
          className={`max-w-6xl mx-auto transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F4F7F5] mb-6">
                  About This Trek
                </h2>
                <p className="text-[#A9B6B0] text-base md:text-lg leading-relaxed mb-8">
                  {trek.description}
                </p>

                {/* Highlights */}
                <h3 className="font-display font-bold text-xl text-[#F4F7F5] mb-4">
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {trek.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#CFFF7A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#A9B6B0]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tips */}
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-[#CFFF7A] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#F4F7F5] mb-2">
                        Pro Tips
                      </h4>
                      <p className="text-[#A9B6B0] text-sm">{trek.tips}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="glass-card p-6 rounded-xl sticky top-40">
                  <h3 className="font-display font-bold text-xl text-[#F4F7F5] mb-6">
                    Trek Info
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[#A9B6B0]">Duration</span>
                      <span className="text-[#F4F7F5] font-medium">{trek.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A9B6B0]">Max Altitude</span>
                      <span className="text-[#F4F7F5] font-medium">{trek.maxAltitude}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A9B6B0]">Difficulty</span>
                      <span className="text-[#F4F7F5] font-medium">{trek.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A9B6B0]">Price</span>
                      <span className="text-[#CFFF7A] font-bold">{trek.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-[#A9B6B0] mb-3">
                      Best Time To Visit
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {trek.bestTime.map((time, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#143026] text-[#F4F7F5] text-sm rounded-full"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/booking/${trek.id}`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover"
                  >
                    <BookOpen className="w-5 h-5" />
                    Book This Trek
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div className="max-w-4xl">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F4F7F5] mb-8">
                Day-by-Day Itinerary
              </h2>

              <div className="space-y-4">
                {trek.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleDay(day.day)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#CFFF7A] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold text-[#0B1E1A] text-sm">
                            {day.day}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#F4F7F5]">
                            {day.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1 text-sm text-[#A9B6B0]">
                            <span className="flex items-center gap-1">
                              <Mountain className="w-4 h-4 text-[#CFFF7A]" />
                              {day.elevation}
                            </span>
                            {day.distance && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-[#CFFF7A]" />
                                {day.distance}
                              </span>
                            )}
                            {day.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-[#CFFF7A]" />
                                {day.duration}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {expandedDays.includes(day.day) ? (
                        <ChevronUp className="w-5 h-5 text-[#A9B6B0]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#A9B6B0]" />
                      )}
                    </button>

                    {expandedDays.includes(day.day) && (
                      <div className="px-5 pb-5 pt-0">
                        <div className="pl-14">
                          <p className="text-[#A9B6B0] leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Details Tab */}
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* What's Included */}
              <div>
                <h2 className="font-display font-bold text-2xl text-[#F4F7F5] mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {trek.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[#A9B6B0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div>
                <h2 className="font-display font-bold text-2xl text-[#F4F7F5] mb-6">
                  What&apos;s Not Included
                </h2>
                <ul className="space-y-3">
                  {trek.excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[#A9B6B0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16 border-t border-[#F4F7F5]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F4F7F5] mb-4">
            Ready to Trek {trek.name}?
          </h2>
          <p className="text-[#A9B6B0] mb-8">
            Book your adventure today and create memories that will last a lifetime.
          </p>
          <Link
            to={`/booking/${trek.id}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover"
          >
            <BookOpen className="w-5 h-5" />
            Book This Trek
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrekDetailPage;
