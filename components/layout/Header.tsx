import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyClick = () => {
    navigate('/apply');
    setIsMobileMenuOpen(false);
  };

  // Determine standard text color based on scroll and path
  // Since MainPage is now light-themed, we use dark text by default except for specific cases if needed
  const textColorClass = 'text-slate-800'; 
  const logoColorClass = 'text-slate-900';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors shadow-sm">
              <BarChart2 size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${logoColorClass}`}>
              조달<span className="text-primary">플러스</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary font-bold' 
                    : textColorClass
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={handleApplyClick} size="sm" className="shadow-md shadow-blue-500/20">
              베타 신청하기
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 md:hidden shadow-lg flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button onClick={handleApplyClick} fullWidth>
            베타 신청하기
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;