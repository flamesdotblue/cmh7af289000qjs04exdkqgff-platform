import { Mic, Users, Calendar, Mail, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-t from-black to-[#0b0610]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 id="services" className="text-3xl md:text-4xl font-semibold mb-3">Services</h2>
            <p className="text-white/70 max-w-2xl">
              Book Arjun for live performances, studio vocals, topline songwriting, and collaborative sessions. Flexible arrangements for festivals, private events, and studio projects.
            </p>
          </div>
          <a href="mailto:booking@arjunmusic.com" className="hidden md:inline-flex items-center gap-2 rounded-full bg-fuchsia-600/90 px-5 py-3 text-sm font-medium hover:bg-fuchsia-600 transition">
            <Mail className="h-4 w-4" /> booking@arjunmusic.com
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card icon={<Mic className="h-5 w-5" />} title="Live Performances" desc="Concerts, festivals, private events—from intimate acoustics to full-band sets." />
          <Card icon={<Users className="h-5 w-5" />} title="Collaborations" desc="Features, duets, and creative collabs with artists, producers, and brands." />
          <Card icon={<Calendar className="h-5 w-5" />} title="Studio & Sessions" desc="Topline songwriting, vocal tracking, harmonies, and custom recordings." />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-14">
          <div>
            <p className="text-sm text-white/60">Bookings & Inquiries</p>
            <p className="text-lg md:text-xl font-medium mt-1">Let’s bring the right sound to your stage or studio</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:collab@arjunmusic.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm hover:border-white/40">
              <Mail className="h-4 w-4" /> collab@arjunmusic.com
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">View Portfolio</a>
          </div>
        </div>

        <div id="collaborations" className="mb-4 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <h3 className="text-2xl md:text-3xl font-semibold">Collaborations</h3>
        </div>
        <p className="text-white/70 mb-8 max-w-3xl">
          Arjun partners with artists, producers, and brands to craft unique records, live crossovers, and sonic identities. Here are a few recent collaborators and creative partners.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <CollabCard name="Nova Beats" role="Producer" blurb="Cinematic pop textures and lush synthscapes." />
          <CollabCard name="LYRA" role="Indie Artist" blurb="Dream-pop duets with shimmering harmonies." />
          <CollabCard name="Echo Labs" role="Sound Design" blurb="Immersive atmospheres for live intros." />
          <CollabCard name="Velvet St." role="Band" blurb="Neo-soul ensemble for live sessions." />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-transparent p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-white/60">Open to New Collabs</p>
            <p className="text-lg font-medium">Pitch a project, share a demo, or request a topline</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:collab@arjunmusic.com?subject=Collaboration%20Request%20for%20Arjun" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
              <Mail className="h-4 w-4" /> Email Collab Brief
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm hover:border-white/40">View Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="h-10 w-10 rounded-lg bg-fuchsia-600/20 border border-fuchsia-600/30 text-fuchsia-200 grid place-items-center mb-4">
        {icon}
      </div>
      <p className="font-medium mb-1">{title}</p>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  );
}

function CollabCard({ name, role, blurb }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-white/60">{role}</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-fuchsia-600/20 border border-fuchsia-600/30" />
      </div>
      <p className="text-sm text-white/70">{blurb}</p>
    </div>
  );
}
