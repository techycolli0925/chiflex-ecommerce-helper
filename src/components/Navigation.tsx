import { useState, useEffect } from "react";
import { User, ShoppingCart, Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      const scrollPosition = window.scrollY;
      
      setScrolled(scrollPosition > 0);
      setSearchVisible(scrollPosition > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-sm bg-background/80" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-heading font-bold text-primary">
              Chiflex
            </a>
            <div className="flex items-center gap-6">
              <button className="hover:text-primary transition-colors">
                <User className="w-6 h-6" />
              </button>
              <button className="hover:text-primary transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
              <button className="hover:text-primary transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-xl font-heading font-bold text-primary">
                Chiflex
              </a>
              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button className="hover:text-primary transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="hover:text-primary transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Search Bar (appears on scroll) */}
      <div className={cn(
        "hidden md:block fixed top-16 left-0 right-0 z-40 transition-all duration-300 transform",
        searchVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 backdrop-blur-sm bg-background/80">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;