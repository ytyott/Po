import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/treks', label: 'All Treks' },
    { path: '/about', label: 'About Nepal' },
    { path: '/contact', label: 'Contact' },
    { path: '/booking', label: 'Book a Trek' },
  ];

  const topTreks = [
    { path: '/treks/everest-base-camp', label: 'Everest Base Camp' },
    { path: '/treks/annapurna-circuit', label: 'Annapurna Circuit' },
    { path: '/treks/langtang-valley', label: 'Langtang Valley' },
    { path: '/treks/manaslu-circuit', label: 'Manaslu Circuit' },
  ];

  return (
    <footer className="bg-[#0B1E1A] border-t border-[#F4F7F5]/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-[#CFFF7A]" />
              <span className="font-display text-xl font-bold tracking-wider text-[#F4F7F5]">
                TRAILTRUST
              </span>
            </Link>
            <p className="text-[#A9B6B0] text-sm leading-relaxed mb-6">
              Discover Nepal one trail at a time. Guided trekking experiences across the Himalayas—safe, responsible, and unforgettable.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143026] flex items-center justify-center text-[#A9B6B0] hover:text-[#CFFF7A] hover:bg-[#1a3d30] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143026] flex items-center justify-center text-[#A9B6B0] hover:text-[#CFFF7A] hover:bg-[#1a3d30] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143026] flex items-center justify-center text-[#A9B6B0] hover:text-[#CFFF7A] hover:bg-[#1a3d30] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-[#F4F7F5] mb-4 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#A9B6B0] text-sm hover:text-[#CFFF7A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Treks */}
          <div>
            <h3 className="font-display font-bold text-[#F4F7F5] mb-4 tracking-wide">
              TOP TREKS
            </h3>
            <ul className="space-y-3">
              {topTreks.map((trek) => (
                <li key={trek.path}>
                  <Link
                    to={trek.path}
                    className="text-[#A9B6B0] text-sm hover:text-[#CFFF7A] transition-colors"
                  >
                    {trek.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-[#F4F7F5] mb-4 tracking-wide">
              CONTACT US
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CFFF7A] flex-shrink-0 mt-0.5" />
                <span className="text-[#A9B6B0] text-sm">
                  Thamel, Kathmandu<br />
                  Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CFFF7A] flex-shrink-0" />
                <a
                  href="mailto:info@trailtrust.travel"
                  className="text-[#A9B6B0] text-sm hover:text-[#CFFF7A] transition-colors"
                >
                  info@trailtrust.travel
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CFFF7A] flex-shrink-0" />
                <a
                  href="tel:+9779800000000"
                  className="text-[#A9B6B0] text-sm hover:text-[#CFFF7A] transition-colors"
                >
                  +977 980 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#F4F7F5]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A9B6B0] text-sm">
            © {currentYear} TrailTrustTravel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[#A9B6B0] text-sm hover:text-[#CFFF7A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#A9B6B0] text-sm hover:text-[#CFFF7A] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
