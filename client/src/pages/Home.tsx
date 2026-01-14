import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lock, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Lugano.ai | The Private AI Infrastructure Layer</title>
        <meta name="description" content="Lugano.ai is the privacy infrastructure layer for enterprise AI. Run powerful models on your most sensitive data with zero leaks and zero trade-offs." />
      </Helmet>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight">LUGANO.AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#vision" className="hover:text-primary transition-colors">The Paradigm</a>
            <a href="#technology" className="hover:text-primary transition-colors">The Architecture</a>
          </div>
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300"
            asChild
          >
            <a href="mailto:contact@lugano.ai">Request Intro</a>
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
            Your Secrets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Are Your Edge.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            Public AI levels the playing field. Private AI tilts it in your favor. We build the vault where your most sensitive data meets the world's most powerful intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-[0_0_20px_-5px_var(--color-primary)] transition-all hover:scale-105" asChild>
              <a href="mailto:contact@lugano.ai">Request Intro</a>
            </Button>
          </div>
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
                The Paradox of <br />
                <span className="text-primary">Open Intelligence.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To win, you need the best models. To survive, you need to keep your data hidden. Until now, you had to choose.
                <br /><br />
                Lugano breaks this binary. We are the invisible layer that allows you to deploy state-of-the-art AI on your proprietary data without it ever leaving your perimeter. It’s not just security; it’s sovereignty.
              </p>
              
              <div className="border-t border-white/10 pt-8">
                 <p className="text-xl font-serif italic text-white/80">
                  "The most valuable intelligence is the kind nobody else can see."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Technology Section */}
      <section id="technology" className="py-32 bg-white/[0.02] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Architecture of Silence</h2>
            <p className="text-lg text-muted-foreground">
              True privacy isn't a policy. It's physics. We use advanced cryptography and hardware isolation to ensure your data remains mathematically invisible to the outside world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Compute Without Compromise",
                desc: "Our orchestration engine doesn't just protect; it accelerates. Slash GPU waste by 90% while running fully encrypted workloads.",
                stat: "Efficiency Arbitrage"
              },
              {
                icon: Lock,
                title: "The Black Box",
                desc: "Your data runs inside Trusted Execution Environments (TEEs). Even the cloud provider hosting the hardware cannot see what's inside.",
                stat: "Hardware-Level Isolation"
              },
              {
                icon: Shield,
                title: "Mathematical Certainty",
                desc: "We don't ask you to trust us. We use Zero-Knowledge Proofs so you can verify the integrity of every computation yourself.",
                stat: "Trustless Verification"
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
            Own the Infrastructure.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The future belongs to those who control their own intelligence. <br />
            Step into the vault.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 font-medium shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105" asChild>
              <a href="mailto:contact@lugano.ai">Request Intro</a>
            </Button>
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
