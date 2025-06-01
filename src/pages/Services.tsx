
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Plane, Car, MapPin, Shield, Clock, Star, Users, Globe, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hotel,
      title: "Hotel Bookings",
      description: "Book from thousands of verified hotels worldwide with best price guarantee",
      features: ["Free cancellation", "Instant confirmation", "24/7 support"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Plane,
      title: "Flight Reservations",
      description: "Find and book flights to destinations across the globe",
      features: ["Compare airlines", "Flexible dates", "Best deals"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Car,
      title: "Car Rentals",
      description: "Rent cars from trusted providers at competitive rates",
      features: ["Wide selection", "Easy pickup", "Insurance included"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Travel Packages",
      description: "Complete travel packages with hotels, flights, and activities",
      features: ["All-inclusive deals", "Custom itineraries", "Local guides"],
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your personal and payment information is always protected"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service whenever you need assistance"
    },
    {
      icon: Star,
      title: "Best Price Guarantee",
      description: "We guarantee the lowest prices or we'll match the difference"
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "Join over 5 million satisfied travelers worldwide"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access to accommodations in 200+ countries worldwide"
    },
    {
      icon: Headphones,
      title: "Expert Assistance",
      description: "Our travel experts are here to help plan your perfect trip"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:scale-105">
              <a href="/">StayBooker</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="/location" className="text-gray-600 hover:text-blue-600 transition-colors">Locations</a>
              <a href="/services" className="text-blue-600 font-medium">Services</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey seamless and memorable
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-2xl group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm transition-all duration-500 hover:bg-white/80 hover:-translate-y-2 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you create unforgettable travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105" onClick={() => window.location.href = '/'}>
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
