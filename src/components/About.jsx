import { Users, Mic } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-[#0b0610]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Arjun</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Arjun is a singer and artist blending contemporary pop, R&B, and indie melodies with heartfelt lyricism. With a voice that moves from whisper-soft intimacy to powerful crescendos, Arjun creates performances that linger long after the final note.
            </p>
            <p className="text-white/70 leading-relaxed">
              On stage, in the studio, and across collaborations, Arjun focuses on storytelling, atmosphere, and connection. Whether it’s a stripped-back acoustic set or a full-band spectacle, the music stays honest—and unforgettable.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Stat label="Live Shows" value="150+" />
              <Stat label="Streams" value="4M+" />
              <Stat label="Collabs" value="20+" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-700/30 via-violet-700/20 to-transparent border border-white/10">
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-[radial-gradient(1200px_400px_at_80%_-10%,rgba(217,70,239,0.25),transparent)]">
                <div className="backdrop-blur-sm bg-black/30 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-fuchsia-600/80 flex items-center justify-center">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Stage Persona</p>
                      <p className="font-medium">Soulful • Dynamic • Immersive</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Known for crowd-connecting moments, vocal agility, and immersive atmospheres that turn every set into a story.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2"><Users className="h-5 w-5" /> Recent Collaborations</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <Collab name="Nova Beats" role="Producer" />
                <Collab name="LYRA" role="Indie Artist" />
                <Collab name="Echo Labs" role="Sound Design" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs tracking-wide uppercase text-white/60 mt-1">{label}</p>
    </div>
  );
}

function Collab({ name, role }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="font-medium">{name}</p>
      <p className="text-xs text-white/60 mt-1">{role}</p>
    </div>
  );
}
