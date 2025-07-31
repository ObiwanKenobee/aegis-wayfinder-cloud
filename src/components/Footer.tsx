import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">AEGIS</span>
              <span className="text-accent">Mobility Layer</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              The world's first cloud-based SaaS platform for emergency extraction 
              and VIP mobility services. Secure, instant, global.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Wilson Airport, Nairobi | Global HQ</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+254 Emergency Hotline</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>ops@aegis-mobility.com</span>
              </div>
            </div>
          </div>
          
          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Sovereign Passport</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Dispatch</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fleet Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Travel Clearance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Guardian IO</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/60">
            © 2024 AEGIS Mobility Layer. All rights reserved. | SOC 2 Compliant
          </div>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;