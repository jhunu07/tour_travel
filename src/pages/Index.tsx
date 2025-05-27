
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Star, Search, Menu, User, LogIn, UserPlus, Phone, Mail, Clock } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              StayBooker
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/location" className="text-gray-600 hover:text-blue-600 transition-colors">
                Locations
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-2">
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="/location" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Locations
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
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
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Book amazing hotels worldwide with the best prices guaranteed
          </p>
          
          {/* Search Form */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="Where are you going?" 
                      className="pl-10"
                      onClick={() => window.location.href = '/location'}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      type="date" 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      type="date" 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="2 guests" 
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <Button className="w-full md:w-auto mt-6" size="lg">
                <Search className="h-4 w-4 mr-2" />
                Search Hotels
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Hotels */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Hotels
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Grand Plaza Hotel",
                location: "New York, USA",
                price: "$299",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
              },
              {
                name: "Ocean View Resort",
                location: "Maldives",
                price: "$599",
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
              },
              {
                name: "Mountain Lodge",
                location: "Swiss Alps",
                price: "$399",
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop"
              }
            ].map((hotel, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{hotel.name}</CardTitle>
                  <p className="text-gray-600 flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
                      <span className="text-gray-500"> /night</span>
                    </div>
                    <Button>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose StayBooker?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                We guarantee the lowest prices for your hotel bookings
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is available around the clock
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Access to thousands of hotels in hundreds of destinations
              </p>
            </div>
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
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Hotel Bookings</li>
                <li className="hover:text-white transition-colors cursor-pointer">Flight Reservations</li>
                <li className="hover:text-white transition-colors cursor-pointer">Car Rentals</li>
                <li className="hover:text-white transition-colors cursor-pointer">Travel Insurance</li>
                <li className="hover:text-white transition-colors cursor-pointer">Tour Packages</li>
                <li className="hover:text-white transition-colors cursor-pointer">24/7 Support</li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
                <li className="hover:text-white transition-colors cursor-pointer">Mission & Vision</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Press & Media</li>
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
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>support@staybooker.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                  <span>123 Travel Street<br />New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 StayBooker. All rights reserved.
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
    </div>
  );
};

export default Index;
