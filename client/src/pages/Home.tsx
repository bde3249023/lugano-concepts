import { Button } from "@/components/ui/button";
import LuganoLogo from "@/components/LuganoLogo";
import { ArrowRight, ShieldCheck, Lock, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground selection:bg-white/20 selection:text-white overflow-x-hidden font-sans">
      {/* Navigation - Vault Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LuganoLogo className="h-8 w-auto text-white" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-silver font-medium">
            <a href="#paradigm" className="hover:text-white transition-colors duration-300">The Paradigm</a>
            <a href="#architecture" className="hover:text-white transition-colors duration-300">Architecture</a>
            <a href="#sovereignty" className="hover:text-white transition-colors duration-300">Sovereignty</a>
          </div>
          <Button 
            variant="outline" 
            className="rounded-none border-white/20 bg-transparent text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 px-6"
            onClick={() => window.location.href = 'mailto:contact@lugano.ai'}
          >
            Request Intro
          </Button>
        </div>
      </nav>

      {/* Hero Section - Refracted Light */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/refracted-light-hero.jpg" 
            alt="Refracted Light" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] tracking-[0.3em] uppercase text-silver">
            Institutional Grade Privacy
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-8 max-w-5xl mx-auto">
            Digital Sovereignty <br/>
            <span className="text-silver italic">Is The Ultimate Asset.</span>
          </h1>
          <p className="text-lg md:text-xl text-silver max-w-2xl mx-auto leading-relaxed font-light mb-12">
            We build the infrastructure that allows capital and intelligence to move in silence. 
            The first zero-knowledge layer designed for the world's most valuable data.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              className="h-14 px-8 rounded-none bg-white text-black hover:bg-silver text-xs tracking-widest uppercase transition-all duration-300 w-full md:w-auto"
              onClick={() => window.location.href = 'mailto:contact@lugano.ai'}
            >
              Enter The Vault
            </Button>
          </div>
        </div>
      </section>

      {/* The Paradigm - Digital Vault */}
      <section id="paradigm" className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative group">
                <img 
                  src="/images/digital-vault.jpg" 
                  alt="Digital Vault" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r border-b border-white/20 hidden md:block" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-xs tracking-[0.3em] uppercase text-silver mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/20"></span>
                The Paradigm Shift
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                Privacy is not secrecy.<br/>
                It is control.
              </h3>
              <p className="text-silver text-lg leading-relaxed mb-8 font-light">
                In an era of radical transparency, the only true competitive advantage is what remains unseen. 
                Lugano provides the mathematical guarantee that your proprietary models and strategies remain exclusively yours, 
                even while interacting with the public web.
              </p>
              <ul className="space-y-4 border-l border-white/10 pl-8">
                <li className="text-sm text-silver tracking-wide uppercase flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  Zero-Knowledge Proofs
                </li>
                <li className="text-sm text-silver tracking-wide uppercase flex items-center gap-3">
                  <Lock className="w-4 h-4 text-white" />
                  Institutional Compliance
                </li>
                <li className="text-sm text-silver tracking-wide uppercase flex items-center gap-3">
                  <Globe className="w-4 h-4 text-white" />
                  Sovereign Infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture - Platinum Network */}
      <section id="architecture" className="py-32 bg-[#080808] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-xs tracking-[0.3em] uppercase text-silver mb-6">The Architecture</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-white mb-8">
              A Network of Silence.
            </h3>
            <p className="text-silver text-lg font-light max-w-2xl mx-auto">
              Built on the principles of Swiss banking and applied to distributed computation. 
              Absolute discretion, mathematically enforced.
            </p>
          </div>

          <div className="relative w-full aspect-[21/9] border border-white/10 overflow-hidden mb-24">
             <img 
              src="/images/platinum-network.jpg" 
              alt="Platinum Network" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "The Black Box",
                desc: "Your data never leaves your perimeter. Only the proof of computation travels."
              },
              {
                title: "Infinite Scale",
                desc: "Leverage global compute liquidity without exposing a single byte of IP."
              },
              {
                title: "Regulatory Armor",
                desc: "Compliance is baked into the protocol. Auditability without visibility."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#080808] p-12 hover:bg-[#0a0a0a] transition-colors duration-300 group">
                <h4 className="font-serif text-2xl text-white mb-4 group-hover:text-silver transition-colors">{item.title}</h4>
                <p className="text-silver font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - The Invitation */}
      <footer className="py-32 border-t border-white/5 bg-obsidian relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-12">
            Secure Your Legacy.
          </h2>
          <Button 
            className="h-16 px-12 rounded-none bg-white text-black hover:bg-silver text-sm tracking-[0.2em] uppercase transition-all duration-300"
            onClick={() => window.location.href = 'mailto:contact@lugano.ai'}
          >
            Request Private Intro
          </Button>
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-white/20 border-t border-white/5 pt-8">
            <span>Lugano.ai © 2026</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span>Zurich</span>
              <span>London</span>
              <span>New York</span>
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
