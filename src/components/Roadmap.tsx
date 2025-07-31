import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CheckCircle, Circle, Clock } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Wilson MVP",
      timeline: "0-6 months",
      status: "active",
      description: "Deploy core platform at Wilson Airport with ground extraction services",
      milestones: [
        "Identity module deployment",
        "Basic dispatch engine",
        "Local partner fleet integration",
        "Emergency button functionality"
      ],
      location: "Nairobi, Kenya"
    },
    {
      phase: "Phase 2", 
      title: "Private Air Integration",
      timeline: "6-12 months",
      status: "planned",
      description: "Expand to private aviation with FBO integration and regional flight support",
      milestones: [
        "FBO/private terminal integration",
        "Aircraft dispatch capabilities",
        "Regional flight coordination",
        "Partner API development"
      ],
      location: "East Africa Region"
    },
    {
      phase: "Phase 3",
      title: "Cross-Border SaaS",
      timeline: "12-18 months", 
      status: "planned",
      description: "Multi-country deployment with full customs and immigration integration",
      milestones: [
        "Customs/Immigration APIs",
        "5 global hub deployment",
        "DAO-based governance",
        "Multi-tenant scaling"
      ],
      location: "5 Global Hubs"
    },
    {
      phase: "Phase 4",
      title: "Global Network",
      timeline: "18-36 months",
      status: "future",
      description: "Worldwide expansion with autonomous mobility and white-label offerings",
      milestones: [
        "50+ city coverage",
        "Autonomous air mobility",
        "White-label SaaS platform",
        "Advanced AI routing"
      ],
      location: "Global"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="h-5 w-5 text-success" />;
      case "planned": return <Clock className="h-5 w-5 text-accent" />;
      case "future": return <Circle className="h-5 w-5 text-muted-foreground" />;
      default: return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "planned": return "bg-accent text-accent-foreground";
      case "future": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Expansion Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our phased approach to building the world's most comprehensive mobility platform
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(phase.status)}
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                          <p className="text-sm text-accent font-medium">{phase.phase}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(phase.status)}>
                        {phase.timeline}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {phase.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {phase.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{milestone}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-accent">
                      <MapPin className="h-4 w-4" />
                      <span>{phase.location}</span>
                    </div>
                  </Card>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-2/12 my-4">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                </div>
                
                {/* Timeline Info */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'} mt-4 lg:mt-0`}>
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {phase.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Network?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're a fleet operator, government agency, or enterprise client, 
              become part of the AEGIS ecosystem and shape the future of global mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-accent text-accent-foreground font-medium px-4 py-2">
                Phase 1 Partners Now Enrolling
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;