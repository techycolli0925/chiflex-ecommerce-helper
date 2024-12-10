import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Join Our Newsletter
        </h2>
        <p className="mb-8 max-w-md mx-auto">
          Subscribe to get special offers, free giveaways, and updates on new arrivals.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button variant="secondary" className="gap-2">
            Subscribe <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;