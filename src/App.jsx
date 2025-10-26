import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

export default function App() {
  useEffect(() => {
    // Smooth scroll for hash links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Arjun — Singer & Artist. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#portfolio" className="text-white/70 hover:text-white">Portfolio</a>
            <a href="#collaborations" className="text-white/70 hover:text-white">Collaborations</a>
            <a href="#services" className="text-white/70 hover:text-white">Services</a>
            <a href="mailto:booking@arjunmusic.com" className="text-white/70 hover:text-white">Booking</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
