
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Globe, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "Excellence",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
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
              <a href="/about" className="text-blue-600 font-medium">About</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About StayBooker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making travel accessible and unforgettable for everyone since 2018.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              StayBooker was founded to make hotel booking simple and transparent. 
              We partner with hotels worldwide to ensure every traveler finds their perfect stay.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5M+</div>
                <div className="text-gray-600">Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500K+</div>
                <div className="text-gray-600">Hotels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop" 
              alt="Our journey" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-xl group">
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of travelers who trust StayBooker
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/'}
          >
            Start Booking Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
