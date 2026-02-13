import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  Calendar, 
  Users, 
  Mail, 
  Phone, 
  User, 
  Globe, 
  MessageSquare,
  Mountain,
  Clock,
  Send,
  Loader2
} from 'lucide-react';
import { treks, getTrekById } from '../data/treks';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  trekId: string;
  startDate: string;
  numberOfPeople: number;
  specialRequests: string;
}

const BookingPage = () => {
  const { trekId } = useParams<{ trekId: string }>();
  
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    trekId: trekId || '',
    startDate: '',
    numberOfPeople: 1,
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const selectedTrek = formData.trekId ? getTrekById(formData.trekId) : null;

  useEffect(() => {
    if (trekId) {
      setFormData((prev) => ({ ...prev, trekId }));
    }
  }, [trekId]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.nationality.trim()) {
      newErrors.nationality = 'Nationality is required';
    }

    if (!formData.trekId) {
      newErrors.trekId = 'Please select a trek';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    } else {
      const selectedDate = new Date(formData.startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.startDate = 'Start date must be in the future';
      }
    }

    if (formData.numberOfPeople < 1) {
      newErrors.numberOfPeople = 'At least 1 person required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call for email sending
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real implementation, you would send the email here
    // const response = await fetch('/api/send-booking-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     ...formData,
    //     trekName: selectedTrek?.name,
    //     trekDuration: selectedTrek?.duration,
    //     trekDifficulty: selectedTrek?.difficulty,
    //   }),
    // });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full min-h-screen bg-[#0B1E1A] pt-24 md:pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#CFFF7A] rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-[#0B1E1A]" />
            </div>
            <h1 className="font-display font-black text-3xl md:text-4xl text-[#F4F7F5] mb-4">
              Booking Request Received!
            </h1>
            <p className="text-[#A9B6B0] text-lg mb-8">
              Thank you for booking with TrailTrustTravel. We&apos;ve sent a confirmation 
              email to <span className="text-[#F4F7F5]">{formData.email}</span> with your 
              booking details. Our team will contact you within 24 hours.
            </p>

            {selectedTrek && (
              <div className="glass-card p-6 rounded-xl mb-8 text-left">
                <h3 className="font-display font-bold text-xl text-[#F4F7F5] mb-4">
                  Booking Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#A9B6B0]">Trek</span>
                    <span className="text-[#F4F7F5] font-medium">{selectedTrek.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A9B6B0]">Duration</span>
                    <span className="text-[#F4F7F5] font-medium">{selectedTrek.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A9B6B0]">Difficulty</span>
                    <span className="text-[#F4F7F5] font-medium">{selectedTrek.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A9B6B0]">Start Date</span>
                    <span className="text-[#F4F7F5] font-medium">
                      {new Date(formData.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A9B6B0]">Number of People</span>
                    <span className="text-[#F4F7F5] font-medium">{formData.numberOfPeople}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover"
              >
                Return to Home
              </Link>
              <Link
                to="/treks"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F4F7F5]/30 text-[#F4F7F5] font-semibold rounded-full hover:border-[#CFFF7A] hover:text-[#CFFF7A] transition-colors"
              >
                Explore More Treks
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0B1E1A] pt-24 md:pt-32 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <Link
            to={selectedTrek ? `/treks/${selectedTrek.id}` : '/treks'}
            className="inline-flex items-center gap-2 text-[#A9B6B0] hover:text-[#CFFF7A] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>

          <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#F4F7F5] mb-4">
            Book Your Trek
          </h1>
          <p className="text-[#A9B6B0] text-lg">
            Fill in the details below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="font-display font-bold text-xl text-[#F4F7F5] mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Nationality *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="United States"
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors ${
                        errors.nationality ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    />
                  </div>
                  {errors.nationality && (
                    <p className="mt-1 text-sm text-red-400">{errors.nationality}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Trek Information */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="font-display font-bold text-xl text-[#F4F7F5] mb-6">
                Trek Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Select Trek */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Select Trek *
                  </label>
                  <div className="relative">
                    <Mountain className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <select
                      name="trekId"
                      value={formData.trekId}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] focus:border-[#CFFF7A] focus:outline-none transition-colors appearance-none ${
                        errors.trekId ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    >
                      <option value="">Select a trek</option>
                      {treks.map((trek) => (
                        <option key={trek.id} value={trek.id}>
                          {trek.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.trekId && (
                    <p className="mt-1 text-sm text-red-400">{errors.trekId}</p>
                  )}
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Preferred Start Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] focus:border-[#CFFF7A] focus:outline-none transition-colors ${
                        errors.startDate ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-400">{errors.startDate}</p>
                  )}
                </div>

                {/* Number of People */}
                <div>
                  <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                    Number of People *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A9B6B0]" />
                    <input
                      type="number"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      min={1}
                      max={20}
                      className={`w-full pl-12 pr-4 py-3 bg-[#143026] border rounded-lg text-[#F4F7F5] focus:border-[#CFFF7A] focus:outline-none transition-colors ${
                        errors.numberOfPeople ? 'border-red-400' : 'border-[#F4F7F5]/10'
                      }`}
                    />
                  </div>
                  {errors.numberOfPeople && (
                    <p className="mt-1 text-sm text-red-400">{errors.numberOfPeople}</p>
                  )}
                </div>
              </div>

              {/* Selected Trek Info */}
              {selectedTrek && (
                <div className="mt-6 p-4 bg-[#143026] rounded-lg">
                  <div className="flex items-start gap-4">
                    <img
                      src={selectedTrek.image}
                      alt={selectedTrek.name}
                      className="w-24 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-[#F4F7F5]">{selectedTrek.name}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-[#A9B6B0]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#CFFF7A]" />
                          {selectedTrek.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mountain className="w-4 h-4 text-[#CFFF7A]" />
                          {selectedTrek.maxAltitude}
                        </span>
                      </div>
                      <p className="text-[#CFFF7A] font-semibold mt-2">{selectedTrek.price}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Requests */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                  Special Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#A9B6B0]" />
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any dietary requirements, medical conditions, or special requests..."
                    className="w-full pl-12 pr-4 py-3 bg-[#143026] border border-[#F4F7F5]/10 rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Booking Request
                </>
              )}
            </button>

            <p className="text-center text-[#A9B6B0] text-sm">
              By submitting, you agree to our{' '}
              <Link to="/terms" className="text-[#CFFF7A] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#CFFF7A] hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
