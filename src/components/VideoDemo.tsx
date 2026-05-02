import { useState, useEffect } from "react";
import { Play, Pause, Volume2, Maximize } from "lucide-react";
import { motion } from "motion/react";

export function VideoDemo() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [captionIndex, setCaptionIndex] = useState(0);

  const captions = [
    'The <span class="text-accent-orange">future</span> is here.',
    'AI edits like a <span class="text-accent-orange">pro</span>.',
    'Your <span class="text-accent-orange">creative</span> partner.',
    'Just <span class="text-accent-orange">upload</span> and go.',
    'Made with <span class="text-accent-orange">Captions</span>.',
  ];

  useEffect(() => {
    let interval: any;
    if (playing) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });

        if (Math.round(progress) % 15 === 0) {
          setCaptionIndex((prev) => (prev + 1) % captions.length);
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [playing, progress]);

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/60 uppercase tracking-widest mb-5">▶ Live Preview</div>
          <h2 className="text-4xl font-extrabold font-sora tracking-tight mb-5">See <span className="gradient-text">Captions</span> in action</h2>
          <p className="text-lg text-white/60 leading-relaxed">Watch how raw footage transforms into a polished, captioned video — powered by AI, in real time.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#0d0d0d] rounded-[32px] border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-[#161616] p-4 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
            <span className="ml-3 text-[13px] text-white/30">captions.ai — Editor</span>
          </div>

          <div className="aspect-video bg-linear-to-br from-[#111] via-[#1a0a00] to-[#0a001a] flex items-center justify-center relative overflow-hidden">
            <button 
              onClick={() => setPlaying(!playing)}
              className={`w-18 h-18 rounded-full flex items-center justify-center text-2xl transition-all duration-300 z-10 shadow-2xl ${playing ? 'bg-white/15' : 'bg-accent-orange shadow-accent-orange/40 hover:scale-110'}`}
            >
              {playing ? <Pause className="fill-white" /> : <Play className="ml-1 fill-white" />}
            </button>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-6 py-2.5 text-lg font-extrabold text-white whitespace-nowrap">
              <div dangerouslySetInnerHTML={{ __html: captions[captionIndex] }} />
            </div>
          </div>

          <div className="p-4 flex items-center gap-4">
            <Volume2 className="w-4 h-4 text-white/60 cursor-pointer" />
            <div className="flex-1 h-1 bg-white/10 rounded-full relative cursor-pointer group">
              <div 
                className="absolute left-0 top-0 h-full bg-accent-orange rounded-full" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
            </div>
            <span className="text-[11px] text-white/30 font-mono">0:{(Math.floor(progress * 0.6)).toString().padStart(2, '0')} / 0:59</span>
            <Maximize className="w-4 h-4 text-white/60 cursor-pointer ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
