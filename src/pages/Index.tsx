import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Star, Search, Menu, User, LogIn, UserPlus, Phone, Mail, Clock, ArrowRight, Plane, Building, Camera } from "lucide-react";
import BookingSection from "@/components/BookingSection";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const popularDestinations = [{
    id: 1,
    name: "Kerala, India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotels: "60 hotels",
    price: "From ₹4,000/night",
    rating: 4.8
  }, {
    id: 2,
    name: "Udaipur, India",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotels: "30 hotels",
    price: "From ₹3,900/night",
    rating: 4.9
  }, {
    id: 3,
    name: "kashmir, India",
    image: "https://images.unsplash.com/photo-1627894485200-b92fb4353967?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hotels: "25 hotels",
    price: "From ₹4,500/night",
    rating: 4.7
  }, {
    id: 4,
    name: "Shimla, INDIA",
    image: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpbWxhfGVufDB8fDB8fHww",
    hotels: "35 hotels",
    price: "From ₹5,400/night",
    rating: 4.8
  }, {
    id: 5,
    name: "Leh, India",
    image: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVofGVufDB8fDB8fHww",
    hotels: "10 hotels",
    price: "From ₹5,000/night",
    rating: 4.9
  }, {
    id: 6,
    name: "Meghalaya, India",
    image: "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVnaGFsYXlhfGVufDB8fDB8fHww",
    hotels: "30 hotels",
    price: "From ₹6,200/night",
    rating: 4.6
  }, {
    id: 7,
    name: "Jaipur, India",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
    hotels: "20 hotels",
    price: "From ₹4,800/night",
    rating: 4.8
  }, {
    id: 8,
    name: "Goa, India",
    image: "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1506748686214-e9df14d4d9f2?w=500&h=300&fit=crop",
    hotels: "60 hotels",
    price: "From ₹3,500/night",
    rating: 4.9
  }, {
    id: 9,
    name: "Delhi, India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    hotels: "80 hotels",
    price: "From ₹5,000/night",
    rating: 4.7
  }
  ];

  const features = [{
    icon: Star,
    title: "Best Prices",
    description: "We guarantee the lowest prices for your hotel bookings",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  }, {
    icon: Users,
    title: "24/7 Support",
    description: "Our customer support team is available around the clock",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  }, {
    icon: MapPin,
    title: "Global Reach",
    description: "Access to thousands of hotels in hundreds of destinations",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }, {
    icon: Building,
    title: "Verified Hotels",
    description: "All our partner hotels are verified and quality-checked",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }, {
    icon: Plane,
    title: "Easy Booking",
    description: "Book your perfect stay in just a few clicks",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  }, {
    icon: Camera,
    title: "Real Photos",
    description: "Authentic photos from real guests and hotel partners",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:scale-105">
              StayBooker
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/location" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Locations
              </a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Services
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Contact
              </a>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/login'} className="transition-all duration-300 hover:scale-105">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
               
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-all duration-300">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden py-4 border-t animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="/location" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Locations
                </a>
                <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </a>
                <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/login'}>
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" onClick={() => window.location.href = '/signup'}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 transition-all duration-500">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book amazing hotels worldwide with the best prices guaranteed. Discover your next adventure with us.
          </p>
          
          {/* Search Form */}
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Where are you going?" className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-500" onClick={() => window.location.href = '/location'} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input type="date" className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input type="date" className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="2 guests" className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
              
              <Button className="w-full md:w-auto mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg" size="lg">
                <Search className="h-4 w-4 mr-2" />
                Search Hotels
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the world's most amazing places and book your perfect stay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => <Card key={destination.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative overflow-hidden">
                  <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{destination.hotels}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-blue-600">{destination.price}</p>
                    <Button size="sm" variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Booking Section */}
        <BookingSection />

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose StayBooker?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We provide exceptional service and unbeatable value for your travel experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <div key={index} className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm transition-all duration-500 hover:bg-white/80 hover:-translate-y-2 hover:shadow-xl group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">StayBooker</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for hotel bookings worldwide. We provide the best deals and exceptional service for unforgettable stays.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">t</span>
                </div>
                
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Hotel Bookings</li>
                
                
                
                <li className="hover:text-white transition-colors cursor-pointer">Tour Packages</li>
                <li className="hover:text-white transition-colors cursor-pointer">24/7 Support</li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">Our Story</a></li>
            
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+91 9587451263 </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>support@book.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                  <span>RAJKOT GUJARAT  INDIA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="mt-4">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Book. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
