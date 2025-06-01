
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HeadphonesIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      content: "+91 9587451263",
      description: "Available 24/7 for urgent matters",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      content: "support@book.com",
      description: "We respond within 2 hours",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      content: "Available on website",
      description: "Instant support during business hours",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "RAJKOT , GUJARAT",
      description: "Visit us during business hours",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const faqs = [
    {
      question: "How can I cancel my booking?",
      answer: "You can cancel your booking through your account dashboard or by contacting our support team. Cancellation policies vary by hotel."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. All fees and taxes are clearly displayed before you complete your booking."
    },
    {
      question: "How do I modify my reservation?",
      answer: "Most reservations can be modified through your account. For complex changes, our support team is here to help."
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
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="/contact" className="text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions, concerns, or feedback. 
            Our dedicated support team is available 24/7 to assist you.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-xl group">
              <div className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <info.icon className={`h-8 w-8 ${info.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-blue-600 font-medium mb-2">{info.content}</p>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </Card>
          ))}
        </div>

        {/* Contact Form and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Send className="h-6 w-6 text-blue-600" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop" 
                alt="Customer support" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">We're here when you need us</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between font-medium text-blue-600">
                    <span>Emergency Support:</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find quick answers to common questions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="text-left border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <HeadphonesIcon className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is standing by to assist you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
