import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/aegis-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AEGIS Command Center" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Secure Global Mobility</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Way Out
            <span className="block text-accent">AEGIS Platform</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cloud-based SaaS mobility platform providing instant extraction services, 
            AI-powered dispatch, and global fleet coordination for VIPs and organizations worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Start Emergency Protocol
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Watch Platform Demo
            </Button>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="h-8 w-8 text-accent mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Instant Dispatch</h3>
              <p className="text-white/80 text-sm">AI-powered routing with sub-60 second response times</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Globe className="h-8 w-8 text-accent mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
              <p className="text-white/80 text-sm">50+ cities with multi-modal transport integration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-8 w-8 text-accent mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Zero-Trust Security</h3>
              <p className="text-white/80 text-sm">Blockchain identity and encrypted communications</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;