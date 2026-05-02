import React, { useState, useEffect, useRef } from "react";
import { 
  Home, User, Search, FolderPlus, Clock, Settings, HelpCircle, 
  Plus, Upload, ShieldCheck, ChevronRight, Loader2, ArrowLeft, 
  MoreHorizontal, Download, Share2, FileVideo
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

type ViewState = "home" | "processing";

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [view, setView] = useState<ViewState>("home");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>("bold");
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [processedVideoUrl, setProcessedVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert("Please upload a video file.");
      return;
    }

    setIsUploading(true);
    setView("processing");
    setProgress(10);
    setError(null);
    setProcessedVideoUrl(null);

    const formData = new FormData();
    formData.append("video", file);
    formData.append("style", selectedTemplate || "bold");

    try {
      // Fake progress incrementing while waiting for server
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) return 95;
          return prev + Math.random() * 2;
        });
      }, 1000);

      const response = await fetch("/api/process", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to process video");
      }

      const data = await response.json();
      setProcessedVideoUrl(data.url);
      setProgress(100);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during processing.");
      setView("home");
    } finally {
      setIsUploading(false);
    }
  };

  const templates = [
    { id: "prism", name: "Prism Pro", img: "/generated_images/generated_image_334303c2-17d6-4c1d-ae38-4ae7b3d77ddf_0.png" },
    { id: "paper", name: "Paper II", img: "/generated_images/generated_image_4ac3c2bd-3427-4d0f-89d9-6957bec409c9_0.png" },
    { id: "prime", name: "Prime", img: "/generated_images/generated_image_4cea0f49-77fe-49d3-89ee-7b45ee1be27b_0.png" },
    { id: "elevate", name: "Elevate", img: "/generated_images/generated_image_334303c2-17d6-4c1d-ae38-4ae7b3d77ddf_0.png" },
    { id: "impact", name: "Impact II", img: "/generated_images/generated_image_4ac3c2bd-3427-4d0f-89d9-6957bec409c9_0.png" },
    { id: "sketch", name: "Sketch", img: "/generated_images/generated_image_4cea0f49-77fe-49d3-89ee-7b45ee1be27b_0.png" },
  ];

  const handleTemplateSelect = (id: string) => {
    setSelectedTemplate(id);
    setView("processing");
    setProgress(0);
  };

  useEffect(() => {
    if (view === "processing") {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 5) + 2;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [view]);

  return (
    <div className="flex h-screen bg-[#0B0B0F] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#08080A] border-r border-white/5 flex flex-col shrink-0">
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 bg-linear-to-br from-[#FF7A18] to-[#FFB347] rounded-lg flex items-center justify-center shrink-0">✦</div>
            <span className="font-bold text-sm truncate">{user.email.split('@')[0]}'s Team</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-white/20" />
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" active={view === "home"} onClick={() => setView("home")} />
          <NavItem icon={<User className="w-4 h-4" />} label="Actors" />
          <NavItem icon={<Search className="w-4 h-4" />} label="Search" />
          <NavItem icon={<FolderPlus className="w-4 h-4" />} label="New Folder" />
          
          <div className="pt-6 pb-2 text-[10px] font-bold text-white/20 uppercase tracking-widest px-3">Recent Projects</div>
          <NavItem icon={<Clock className="w-4 h-4" />} label="Untitled" sublabel="2 minutes ago" />
        </nav>

        <div className="p-4 border-t border-white/5 bg-[#0B0B0F]/50">
          <div className="bg-white/5 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/40">Credits left</span>
              <span className="text-xs font-bold text-accent-orange">31</span>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="bg-accent-orange h-full w-[60%]"></div>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all">
            <HelpCircle className="w-4 h-4" />
            Help & Support
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <AnimatePresence mode="wait">
          {view === "home" ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-10 max-w-6xl mx-auto"
            >
              <header className="mb-12">
                <h1 className="text-4xl font-bold font-sora mb-2">Welcome to Captions</h1>
                <p className="text-white/40">Import media and select an edit style to get started</p>
              </header>

              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`group relative bg-[#121218] border-2 border-dashed rounded-[40px] p-20 text-center mb-16 transition-all cursor-pointer overflow-hidden ${
                  isDragging 
                    ? "border-accent-orange bg-accent-orange/10 scale-[1.01] shadow-[0_0_50px_rgba(255,122,24,0.15)]" 
                    : "border-white/5 hover:border-accent-orange/30 hover:bg-accent-orange/[0.02]"
                }`}
              >
                <div className={`absolute inset-0 bg-radial from-accent-orange/5 to-transparent transition-opacity ${isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></div>
                <div className="relative z-10">
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="video/*"
                    onChange={handleFileSelect}
                  />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`w-20 h-20 rounded-[32px] flex items-center justify-center mx-auto mb-8 transition-transform shadow-2xl ${
                    isDragging ? "bg-accent-orange text-white scale-110" : "bg-white/5 text-white/40 group-hover:text-white group-hover:scale-110"
                  }`}>
                    <Upload className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDragging ? "text-white" : "text-white"}`}>
                    {isDragging ? "Drop your video here" : "Import a video"}
                  </h3>
                  <p className="text-white/40 mb-8">
                    {isDragging ? "Let go to start editing" : "Drop your .mp4 or .mov files here"}
                  </p>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    isDragging ? "bg-accent-orange text-white" : "bg-white/10 hover:bg-white/15"
                  }`}>
                    {isDragging ? "Ready to import" : "Browse files"}
                  </button>
                </div>
              </div>

              <section>
                <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                  Editing Templates
                  <span className="px-2 py-0.5 bg-accent-orange/10 text-accent-orange text-[10px] rounded-full uppercase tracking-widest">New</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {templates.map((tpl) => (
                    <motion.div 
                      key={tpl.id}
                      whileHover={{ y: -8 }}
                      onClick={() => handleTemplateSelect(tpl.id)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 shadow-xl group-hover:border-accent-orange/30 group-hover:shadow-accent-orange/10 transition-all">
                        <img src={tpl.img} alt={tpl.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                          <p className="text-[10px] font-bold text-accent-orange uppercase tracking-widest mb-1">Click to apply</p>
                          <h4 className="text-white font-bold">{tpl.name}</h4>
                        </div>
                        <div className="absolute top-4 left-4 right-4 text-center">
                          <span className="text-[10px] font-extrabold text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">Caption Preview</span>
                        </div>
                      </div>
                      <p className="mt-4 text-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">{tpl.name}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div 
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col"
            >
              <header className="p-6 border-b border-white/5 flex items-center justify-between bg-[#08080A]">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setView("home")}
                    className="p-2 hover:bg-white/5 rounded-xl transition-all"
                  >
                    <ArrowLeft className="w-5 h-5 text-white/40" />
                  </button>
                  <div>
                    <h2 className="font-bold text-sm">Untitled Project</h2>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest">Editing with {selectedTemplate} Style</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all"><Share2 className="w-5 h-5 text-white/40" /></button>
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all"><Download className="w-5 h-5 text-white/40" /></button>
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all"><MoreHorizontal className="w-5 h-5 text-white/40" /></button>
                </div>
              </header>

              <div className="flex-1 flex items-center justify-center p-10">
                <div className="relative w-full max-w-4xl aspect-video bg-[#08080A] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl flex flex-col items-center justify-center">
                  <div className="absolute inset-0 opacity-10 blur-[100px] pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange rounded-full animate-pulse"></div>
                  </div>

                  <div className="relative z-10 text-center">
                    {progress < 100 ? (
                      <>
                        <div className="relative w-32 h-32 mx-auto mb-8">
                          <svg className="w-full h-full rotate-[-90deg]">
                            <circle 
                              cx="64" cy="64" r="60" 
                              className="stroke-white/5 fill-none" 
                              strokeWidth="4" 
                            />
                            <circle 
                              cx="64" cy="64" r="60" 
                              className="stroke-accent-orange fill-none transition-all duration-300" 
                              strokeWidth="4" 
                              strokeDasharray="377" 
                              strokeDashoffset={377 - (377 * progress) / 100}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center font-sora font-extrabold text-2xl">
                            {progress}%
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold font-sora mb-2">Working on your video...</h3>
                        <p className="text-white/40">Applying {selectedTemplate} styles and generating captions</p>
                      </>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                          <ShieldCheck className="w-12 h-12" />
                        </div>
                        <h3 className="text-3xl font-bold font-sora mb-2 text-white">Video Ready!</h3>
                        <p className="text-white/40 mb-6">Your video has been polished with AI magic</p>
                        
                        {processedVideoUrl && (
                          <div className="w-full max-w-sm aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 mb-8 shadow-2xl">
                            <video 
                              src={processedVideoUrl} 
                              controls 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}

                        <div className="flex gap-4">
                          <button 
                            onClick={() => {
                              setView("home");
                              setProcessedVideoUrl(null);
                              setProgress(0);
                            }}
                            className="px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
                          >
                            Back to dashboard
                          </button>
                          {processedVideoUrl && (
                            <a 
                              href={processedVideoUrl}
                              download="captioned_video.mp4"
                              className="px-8 py-3.5 rounded-2xl bg-linear-to-br from-[#FF7A18] to-[#FFB347] font-bold shadow-xl shadow-accent-orange/30 hover:scale-105 active:scale-95 transition-all text-white flex items-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Save & Export
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavItem({ icon, label, sublabel, active, onClick }: { icon: any, label: string, sublabel?: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3 rounded-2xl text-sm transition-all group ${
        active ? 'bg-white/[0.08] text-white shadow-xl' : 'text-white/40 hover:text-white/80 hover:bg-white/[0.04]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`${active ? 'text-accent-orange' : 'text-inherit opacity-50 group-hover:opacity-100'} transition-colors`}>
          {icon}
        </div>
        <div className="text-left">
          <div className="font-semibold">{label}</div>
          {sublabel && <div className="text-[10px] opacity-40">{sublabel}</div>}
        </div>
      </div>
      <ChevronRight className={`w-3.5 h-3.5 transition-all ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
    </button>
  );
}
