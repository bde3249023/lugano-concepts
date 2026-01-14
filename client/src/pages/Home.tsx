import { Button } from "@/components/ui/button";
import LuganoLogo from "@/components/LuganoLogo";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LuganoLogo className="h-8 w-auto text-white" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-gray-400 font-medium">
            <a href="#vision" className="hover:text-white transition-colors duration-300">Vision</a>
            <a href="#technology" className="hover:text-white transition-colors duration-300">Technology</a>
            <a href="#paradigm" className="hover:text-white transition-colors duration-300">Paradigm</a>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full border-white/20 bg-white/5 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 px-6"
            onClick={() => window.location.href = 'mailto:contact@lugano.ai'}
          >
            Request Intro
          </Button>
        </div>
      </nav>

      {/* Hero Section - Monolith */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/monolith-hero.jpg" 
            alt="Monolith" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-[10px] tracking-[0.3em] uppercase text-purple-300">
            The Architecture of Silence
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white mb-8 max-w-5xl mx-auto mix-blend-difference">
            The Future <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-gray-400">Is Private.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            We build the infrastructure that allows you to run powerful AI on your most sensitive data. 
            No leaks. No trade-offs. Just pure intelligence.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              className="h-14 px-8 rounded-full bg-white text-black hover:bg-purple-100 text-xs tracking-widest uppercase transition-all duration-300 w-full md:w-auto"
              onClick={() => window.location.href = 'mailto:contact@lugano.ai'}
            >
              Request Intro
            </Button>
          </div>
        </div>
      </section>

      {/* The Paradigm - Impossible Architecture */}
      <section id="paradigm" className="py-32 relative border-t border-white/5 overflow-hidden">
        {/* Background Image for Paradigm Section */}
        <div className="absolute inset-0 z-0">
           <img 
            src="/images/impossible-architecture.jpg" 
            alt="Impossible Architecture" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="w-px h-24 bg-gradient-to-b from-purple-500 to-transparent mb-8 ml-1"></div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-purple-400 mb-6">The Paradigm Shift</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-none">
              Privacy is not secrecy.<br/>
              It is control.
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light max-w-2xl">
              In an era of radical transparency, the only true competitive advantage is what remains unseen. 
              Lugano provides the mathematical guarantee that your proprietary models and strategies remain exclusively yours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
              <div>
                <h4 className="text-white text-lg font-serif mb-2">Zero-Knowledge</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Cryptographic proofs that verify truth without revealing data.</p>
              </div>
              <div>
                <h4 className="text-white text-lg font-serif mb-2">Sovereign Compute</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Infrastructure that respects the boundaries of your digital state.</p>
              </div>
              <div>
                <h4 className="text-white text-lg font-serif mb-2">Infinite Scale</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Leverage global intelligence without exposing local secrets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology - Digital Silence */}
      <section id="technology" className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-xs tracking-[0.3em] uppercase text-purple-400 mb-6">The Technology</h2>
              <h3 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                A Network of <br/>
                <span className="italic text-gray-500">Digital Silence.</span>
              </h3>
            </div>
            <div className="max-w-sm text-right md:text-left">
              <p className="text-gray-400 text-sm leading-relaxed">
                Built on the principles of Swiss banking and applied to distributed computation. 
                Absolute discretion, mathematically enforced.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-16 hover:bg-white/5 transition-colors duration-500 group border-b md:border-b-0 md:border-r border-white/10">
              <div className="text-purple-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
              <h4 className="font-serif text-3xl text-white mb-4">The Black Box</h4>
              <p className="text-gray-500 font-light leading-relaxed">
                Your data never leaves your perimeter. Only the proof of computation travels. 
                The network verifies the result, not the process.
              </p>
            </div>
            <div className="bg-black p-16 hover:bg-white/5 transition-colors duration-500 group">
              <div className="text-purple-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
              <h4 className="font-serif text-3xl text-white mb-4">Regulatory Armor</h4>
              <p className="text-gray-500 font-light leading-relaxed">
                Compliance is baked into the protocol. Auditability without visibility. 
                Prove you followed the rules without showing your hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 border-t border-white/5 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-5xl md:text-8xl text-white mb-12 tracking-tighter mix-blend-difference">
            Secure Your Legacy.
          </h2>
          <Button 
            className="h-16 px-12 rounded-full bg-white text-black hover:bg-purple-100 text-sm tracking-[0.2em] uppercase transition-all duration-300"
            onClick={() => window.location.href = 'mailto:contact@lugano.ai'}
          >
            Request Intro
          </Button>
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-gray-600 border-t border-white/5 pt-8">
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
