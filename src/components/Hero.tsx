import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_100%)]"></div>
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-radial from-accent-orange/40 to-transparent blur-[120px] animate-float opacity-40"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-radial from-accent-purple/40 to-transparent blur-[120px] animate-float [animation-direction:reverse] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-radial from-accent-blue/30 to-transparent blur-[120px] animate-pulse opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-accent-orange/10 border border-accent-orange/25 rounded-full text-xs font-semibold text-accent-orange-light backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 bg-accent-orange rounded-full animate-pulse"></span>
          Now with AI Avatars & Chat Editor
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[88px] font-extrabold font-sora leading-[1.05] tracking-tight mb-7"
        >
          AI that edits your video<br />
          <span className="gradient-text">like a professional</span> would.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transform raw footage into fully-edited, stylized videos. Auto-add captions, translate into 30+ languages, generate AI avatars, and more — in minutes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#upload" className="px-9 py-4.5 rounded-full text-base font-bold bg-linear-to-br from-accent-orange to-accent-orange-light shadow-xl shadow-accent-orange/40 hover:scale-105 active:scale-95 transition-all">
            🎬 Start editing free
          </a>
          <a href="#features" className="px-9 py-4.5 rounded-full text-base font-bold bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all">
            ▶ Watch demo
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <div className="absolute inset-[-2px] bg-linear-to-br from-accent-orange via-accent-purple to-accent-blue opacity-15 blur-2xl -z-10"></div>
            {/* The user referenced generated_image_334303c2-17d6-4c1d-ae38-4ae7b3d77ddf_0.png as top video visual */}
            <img 
              src="/generated_images/generated_image_334303c2-17d6-4c1d-ae38-4ae7b3d77ddf_0.png" 
              alt="Captions AI Video Editor Interface" 
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
