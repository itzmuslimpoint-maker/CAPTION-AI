import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-xs font-semibold text-accent-orange-light uppercase tracking-widest mb-5">
            ✦ Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-sora leading-[1.1] tracking-tight mb-5">
            Captions edits with <span className="gradient-text">taste</span>, not just speed.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            From raw footage to a polished, publish-ready video — Captions handles every step with intelligent AI that understands style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="group bg-bg-card border border-white/5 rounded-3xl overflow-hidden hover:bg-bg-card-hover hover:border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="p-9">
              <div className="w-13 h-13 bg-accent-orange/15 rounded-xl flex items-center justify-center text-3xl mb-5">🎬</div>
              <h3 className="text-2xl font-bold font-sora tracking-tight mb-3">From idea to video, in minutes</h3>
              <p className="text-[15px] text-white/60 leading-relaxed">
                Captions transforms raw footage into fully-edited, stylized videos. Our AI automatically cuts scenes, overlays B-roll, adds music and transitions.
              </p>
            </div>
            <img src="/generated_images/generated_image_334303c2-17d6-4c1d-ae38-4ae7b3d77ddf_0.png" alt="AI Video Editing" className="w-full h-64 object-cover object-top" />
          </div>

          <div className="group bg-bg-card border border-white/5 rounded-3xl overflow-hidden hover:bg-bg-card-hover hover:border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="p-9">
              <div className="w-13 h-13 bg-accent-purple/15 rounded-xl flex items-center justify-center text-3xl mb-5">🧬</div>
              <h3 className="text-2xl font-bold font-sora tracking-tight mb-3">Custom AI avatars to scale fast</h3>
              <p className="text-[15px] text-white/60 leading-relaxed">
                Generate talking videos from a single selfie, or create an AI actor from scratch. Switch outfits, backgrounds, even product placements.
              </p>
            </div>
            <img src="/generated_images/generated_image_4cea0f49-77fe-49d3-89ee-7b45ee1be27b_0.png" alt="AI Avatar" className="w-full h-64 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-bg-card border border-white/5 rounded-4xl overflow-hidden">
          <div className="p-12 flex flex-col justify-center">
            <div className="w-13 h-13 bg-accent-blue/15 rounded-xl flex items-center justify-center text-3xl mb-5">🌍</div>
            <h3 className="text-3xl font-bold font-sora tracking-tight mb-4">All-in-one AI toolkit</h3>
            <p className="text-base text-white/60 leading-relaxed mb-7">
              Animated captions, AI translation, smart noise removal and more — everything you need to create scroll-stopping content.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-xs font-semibold text-accent-orange-light hover:bg-accent-orange/20 transition-colors">Auto Captions</span>
              <span className="px-3.5 py-1.5 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-xs font-semibold text-accent-purple-light hover:bg-accent-purple/20 transition-colors">AI Translate</span>
              <span className="px-3.5 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-xs font-semibold text-sky-400 hover:bg-accent-blue/20 transition-colors">AI Denoise</span>
            </div>
          </div>
          <div className="h-[400px]">
            <img src="/generated_images/generated_image_4ac3c2bd-3427-4d0f-89d9-6957bec409c9_0.png" alt="AI Toolkit" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function DemoSection({ title, desc, img, label, features, reverse = false, badge1, badge2, icon }: any) {
  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
            <motion.div 
              initial={{ opacity: 0, x: reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-4xl overflow-hidden border border-white/5 shadow-2xl"
            >
              <img src={img} alt={title} className="w-full transition-transform duration-700 hover:scale-[1.02]" />
            </motion.div>
            {badge1 && (
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur-2xl rounded-2xl p-3 px-4 flex items-center gap-2.5 shadow-2xl z-10"
              >
                <span className="text-xl">{badge1.icon}</span>
                <span className="text-xs font-bold text-black">{badge1.text}</span>
              </motion.div>
            )}
            {badge2 && (
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-2xl rounded-2xl p-3 px-4 flex items-center gap-2.5 shadow-2xl z-10"
              >
                <span className="text-xl">{badge2.icon}</span>
                <span className="text-xs font-bold text-black">{badge2.text}</span>
              </motion.div>
            )}
          </div>

          <div className={`${reverse ? "lg:order-1" : ""}`}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/80 mb-6 uppercase tracking-wider">
                {icon} {label}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sora leading-tight tracking-tight mb-6">
                {title.split(" ").map((word: string, i: number) => 
                  word.toLowerCase() === "finished" || word.toLowerCase() === "videos" || word.toLowerCase() === "text" || word.toLowerCase() === "finished" || word.toLowerCase() === "video" || word.toLowerCase() === "again"
                    ? <span key={i} className={reverse ? "gradient-text-purple" : "gradient-text"}>{word} </span> 
                    : word + " "
                )}
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-9">{desc}</p>
              
              <div className="flex flex-col gap-3.5 mb-10">
                {features.map((feature: string) => (
                  <div key={feature} className="flex items-start gap-3.5 text-white/70">
                    <div className="w-5.5 h-5.5 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 text-[10px] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#signup" className="inline-flex px-8 py-3.5 rounded-full font-bold bg-linear-to-br from-accent-orange to-accent-orange-light shadow-xl shadow-accent-orange/30 hover:scale-105 active:scale-95 transition-all">
                Try it free →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
