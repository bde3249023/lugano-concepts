import DecryptText from "@/components/DecryptText";
import LuganoLogo from "@/components/LuganoLogo";
import PrivacyGlobe from "@/components/PrivacyGlobe";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [redactedMode, setRedactedMode] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Parallax effect for hero
      if (heroRef.current) {
        const scroll = window.scrollY;
        heroRef.current.style.transform = `translateY(${scroll * 0.5}px)`;
        heroRef.current.style.opacity = `${1 - scroll / 700}`;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'r') {
        setRedactedMode(prev => !prev);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const Redactable = ({ children }: { children: React.ReactNode }) => (
    <span className={`transition-all duration-300 ${redactedMode ? "bg-white text-transparent select-none rounded-sm px-1" : ""}`}>
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-100 overflow-x-hidden font-sans relative">
      <Helmet>
        <title>Lugano.ai | The Architecture of Silence</title>
        <meta name="description" content="Lugano.ai is the privacy infrastructure layer for enterprise AI. Run powerful models on your most sensitive data with zero leaks and zero trade-offs." />
      </Helmet>

      {/* Redacted Mode Hint */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block animate-pulse">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
          Press <span className="text-purple-500 font-bold">'R'</span> to {redactedMode ? "Reveal" : "Redact"}
        </p>
      </div>

      {/* Navigation - Minimal & Floating */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <LuganoLogo className="h-6 w-auto text-white" />
          </a>
          <div className="hidden md:flex items-center gap-12 text-xs font-mono tracking-[0.2em] uppercase text-white/60">
            <a href="#paradigm" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              The Paradigm
            </a>
            <a href="#architecture" className="hover:text-white transition-colors duration-300">The Architecture</a>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs px-8 h-10 font-mono"
            asChild
          >
            <a href="mailto:contact@lugano.ai">Request Intro</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section - The Monolith */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 z-0">
          <img 
            src="/images/monolith-hero.jpg" 
            alt="The Monolith" 
            className="w-full h-full object-cover opacity-60 scale-105 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <span className="inline-block h-px w-12 bg-purple-500/50 mb-4"></span>
            <p className="text-xs font-mono text-purple-400/70 uppercase tracking-[0.3em]">
              <DecryptText text="The Privacy Infrastructure Layer" speed={30} delay={500} />
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight leading-[0.9] mb-12 mix-blend-difference animate-in fade-in zoom-in-95 duration-1000 delay-500">
            Your <Redactable>Secrets</Redactable> <br />
            <span className="italic text-white/90 relative">
              Are Your <Redactable>Edge.</Redactable>
            </span>
          </h1>
          
          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-10">
              Public AI levels the playing field. <Redactable>Private AI</Redactable> tilts it in your favor. 
              Enter the vault where intelligence meets silence.
            </p>
            
            <a 
              href="mailto:contact@lugano.ai" 
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-purple-500 hover:text-purple-400 transition-all duration-500 font-mono"
            >
              <span>Request Intro</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 - The Paradigm (Privacy Constellation) */}
      <section id="paradigm" className="relative min-h-screen flex items-center py-24 bg-black overflow-hidden">
        <div className="container relative z-10 grid md:grid-cols-2 gap-20 items-center">
          <div className="md:pr-12 order-2 md:order-1">
            <div className="mb-6 flex items-center gap-2">
               <div className="w-2 h-2 bg-purple-600 animate-pulse"></div>
               <span className="text-xs font-mono text-purple-500 uppercase tracking-widest">Classified Intel</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-none">
              The Paradox of <br />
              <span className="text-white/40 italic">Open Intelligence.</span>
            </h2>
            <div className="space-y-8 text-lg text-white/70 font-light leading-relaxed border-l border-purple-900/30 pl-8">
              <p>
                To win, you need the best models. To survive, you need to keep your <Redactable>data hidden</Redactable>. 
                Until now, you had to choose.
              </p>
              <p>
                Lugano breaks this binary. We are the invisible layer that allows you to deploy 
                state-of-the-art AI on your proprietary data without it ever leaving your perimeter. 
                It’s not just security; it’s <Redactable>sovereignty</Redactable>.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-2xl font-serif italic text-white">
                "The most valuable intelligence is the kind nobody else can see."
              </p>
            </div>
          </div>
          
          {/* Privacy Globe Visualization */}
          <div className="relative h-[600px] w-full order-1 md:order-2 flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]"></div>
             <PrivacyGlobe />
             
             {/* Floating Labels */}
             <div className="absolute top-1/4 right-10 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest">ZK-Proof Verified</span>
                </div>
             </div>
             <div className="absolute bottom-1/3 left-0 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full animate-bounce duration-[4000ms]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest">Encrypted Payload</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Architecture (Digital Silence) */}
      <section id="architecture" className="relative py-32 bg-zinc-950">
        <div className="container">
          <div className="mb-24 md:flex items-end justify-between border-b border-white/10 pb-12">
            <div>
              <span className="block text-xs font-mono text-purple-500 uppercase tracking-widest mb-4">System Architecture</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-none">
                The Architecture <br />
                <span className="text-white/40">of Silence.</span>
              </h2>
            </div>
            <p className="mt-8 md:mt-0 max-w-md text-white/60 text-sm leading-relaxed font-mono text-xs">
              // DECRYPTING PROTOCOLS...<br/>
              True privacy isn't a policy. It's physics. We use advanced cryptography and hardware isolation 
              to ensure your data remains mathematically invisible to the outside world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Compute Without Compromise",
                desc: "Our orchestration engine doesn't just protect; it accelerates. Slash GPU waste by 90% while running fully encrypted workloads.",
                meta: "Efficiency Arbitrage",
                id: "01"
              },
              {
                title: "The Black Box",
                desc: "Your data runs inside Trusted Execution Environments (TEEs). Even the cloud provider hosting the hardware cannot see what's inside.",
                meta: "Hardware-Level Isolation",
                id: "02"
              },
              {
                title: "Mathematical Certainty",
                desc: "We don't ask you to trust us. We use Zero-Knowledge Proofs so you can verify the integrity of every computation yourself.",
                meta: "Trustless Verification",
                id: "03"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-black p-12 hover:bg-zinc-900 transition-colors duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="font-mono text-[10px] text-white/20">SECURE_LAYER_{item.id}</span>
                </div>
                <div className="mb-12">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                    {item.meta}
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                  <Redactable>{item.desc}</Redactable>
                </p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="/images/digital-silence.jpg" 
            alt="Digital Silence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 container">
          <div className="mb-12">
            <LuganoLogo className="h-16 md:h-24 w-auto text-white mix-blend-difference" />
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <p className="text-xl text-white/60 font-light max-w-xl mx-auto">
              The future belongs to those who control their own intelligence.
            </p>
            <Button size="lg" className="rounded-full h-16 px-12 text-lg bg-white text-black hover:bg-white/90 uppercase tracking-widest transition-all hover:scale-105 font-mono" asChild>
              <a href="mailto:contact@lugano.ai">Request Intro</a>
            </Button>
          </div>

          <div className="mt-32 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-widest border-t border-white/10 pt-8 font-mono">
            <p>© 2026 Lugano.ai // ALL RIGHTS RESERVED</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
