import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Bug, Lightbulb, Send, CheckCircle2 } from "lucide-react";

export function Feedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<"bug" | "feature">("bug");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setEmail("");
        setMessage("");
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-linear-to-br from-accent-orange to-accent-orange-light rounded-full flex items-center justify-center shadow-2xl shadow-accent-orange/40 text-white cursor-pointer"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-sora tracking-tight">Feedback</h3>
                    <p className="text-xs text-white/40">Help us improve Captions</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                    <p className="text-sm text-white/50">Your feedback has been submitted successfully.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setType("bug")}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                          type === "bug"
                            ? "bg-accent-orange/10 border-accent-orange text-accent-orange"
                            : "bg-white/5 border-white/5 text-white/40 hover:border-white/10"
                        }`}
                      >
                        <Bug className="w-6 h-6" />
                        <span className="text-xs font-bold uppercase tracking-wider">Bug Report</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("feature")}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                          type === "feature"
                            ? "bg-accent-purple/10 border-accent-purple text-accent-purple"
                            : "bg-white/5 border-white/5 text-white/40 hover:border-white/10"
                        }`}
                      >
                        <Lightbulb className="w-6 h-6" />
                        <span className="text-xs font-bold uppercase tracking-wider">Feature</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-white/30 uppercase tracking-widest px-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-orange transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-white/30 uppercase tracking-widest px-1">Message</label>
                        <textarea
                          required
                          rows={4}
                          placeholder={type === "bug" ? "Describe the issue..." : "Tell us your idea..."}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-orange transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <button
                      disabled={loading}
                      className="w-full py-4 bg-linear-to-br from-accent-orange to-accent-orange-light rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-accent-orange/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Feedback
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
