import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Chiflex
            </h3>
            <p className="mb-4">Your one-stop shop for quality products.</p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-primary" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>1234 Street Name</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@chiflex.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 Chiflex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;