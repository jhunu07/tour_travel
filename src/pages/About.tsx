import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Shield, Globe, Award, Users, Star, MapPin, Clock } from "lucide-react";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Customer First",
    bgColor: "bg-red-100",
    iconColor: "text-red-600"
  }, {
    icon: Shield,
    title: "Trust & Security",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  }, {
    icon: Globe,
    title: "Global Reach",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  }, {
    icon: Award,
    title: "Excellence",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }];
  const highlights = [{
    icon: Users,
    title: "5M+ Happy Travelers",
    description: "Millions of satisfied customers worldwide trust us for their travel needs",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
  }, {
    icon: MapPin,
    title: "200+ Countries",
    description: "Extensive global network covering every corner of the world",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e45d?w=600&h=400&fit=crop"
  }, {
    icon: Star,
    title: "Award Winning Service",
    description: "Recognized globally for outstanding customer service and innovation",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&h=400&fit=crop"
  }, {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever and wherever you need us",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing travel experiences with cutting-edge technology and unparalleled customer service since 2018.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl w-full">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
          Born from a vision to democratize travel, StayBooker emerged as a game-changer in the hospitality industry. 
          We leverage advanced AI and machine learning to connect travelers with their perfect accommodations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
          Our proprietary matching algorithm considers over 200 factors to ensure every booking exceeds expectations, 
          while our blockchain-powered security ensures transparent, fraud-free transactions.
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
              
            </div>
          </div>
        </div>

        {/* Highlights Carousel */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What Makes Us Special</h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {highlights.map((highlight, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-2xl group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img src={highlight.image} alt={highlight.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 mb-2">
                          <highlight.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{highlight.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-xl group">
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </Card>)}
          </div>
        </div>

        {/* Innovation Section */}
        

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future of Travel?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of travelers who trust StayBooker for their perfect getaway
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105" onClick={() => window.location.href = '/'}>
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </div>;
};
export default About;
