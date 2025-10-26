import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, Music, Calendar, Mail, Users } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        {mounted && (
          <Spline
            scene="https://prod.spline.design/9QzN3CTDRDtw5ogp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center">
              <Mic className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">ARJUN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-fuchsia-300 transition">About</a>
            <a href="#portfolio" className="hover:text-fuchsia-300 transition">Portfolio</a>
            <a href="#collaborations" className="hover:text-fuchsia-300 transition">Collaborations</a>
            <a href="#services" className="hover:text-fuchsia-300 transition">Services</a>
            <a href="mailto:booking@arjunmusic.com" className="hover:text-fuchsia-300 transition">Contact</a>
          </div>
        </nav>

        <div className="flex h-[calc(100%-88px)] items-center">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4">Singer • Artist • Performer</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Arjun — crafting immersive soundscapes and soulful performances
            </h1>
            <p className="text-white/70 md:text-lg mb-8 max-w-2xl">
              A modern voice with classic roots. From intimate acoustic sets to arena-ready anthems, Arjun brings emotion, energy, and artistry to every stage.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
                <Music className="h-4 w-4" /> Listen & Watch
              </a>
              <a href="mailto:booking@arjunmusic.com" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600/90 px-5 py-3 text-sm font-medium hover:bg-fuchsia-600 transition">
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:border-white/40 transition">
                <Calendar className="h-4 w-4" /> Book a Show
              </a>
              <a href="#collaborations" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:border-white/40 transition">
                <Users className="h-4 w-4" /> Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
