import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "/placeholder.svg",
    badge: "New Arrival",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249.99,
    image: "/placeholder.svg",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Designer Backpack",
    price: 89.99,
    image: "/placeholder.svg",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Premium Headphones",
    price: 199.99,
    image: "/placeholder.svg",
    badge: "Featured",
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group animate-fade-up">
              <CardContent className="p-4">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2">{product.badge}</Badge>
                </div>
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <p className="text-primary font-bold">${product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2 rounded-md transition-colors">
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;