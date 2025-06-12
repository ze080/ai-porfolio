import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-medium">
            {/* Replace with your logo */}
            Portfolio
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="#work" className="text-white/80 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
