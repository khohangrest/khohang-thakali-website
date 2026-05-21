import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, ChefHat, Music, Leaf } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "@/lib/imageConfig";

/**
 * Khohang - Taste of Thakali Website
 * Design Philosophy: Himalayan Heritage Warmth
 * - Warm minimalism with authentic Thakali cultural elements
 * - Earthy color palette (cream, gold, rust, charcoal)
 * - Asymmetric layouts with generous whitespace
 * - Hand-crafted details and organic animations
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("dining");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center shadow-md">
              <span className="text-xl md:text-2xl font-playfair font-bold text-accent-foreground">K</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-playfair font-bold text-foreground">KHOHANG</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Taste of Thakali</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-lato font-medium hover:text-accent transition-colors">About</a>
            <a href="#dining" className="text-sm font-lato font-medium hover:text-accent transition-colors">Dining</a>
            <a href="#menu" className="text-sm font-lato font-medium hover:text-accent transition-colors">Menu</a>
            <a href="#performances" className="text-sm font-lato font-medium hover:text-accent transition-colors">Culture</a>
            <a href="#contact" className="text-sm font-lato font-medium hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-start container">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-accent font-poppins font-semibold text-sm md:text-base mb-4">Welcome to Our Courtyard</p>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
              Khohang
            </h1>
            <p className="text-lg md:text-2xl text-secondary font-playfair font-semibold mb-4">
              Taste of Thakali
            </p>
            <p className="text-base md:text-lg text-foreground mb-8 max-w-xl leading-relaxed">
              Discover authentic Thakali and Nepali cuisine in a warm, welcoming space. Experience the heart of Himalayan hospitality with live cultural performances and serene garden dining.
            </p>
            <button className="btn-warm">
              Reserve Your Table
            </button>
          </div>
        </div>
      </section>

      {/* About Khohang Concept */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src={IMAGES.aboutCourtyard}
                alt="Khohang courtyard entrance"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
                The Heart of Our Home
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                <span className="font-playfair font-bold text-accent">Khohang</span>, meaning "courtyard" in Thakali language, refers to an enclosed open space found in traditional Mustang homes. It's a place for recreation, social gatherings, and shelter from harsh mountain winds.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                At our restaurant, we embrace the spirit of the khohang—offering a warm space to enjoy Nepal's rich culinary heritage. Gather with us, share our culinary traditions, and feel at home.
              </p>
              <div className="flex gap-4">
                <button className="btn-warm">Learn More</button>
                <button className="btn-warm-outline">Our Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Spaces */}
      <section id="dining" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-4">
              Our Dining Spaces
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each space is thoughtfully designed to blend traditional Thakali elements with modern comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Lubra */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-muted flex items-center justify-center">
                <Leaf className="w-16 h-16 text-accent opacity-30" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Lubra</h3>
                <p className="text-muted-foreground mb-4">
                  Indoor seating space honoring Mustang's unique Bon Buddhist heritage
                </p>
                <p className="text-accent font-poppins font-semibold">Capacity: 30 guests</p>
              </div>
            </div>

            {/* Khohang Courtyard */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-secondary opacity-30" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Khohang Courtyard</h3>
                <p className="text-muted-foreground mb-4">
                  Tranquil outdoor dining experience surrounded by greenery and mountain views
                </p>
                <p className="text-accent font-poppins font-semibold">Capacity: 30 guests</p>
              </div>
            </div>

            {/* Terrace */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-muted flex items-center justify-center">
                <Music className="w-16 h-16 text-accent opacity-30" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Terrace</h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for enjoying Kathmandu's changing seasons with panoramic views
                </p>
                <p className="text-accent font-poppins font-semibold">Capacity: 30 guests</p>
              </div>
            </div>

            {/* Naach Ghar */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <ChefHat className="w-16 h-16 text-secondary opacity-30" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Naach Ghar</h3>
                <p className="text-muted-foreground mb-4">
                  Immerse yourself in Nepali culture with lively live performances and vibrant energy
                </p>
                <p className="text-accent font-poppins font-semibold">Capacity: 30 guests</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center">
            <p className="text-lg text-foreground mb-4">
              <span className="font-playfair font-bold text-accent">Total Capacity: 120 guests</span>
            </p>
            <p className="text-muted-foreground">
              Each space is designed to provide an intimate yet immersive experience of Thakali hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
                Savor Nepali Palate
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Experience the essence of Nepal with our diverse menu, showcasing popular street foods to traditional dishes from indigenous communities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-playfair font-bold text-foreground mb-2">Thakali Khana</h3>
                  <p className="text-muted-foreground">
                    Our signature Thakali Thali—a star Nepali cuisine from Mustang featuring aromatic lentils, spiced vegetables, sautéed greens, and tender meat curry
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-playfair font-bold text-foreground mb-2">Aloo Tama</h3>
                  <p className="text-muted-foreground">
                    Tangy, savory curry of bamboo shoots and potatoes, crafted with authentic Thakali spices
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-playfair font-bold text-foreground mb-2">Dhido</h3>
                  <p className="text-muted-foreground">
                    Traditional buckwheat dish served with chicken, fish, or mutton—a hearty Himalayan staple
                  </p>
                </div>
              </div>
              <button className="btn-warm">View Full Menu</button>
            </div>
            <div>
              <img
                src={IMAGES.diningSpace1}
                alt="Thakali Thali - traditional food platter"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Performances */}
      <section id="performances" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-4">
              Rhythms of Nepal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Live cultural experiences that celebrate Nepal's vibrant heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={IMAGES.diningSpace2}
                alt="Traditional Nepali cultural dance performance"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-6">
                Daily Cultural Performances
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Enjoy daily cultural performances featuring traditional Nepali music, dance, and rituals. Our skilled performers in colorful costumes capture the spirit of our vibrant heritage, enriching your dining experience with an immersive celebration of Nepal's cultural diversity.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-6">
                <p className="font-poppins font-semibold text-accent mb-2">Performance Times</p>
                <p className="text-lg text-foreground font-playfair">6:30 PM – 8:30 PM</p>
                <p className="text-sm text-muted-foreground mt-2">Daily performances in the Naach Ghar</p>
              </div>
              <button className="btn-warm">Reserve for Performance</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Music className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-playfair font-bold text-foreground mb-2">Traditional Music</h4>
              <p className="text-muted-foreground">
                Authentic Nepali instruments and melodies that echo through the mountains
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair font-bold text-foreground mb-2">Cultural Dance</h4>
              <p className="text-muted-foreground">
                Vibrant performances showcasing the diversity of Nepal's ethnic communities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <ChefHat className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-playfair font-bold text-foreground mb-2">Rituals & Traditions</h4>
              <p className="text-muted-foreground">
                Sacred ceremonies and customs that connect us to our heritage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card rounded-lg shadow-md p-8 md:p-12">
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">Hours of Operation</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins font-semibold text-foreground">Every Day</p>
                    <p className="text-lg text-secondary">10:00 AM – 10:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">*Final orders by 9:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Music className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins font-semibold text-foreground">Cultural Performances</p>
                    <p className="text-lg text-secondary">6:30 PM – 8:30 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">Daily in the Naach Ghar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-md p-8 md:p-12">
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins font-semibold text-foreground">Location</p>
                    <a href="https://maps.app.goo.gl/VKRuJysd3243hfyN8" target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:text-secondary transition-colors font-medium">
                      Amrit Marg, Thamel
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins font-semibold text-foreground">Phone</p>
                    <p className="text-lg text-secondary">+977 9818607574</p>
                    <p className="text-sm text-muted-foreground mt-1">For reservations & inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins font-semibold text-foreground">Email</p>
                    <p className="text-lg text-foreground">khohangrest@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent to-secondary rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Ready to Experience Khohang?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Reserve your table now and immerse yourself in authentic Thakali cuisine, warm hospitality, and vibrant cultural performances
            </p>
            <button className="bg-white text-accent px-8 py-3 rounded-md font-poppins font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Reserve Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-playfair font-bold text-lg mb-4">Khohang</h4>
              <p className="text-sm opacity-80">
                Taste of Thakali. Authentic cuisine, warm hospitality, and vibrant culture in the heart of Thamel.
              </p>
            </div>
            <div>
              <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#dining" className="hover:text-accent transition-colors">Dining Spaces</a></li>
                <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
                <li><a href="#performances" className="hover:text-accent transition-colors">Performances</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Daily: 10:00 AM – 10:00 PM</li>
                <li>Performances: 6:30 PM – 8:30 PM</li>
                <li>Final Orders: 9:30 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+977 9818607574</li>
                <li>khohangrest@gmail.com</li>
                <li>Amrit Marg, Thamel</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2026 Khohang - Taste of Thakali. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
