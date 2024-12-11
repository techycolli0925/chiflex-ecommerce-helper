import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;