export function Marquee() {
  const items = [
    "AI Video Editing", "Auto Captions", "100+ Languages", "AI Avatars", 
    "Voice Clone", "B-Roll Generator", "Chat Editor", "Eye Contact Fix", 
    "AI Translate", "Noise Removal", "AI Music", "Video Ads"
  ];

  return (
    <div className="py-7 overflow-hidden border-y border-white/5 bg-bg-secondary">
      <div className="flex gap-10 whitespace-nowrap animate-scroll-left w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold text-white/35">
            <span className="w-1.5 h-1.5 bg-accent-orange rounded-full opacity-60"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  const logos = ["YouTube", "TikTok", "Instagram", "Spotify", "Netflix", "Forbes", "Bloomberg", "Shopify"];
  return (
    <section className="py-15 border-b border-white/5 bg-linear-to-b from-white/[0.01] to-transparent">
      <div className="container mx-auto px-6">
        <p className="text-center text-[13px] font-medium text-white/35 uppercase tracking-widest mb-8">Trusted by creators at</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map(logo => (
            <span key={logo} className="text-lg font-bold text-white/20 hover:text-white/50 transition-colors tracking-tight">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
