import { motion, AnimatePresence } from "motion/react";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

export function Steps() {
  const steps = [
    { num: 1, title: "Upload your video", desc: "Import from your phone, camera, or drag-and-drop any file." },
    { num: 2, title: "Pick a style", desc: "Choose from 50+ curated AI editing styles, or describe your intent." },
    { num: 3, title: "AI edits for you", desc: "Captions automatically cuts, captions, adds B-roll, music, and effects." },
    { num: 4, title: "Export & share", desc: "Download in 4K, or share directly to social media from the app." },
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-xs font-semibold text-accent-orange-light uppercase tracking-widest mb-5">🚀 How It Works</div>
          <h2 className="text-4xl font-extrabold font-sora tracking-tight mb-5">From upload to <span className="gradient-text">published</span> in 4 steps</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-9 left-[15%] right-[15%] h-px bg-linear-to-r from-transparent via-accent-orange/40 to-transparent"></div>
          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className={`w-18 h-18 rounded-full flex items-center justify-center font-sora text-2xl font-extrabold mx-auto mb-5 border-2 transition-all group hover:scale-110 ${step.num === 1 ? 'bg-linear-to-br from-accent-orange to-accent-orange-light border-transparent shadow-xl shadow-accent-orange/40' : 'bg-bg-card border-white/5'}`}>
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "How do I get Captions?", a: "Captions is available on iOS (App Store), Android (Google Play), and on the web at captions.ai." },
    { q: "Is Captions free to use?", a: "Captions is free to download and includes basic editing tools. To unlock AI features, plans start at $9.99/month." },
    { q: "What languages does Captions support?", a: "Captions supports auto-captions in 100+ languages and AI translation in 30+ languages." },
    { q: "How does the AI editing work?", a: "AI analyzes your footage, cuts scenes, adds B-roll, music, and transitions — all in under 2 minutes." },
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/60 uppercase tracking-widest mb-5">❓ FAQ</div>
          <h2 className="text-4xl font-extrabold font-sora tracking-tight">Frequently asked <span className="gradient-text">questions</span></h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5.5 flex items-center justify-between text-left font-semibold hover:text-accent-orange-light transition-colors"
              >
                {faq.q}
                <Plus className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-accent-orange' : 'text-white/30'}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    { name: "Free", price: "0", note: "Forever free", btn: "Get started", features: ["Basic trim & cut", "1 caption template", "Standard export", "Teleprompter"] },
    { name: "Pro", price: isYearly ? "6.99" : "9.99", note: isYearly ? "Billed annually" : "Billed monthly", btn: "Get started", features: ["Everything in Free", "Footage fixes", "100+ caption templates", "100+ languages", "No watermark export"] },
    { name: "Max", price: isYearly ? "17.49" : "24.99", note: isYearly ? "Billed annually" : "Billed monthly", btn: "Get started", features: ["Everything in Pro", "50+ AI styles", "AI avatars & twins", "Chat-based editor", "500 AI credits", "AI B-roll & music"], popular: true },
    { name: "Scale", price: isYearly ? "48.99" : "69.99", note: isYearly ? "Billed annually" : "Billed monthly", btn: "Get started", features: ["Everything in Max", "1,400 credits", "Advanced AI models", "Priority processing", "Beta features access"] },
  ];

  return (
    <section id="pricing" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-xs font-semibold text-accent-orange-light uppercase tracking-widest mb-5">💳 Pricing</div>
          <h2 className="text-4xl font-extrabold font-sora tracking-tight mb-5">Simple, transparent <span className="gradient-text">pricing</span></h2>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-white/40'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className={`w-13 h-7 rounded-full relative transition-colors ${isYearly ? 'bg-accent-orange' : 'bg-white/10'}`}
          >
            <div className={`absolute top-0.5 bottom-0.5 w-6 rounded-full bg-white transition-all ${isYearly ? 'left-6.5' : 'left-0.5'}`}></div>
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-white/40'}`}>Yearly</span>
          <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider">Save 30%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-bg-card border rounded-3xl p-8 transition-all hover:-translate-y-1 ${plan.popular ? 'border-accent-orange/30 bg-accent-orange/5 ring-1 ring-accent-orange/20 lg:-translate-y-2' : 'border-white/5'}`}>
              {plan.popular && <div className="bg-accent-orange text-[10px] font-extrabold text-white uppercase tracking-widest px-4 py-1 rounded-full w-max mx-auto -mt-11 mb-6 shadow-lg shadow-accent-orange/40">Most Popular</div>}
              <div className="text-xl font-bold font-sora mb-1.5">{plan.name}</div>
              <div className="text-xs text-white/40 mb-6 leading-relaxed">{plan.price === "0" ? "Basic tools" : "Scale your creativity"}</div>
              <div className="flex items-baseline gap-1 mb-1.5">
                {plan.price !== "0" && <span className="text-lg font-bold text-white/50">$</span>}
                <span className="text-4xl font-extrabold font-sora tracking-tight">{plan.price}</span>
                {plan.price !== "0" && <span className="text-sm text-white/40">/mo</span>}
              </div>
              <div className="text-[11px] text-white/30 mb-8">{plan.note}</div>
              <button className={`w-full py-3 rounded-full font-bold mb-8 transition-all ${plan.popular ? 'bg-accent-orange hover:bg-accent-orange-light shadow-xl shadow-accent-orange/30' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                {plan.btn}
              </button>
              <div className="w-full h-px bg-white/5 mb-6"></div>
              <ul className="space-y-3.5">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-white/50 leading-relaxed items-start">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-32 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="relative bg-bg-card border border-accent-orange/20 rounded-[40px] p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-accent-orange/10 to-transparent blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial from-accent-purple/10 to-transparent blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-xs font-semibold text-accent-orange-light uppercase tracking-widest mb-8">✦ Start creating today</div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-sora tracking-tight mb-6">
              Start creating.<br />
              <span className="gradient-text">It's free.</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-lg mx-auto leading-relaxed">Join 2 million+ creators who use Captions to make professional videos in minutes, not hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#signup" className="px-9 py-4.5 rounded-full text-base font-bold bg-linear-to-br from-accent-orange to-accent-orange-light shadow-xl shadow-accent-orange/40 hover:scale-105 active:scale-95 transition-all">
                🎬 Get started free
              </a>
              <a href="#download" className="px-9 py-4.5 rounded-full text-base font-bold bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all">
                📱 Download the app
              </a>
            </div>
            <p className="mt-8 text-xs text-white/30">No credit card required · Free forever plan available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    { title: "Product", items: ["Overview", "Pricing", "Download", "AI Edit", "AI Avatars", "Chat Editor"] },
    { title: "Solutions", items: ["Enterprise", "Agencies", "Small Business", "Content Creators", "Educators"] },
    { title: "Resources", items: ["Blog", "Research", "Help Center", "Careers", "Press Kit"] },
    { title: "Company", items: ["About Us", "Contact", "Press", "Investors", "Security"] },
  ];

  return (
    <footer className="pt-24 pb-12 bg-bg-secondary border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
             <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight font-sora mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-accent-orange to-accent-orange-light rounded-lg flex items-center justify-center text-base">✦</div>
              Captions
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px] mb-8">
              AI that edits your video like a professional would. Transform footage into polished, publish-ready content in minutes.
            </p>
            <div className="flex gap-2.5">
              {['𝕏', '📸', '♪', '▶', 'in'].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-sm grayscale hover:grayscale-0 hover:bg-white/10 transition-all">{s}</a>
              ))}
            </div>
          </div>
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="text-[13px] font-bold text-white/30 uppercase tracking-widest mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs text-white/30">© 2025 Captions AI, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Security", "Cookie Policy"].map(l => (
              <a key={l} href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
