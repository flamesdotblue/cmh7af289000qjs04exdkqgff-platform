import { useState } from 'react';
import { Camera, Music, Play, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [tab, setTab] = useState('gallery');

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Portfolio</h2>
          <div className="flex items-center gap-2 rounded-full border border-white/10 p-1 bg-white/5">
            <TabButton active={tab === 'gallery'} onClick={() => setTab('gallery')} icon={<Camera className="h-4 w-4" />}>
              Gallery
            </TabButton>
            <TabButton active={tab === 'works'} onClick={() => setTab('works')} icon={<Music className="h-4 w-4" />}>
              My Works
            </TabButton>
          </div>
        </div>

        {tab === 'gallery' ? <GalleryGrid /> : <WorksGrid />}
      </div>
    </section>
  );
}

function TabButton({ active, onClick, children, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${
        active ? 'bg-white text-black' : 'text-white/80 hover:text-white'
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function GalleryGrid() {
  const images = [
    'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <img src={src} alt="Arjun live" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition">
            <p className="text-sm">Live Performance</p>
            <span className="text-xs text-white/70">© Arjun</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorksGrid() {
  const works = [
    {
      title: 'Starlit City',
      subtitle: 'Single • 2025',
      cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
      links: { youtube: '#', spotify: '#' },
    },
    {
      title: 'Echoes in Violet',
      subtitle: 'EP • 2024',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop',
      links: { youtube: '#', spotify: '#' },
    },
    {
      title: 'Midnight Letters',
      subtitle: 'Single • 2024',
      cover: 'https://images.unsplash.com/photo-1461783436728-0a9217714693?q=80&w=1000&auto=format&fit=crop',
      links: { youtube: '#', spotify: '#' },
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {works.map((w, i) => (
        <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="relative">
            <img src={w.cover} alt={w.title} className="h-48 w-full object-cover" />
            <button className="absolute inset-0 m-auto h-12 w-12 grid place-items-center rounded-full bg-black/60 border border-white/20 hover:bg-black/70 transition">
              <Play className="h-5 w-5" />
            </button>
          </div>
          <div className="p-5 flex items-center justify-between gap-3">
            <div>
              <p className="font-medium">{w.title}</p>
              <p className="text-xs text-white/60 mt-1">{w.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <a href={w.links.youtube} className="text-xs inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 hover:border-white/30">
                <ExternalLink className="h-3 w-3" /> YouTube
              </a>
              <a href={w.links.spotify} className="text-xs inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 hover:border-white/30">
                <ExternalLink className="h-3 w-3" /> Spotify
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
