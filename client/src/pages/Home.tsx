import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
              <span className="font-serif text-2xl font-bold tracking-tighter relative z-10">L</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">LUGANO.AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#vision" className="hover:text-primary transition-colors">Vision</a>
            <a href="#technology" className="hover:text-primary transition-colors">Technology</a>
            <a href="#investors" className="hover:text-primary transition-colors">Investors</a>
          </div>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300">
            Request Access
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Abstract Data Flow" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">The Privacy Infrastructure Layer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The Future of AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Is Private.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            An inevitable shift is underway. We are building the infrastructure for a world where every company and individual owns their intelligence. Private. Provable. Cost-efficient.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary/50 focus-visible:border-primary transition-all"
            />
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-[0_0_20px_-5px_var(--color-primary)] transition-all hover:scale-105">
              Request Access
            </Button>
          </div>
          
          <p className="mt-6 text-xs text-muted-foreground/60 uppercase tracking-widest animate-in fade-in duration-1000 delay-1000">
            Limited Availability • Seed Stage • Fortune 1000 Priority
          </p>
        </div>
      </section>

      {/* The Hidden Layer Section */}
      <section id="vision" className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                <img 
                  src="/images/privacy-layer.jpg" 
                  alt="Privacy Layer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white/80">Zero-Knowledge Proofs</span>
                  </div>
                  <p className="text-xs text-white/50 font-mono">Status: Validated • Patent Pending</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                The Hidden Layer <br />
                <span className="text-primary">Revealed.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This isn't Lugano vs ChatGPT—it's Lugano AND ChatGPT. We are the privacy layer that makes internal enterprise AI possible. 
                <br /><br />
                The most valuable data is the most sensitive. We've built the infrastructure to run AI on that data, without ever exposing it to public clouds.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-4xl font-serif font-bold text-white mb-1">$150B</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Market Opportunity</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-white mb-1">16:1</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">LTV:CAC Ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Arbitrage Section */}
      <section id="technology" className="py-32 bg-white/[0.02] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Efficiency Arbitrage</h2>
            <p className="text-lg text-muted-foreground">
              90% of AI compute spend is wasted on inefficient GPU utilization. We turn that waste into a competitive edge, creating a massive arbitrage opportunity in the infrastructure market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "90% Cost Reduction",
                desc: "Proprietary GPU orchestration algorithms that slash compute costs for Fortune 1000 enterprises.",
                stat: "Immediate ROI"
              },
              {
                icon: Lock,
                title: "Encrypted Environments",
                desc: "Runs 100% in encrypted environments (TEEs) ensuring data never leaves your control.",
                stat: "SOC2 Type 2"
              },
              {
                icon: Shield,
                title: "Provable Privacy",
                desc: "First-mover in provable privacy compliance using advanced zero-knowledge proofs.",
                stat: "GDPR Compliant"
              }
            ].map((item, i) => (
              <Card key={i} className="glass-panel border-white/5 p-8 hover:border-primary/30 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">{item.stat}</span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gpu-optimization.jpg" 
            alt="GPU Optimization" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">
            Get the Alpha.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The window to define the privacy infrastructure layer is closing. <br />
            Join the $200M+ track record team building the inevitable future.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 font-medium shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
              Request Investor Deck
            </Button>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:contact@lugano.ai" className="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5">contact@lugano.ai</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50">
          <p>© 2026 Lugano.ai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
