import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee, TrustedBy } from "./components/Trust";
import { Features, DemoSection } from "./components/Features";
import { VideoDemo } from "./components/VideoDemo";
import { Steps, FAQ, Pricing, CTA, Footer } from "./components/StepsAndPricing";
import { Feedback } from "./components/Feedback";
import { Auth } from "./components/Auth";
import { Dashboard } from "./components/Dashboard";
import { supabase } from "./lib/supabase";

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-accent-orange/20 border-t-accent-orange rounded-full animate-spin" />
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Dashboard user={user} onLogout={handleLogout} />
        <Feedback />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-white selection:bg-accent-orange selection:text-white">
      <Navbar onSignInClick={() => setAuthOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <TrustedBy />
        <Features />
        
        <DemoSection 
          title="Turn footage into finished videos instantly"
          desc="AI Edit transforms your raw clips into a complete, polished video that's ready to share. Just pick a style, and our AI handles every cut, transition, and effect automatically."
          img="/generated_images/generated_image_334303c2-17d6-4c1d-ae38-4ae7b3d77ddf_0.png"
          label="AI Edit"
          icon="🎬"
          features={[
            "Automatically cuts & sequences scenes for maximum impact",
            "Adds cinematic B-roll, overlays and motion graphics",
            "Inserts perfectly-timed sound effects and music",
            "50+ curated styles for every platform and audience"
          ]}
          badge1={{ icon: "⚡", text: "Edited in 2 minutes" }}
          badge2={{ icon: "🎨", text: "50+ Style templates" }}
        />

        <DemoSection 
          title="Edit like you text"
          desc="Captions' chat-based editor handles everything from minor tweaks to abstract creative requests. Just describe what you want in plain English, and AI does the rest."
          img="/generated_images/generated_image_4ac3c2bd-3427-4d0f-89d9-6957bec409c9_0.png"
          label="Chat Editor"
          icon="💬"
          reverse
          features={[
            "Make this more energetic — AI re-paces your video",
            "Remove all the pauses — silence trimmed in seconds",
            "Add a dark cinematic look — color grade applied instantly",
            "Handles abstract requests with contextual understanding"
          ]}
        />

        <DemoSection 
          title="Never record a video again"
          desc="Turn a single selfie into a realistic talking avatar. Create a digital twin of yourself or build a custom AI spokesperson from scratch. Scale your content without the camera."
          img="/generated_images/generated_image_4cea0f49-77fe-49d3-89ee-7b45ee1be27b_0.png"
          label="AI Avatars"
          icon="🧬"
          features={[
            "Create a digital twin from one photo in minutes",
            "Switch outfits, backgrounds and product placements",
            "Reuse the same AI actor across unlimited videos",
            "Realistic lip-sync with AI voice cloning"
          ]}
          badge1={{ icon: "🧬", text: "Digital Twin created" }}
        />

        <VideoDemo />
        <Steps />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <Feedback />
      <Auth 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        onSuccess={(u) => {
          setUser(u);
          setAuthOpen(false);
        }} 
      />
    </div>
  );
}
