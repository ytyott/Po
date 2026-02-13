import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Loader2, 
  Check,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@trailtrust.travel',
      link: 'mailto:info@trailtrust.travel',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+977 980 000 0000',
      link: 'tel:+9779800000000',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Thamel, Kathmandu, Nepal',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Sun-Fri: 9AM - 6PM NPT',
      link: '#',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B1E1A] pt-24 md:pt-32 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-[#CFFF7A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#F4F7F5] mb-4">
            Contact Us
          </h1>
          <p className="text-[#A9B6B0] text-base md:text-lg max-w-2xl mx-auto">
            Have questions about trekking in Nepal? We&apos;re here to help you plan 
            your perfect Himalayan adventure.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className={`glass-card p-6 rounded-xl text-center hover:border-[#CFFF7A]/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#CFFF7A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#CFFF7A]" />
                </div>
                <h3 className="font-semibold text-[#F4F7F5] mb-1">{info.title}</h3>
                <p className="text-[#A9B6B0] text-sm">{info.content}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form & Map */}
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div
              className={`glass-card p-6 md:p-8 rounded-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#CFFF7A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-[#0B1E1A]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#F4F7F5] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#A9B6B0]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-2xl text-[#F4F7F5] mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-[#143026] border border-[#F4F7F5]/10 rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-[#143026] border border-[#F4F7F5]/10 rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#143026] border border-[#F4F7F5]/10 rounded-lg text-[#F4F7F5] focus:border-[#CFFF7A] focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Question</option>
                        <option value="trek">Trek Information</option>
                        <option value="custom">Custom Itinerary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#A9B6B0] mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 bg-[#143026] border border-[#F4F7F5]/10 rounded-lg text-[#F4F7F5] placeholder-[#A9B6B0] focus:border-[#CFFF7A] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#CFFF7A] text-[#0B1E1A] font-semibold rounded-full btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map & Social */}
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
              }`}
            >
              {/* Map placeholder */}
              <div className="glass-card p-2 rounded-xl overflow-hidden">
                <div className="relative h-64 md:h-80 bg-[#143026] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.008772827!2d85.3105!3d27.7154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e2c0e7a4b5%3A0x9!2sThamel%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-display font-bold text-lg text-[#F4F7F5] mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#143026] rounded-full flex items-center justify-center text-[#A9B6B0] hover:text-[#CFFF7A] hover:bg-[#1a3d30] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#143026] rounded-full flex items-center justify-center text-[#A9B6B0] hover:text-[#CFFF7A] hover:bg-[#1a3d30] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#143026] rounded-full flex items-center justify-center text-[#A9B6B0] hover:text-[#CFFF7A] hover:bg-[#1a3d30] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-display font-bold text-lg text-[#F4F7F5] mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-[#A9B6B0] text-sm">
                  We aim to respond to all inquiries within 24 hours. For urgent matters, 
                  please call us directly at +977 980 000 0000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
