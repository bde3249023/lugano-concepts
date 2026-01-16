import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white overflow-x-hidden font-sans">
      <Helmet>
        <title>Lugano.ai | The Architecture of Silence</title>
        <meta name="description" content="Lugano.ai is the privacy infrastructure layer for enterprise AI. Run powerful models on your most sensitive data with zero leaks and zero trade-offs." />
      </Helmet>

      {/* Navigation - Minimal & Floating */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-4 bg-black/50 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
            LUGANO.AI
          </a>
          <div className="hidden md:flex items-center gap-12 text-xs font-medium tracking-[0.2em] uppercase text-white/60">
            <a href="#paradigm" className="hover:text-white transition-colors duration-300">The Paradigm</a>
            <a href="#architecture" className="hover:text-white transition-colors duration-300">The Architecture</a>
          </div>
          <Button 
            variant="outline" 
            className="rounded-none border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs px-6 h-10"
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
            className="w-full h-full object-cover opacity-80 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <span className="inline-block h-px w-12 bg-white/50 mb-4"></span>
            <p className="text-xs font-mono text-white/70 uppercase tracking-[0.3em]">The Privacy Infrastructure Layer</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight leading-[0.9] mb-12 mix-blend-difference animate-in fade-in zoom-in-95 duration-1000 delay-500">
            Your Secrets <br />
            <span className="italic text-white/90">Are Your Edge.</span>
          </h1>
          
          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-10">
              Public AI levels the playing field. Private AI tilts it in your favor. 
              Enter the vault where intelligence meets silence.
            </p>
            
            <a 
              href="mailto:contact@lugano.ai" 
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-all duration-500"
            >
              <span>Request Intro</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 - The Paradigm (Impossible Architecture) */}
      <section id="paradigm" className="relative min-h-screen flex items-center py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="/images/impossible-architecture.jpg" 
            alt="Impossible Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-20 items-center">
          <div className="md:pr-12">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-none">
              The Paradox of <br />
              <span className="text-white/40 italic">Open Intelligence.</span>
            </h2>
            <div className="space-y-8 text-lg text-white/70 font-light leading-relaxed">
              <p>
                To win, you need the best models. To survive, you need to keep your data hidden. 
                Until now, you had to choose.
              </p>
              <p>
                Lugano breaks this binary. We are the invisible layer that allows you to deploy 
                state-of-the-art AI on your proprietary data without it ever leaving your perimeter. 
                It’s not just security; it’s sovereignty.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-2xl font-serif italic text-white">
                "The most valuable intelligence is the kind nobody else can see."
              </p>
            </div>
          </div>
          
          {/* Abstract Visual Element */}
          <div className="hidden md:block relative h-[600px] w-full border-l border-white/10 pl-12">
             
             <div className="flex flex-col justify-between h-full py-12">
                {[
                  { label: "Zero-Knowledge Proofs", status: "Validated" },
                  { label: "Trusted Execution Envs", status: "Active" },
                  { label: "Differential Privacy", status: "Enforced" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <span className="block text-xs font-mono text-white/30 mb-2 uppercase tracking-widest">{item.status}</span>
                    <span className="text-3xl font-serif text-white/50 group-hover:text-white transition-colors duration-500">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Architecture (Digital Silence) */}
      <section id="architecture" className="relative py-32 bg-zinc-950">
        <div className="container">
          <div className="mb-24 md:flex items-end justify-between border-b border-white/10 pb-12">
            <h2 className="text-5xl md:text-7xl font-serif leading-none">
              The Architecture <br />
              <span className="text-white/40">of Silence.</span>
            </h2>
            <p className="mt-8 md:mt-0 max-w-md text-white/60 text-sm leading-relaxed">
              True privacy isn't a policy. It's physics. We use advanced cryptography and hardware isolation 
              to ensure your data remains mathematically invisible to the outside world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Compute Without Compromise",
                desc: "Our orchestration engine doesn't just protect; it accelerates. Slash GPU waste by 90% while running fully encrypted workloads.",
                meta: "Efficiency Arbitrage"
              },
              {
                title: "The Black Box",
                desc: "Your data runs inside Trusted Execution Environments (TEEs). Even the cloud provider hosting the hardware cannot see what's inside.",
                meta: "Hardware-Level Isolation"
              },
              {
                title: "Mathematical Certainty",
                desc: "We don't ask you to trust us. We use Zero-Knowledge Proofs so you can verify the integrity of every computation yourself.",
                meta: "Trustless Verification"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-black p-12 hover:bg-zinc-900 transition-colors duration-500">
                <div className="mb-12">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">{item.meta}</span>
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 opacity-30">
           <img 
            src="/images/digital-silence.jpg" 
            alt="Digital Silence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 container">
          <h2 className="text-6xl md:text-9xl font-serif font-bold mb-12 tracking-tighter text-white mix-blend-difference">
            LUGANO.AI
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <p className="text-xl text-white/60 font-light max-w-xl mx-auto">
              The future belongs to those who control their own intelligence.
            </p>
            <Button size="lg" className="rounded-none h-16 px-12 text-lg bg-white text-black hover:bg-white/90 uppercase tracking-widest transition-all hover:scale-105" asChild>
              <a href="mailto:contact@lugano.ai">Request Intro</a>
            </Button>
          </div>

          <div className="mt-32 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-widest border-t border-white/10 pt-8">
            <p>© 2026 Lugano.ai</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
