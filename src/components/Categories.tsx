import { Smartphone, Shirt, Home, Watch } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    color: "bg-blue-500",
  },
  {
    name: "Fashion",
    icon: Shirt,
    color: "bg-pink-500",
  },
  {
    name: "Home & Living",
    icon: Home,
    color: "bg-green-500",
  },
  {
    name: "Accessories",
    icon: Watch,
    color: "bg-purple-500",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer animate-fade-up"
            >
              <div className={`${category.color} rounded-2xl p-6 transition-transform group-hover:scale-105`}>
                <category.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-medium text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;