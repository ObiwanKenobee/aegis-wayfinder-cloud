import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Brain, 
  Users, 
  FileCheck, 
  Eye, 
  Smartphone,
  ArrowRight,
  Database,
  Zap,
  Lock
} from "lucide-react";

const PlatformOverview = () => {
  const modules = [
    {
      title: "Sovereign Passport",
      subtitle: "Identity & Access",
      description: "Multi-tenant Identity-as-a-Service with blockchain DIDs, biometric verification, and smart contract access rules.",
      icon: Shield,
      features: ["Biometric Integration", "Custom Access Corridors", "Blockchain Identity"],
      color: "bg-accent"
    },
    {
      title: "AI Dispatch Engine",
      subtitle: "Intelligent Routing",
      description: "Cloud-native microservice for predictive routing, asset allocation, and real-time multi-modal coordination.",
      icon: Brain,
      features: ["Event-driven Triggers", "Kubernetes Scaling", "Multi-modal Integration"],
      color: "bg-primary"
    },
    {
      title: "Fleet Management",
      subtitle: "Partner Network",
      description: "Partner-facing SaaS dashboard for fleet registration, IoT telemetry, and smart contract payments.",
      icon: Users,
      features: ["Asset Tracking", "Compliance Monitoring", "Payment Automation"],
      color: "bg-secondary"
    },
    {
      title: "Travel Clearance",
      subtitle: "Global Compliance",
      description: "Integration layer for customs, immigration, and health APIs with automated document verification.",
      icon: FileCheck,
      features: ["Customs APIs", "Document Verification", "Digital Clearance"],
      color: "bg-success"
    },
    {
      title: "Guardian IO",
      subtitle: "Safety Layer",
      description: "Real-time analytics for threat detection, rerouting recommendations, and encrypted communications.",
      icon: Eye,
      features: ["Threat Detection", "Secure Communications", "Risk Analytics"],
      color: "bg-warning"
    },
    {
      title: "UX Layer",
      subtitle: "Multi-Platform",
      description: "User-facing interfaces across mobile, wearable, and web platforms with partner API integrations.",
      icon: Smartphone,
      features: ["Mobile Apps", "Wearable Triggers", "Partner APIs"],
      color: "bg-muted"
    }
  ];

  return (
    <section id="platform" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Platform Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six core modules working in harmony to provide seamless global mobility services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${module.color}`}>
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {module.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {module.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {module.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {module.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-accent/10">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
        
        {/* Architecture Stats */}
        <div className="bg-card rounded-2xl p-8 shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Database className="h-8 w-8 text-accent mx-auto" />
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="space-y-2">
              <Zap className="h-8 w-8 text-accent mx-auto" />
              <div className="text-3xl font-bold text-foreground">&lt;60s</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="space-y-2">
              <Lock className="h-8 w-8 text-accent mx-auto" />
              <div className="text-3xl font-bold text-foreground">256-bit</div>
              <div className="text-sm text-muted-foreground">Encryption</div>
            </div>
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-accent mx-auto" />
              <div className="text-3xl font-bold text-foreground">SOC 2</div>
              <div className="text-sm text-muted-foreground">Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;