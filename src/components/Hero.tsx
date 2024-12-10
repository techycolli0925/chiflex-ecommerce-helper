import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Discover Unique Style at{" "}
              <span className="text-primary">Chiflex</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Shop the latest trends in fashion, electronics, and lifestyle products. Quality meets affordability at Chiflex.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Shop Now <ShoppingBag className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Collections <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 relative animate-fade-up">
            <div className="relative w-full aspect-square rounded-full bg-primary/10 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Featured Products"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;