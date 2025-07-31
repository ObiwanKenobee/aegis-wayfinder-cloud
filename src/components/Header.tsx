import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, loading } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">AEGIS</span>
            <span className="text-sm text-muted-foreground">Mobility Layer</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-foreground hover:text-accent transition-colors">Platform</a>
            <a href="#solutions" className="text-foreground hover:text-accent transition-colors">Solutions</a>
            <a href="#security" className="text-foreground hover:text-accent transition-colors">Security</a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {!loading && (
              <>
                {user ? (
                  <Link to="/dashboard">
                    <Button variant="hero" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button variant="ghost" size="sm" className="hidden md:flex">
                        Login
                      </Button>
                    </Link>
                    <Link to="/auth">
                      <Button variant="hero" size="sm">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;