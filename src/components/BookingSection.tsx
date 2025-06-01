
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Star, CreditCard, User, Mail, Phone } from "lucide-react";

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  description: string;
}

const BookingSection = () => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [bookingStep, setBookingStep] = useState<'select' | 'details' | 'payment'>('select');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New Delhi, Indai",
      price: "₹5,999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      description: "Luxury hotel in the heart of Indai with stunning city views and world-class amenities."
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Goa, India",
      price: "₹5,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1638310081327-5b4b5da6d155?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Tropical paradise resort with overwater bungalows and pristine beaches."
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "leh, India",
      price: "₹3,299",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop",
      description: "Cozy alpine lodge with breathtaking mountain views and ski-in/ski-out access."
    }
  ];

  const handleBookNow = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setBookingStep('details');
  };

  const handleNextStep = () => {
    if (bookingStep === 'details') {
      setBookingStep('payment');
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the booking
    alert('Booking submitted successfully!');
    setBookingStep('select');
    setSelectedHotel(null);
    setBookingData({
      checkIn: '',
      checkOut: '',
      guests: '2',
      fullName: '',
      email: '',
      phone: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });
  };

  if (bookingStep === 'select') {
    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Book Your Perfect Stay
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-sm text-gray-500">{hotel.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
                    <span className="text-gray-500"> /night</span>
                  </div>
                  <Button onClick={() => handleBookNow(hotel)}>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (bookingStep === 'details') {
    return (
      <div className="mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setBookingStep('select')}
              className="mb-4"
            >
              ← Back to Hotels
            </Button>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Booking Details
            </h2>
            <p className="text-gray-600">
              You're booking: <span className="font-semibold">{selectedHotel?.name}</span>
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Stay Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-in Date</label>
                  <Input 
                    type="date" 
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-out Date</label>
                  <Input 
                    type="date" 
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="2 guests" 
                    className="pl-10"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Guest Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <Input 
                  placeholder="John Doe"
                  value={bookingData.fullName}
                  onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      type="email"
                      placeholder="john@example.com" 
                      className="pl-10"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="+1 (555) 123-4567" 
                      className="pl-10"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-end">
            <Button onClick={handleNextStep} size="lg">
              Continue to Payment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (bookingStep === 'payment') {
    return (
      <div className="mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setBookingStep('details')}
              className="mb-4"
            >
              ← Back to Details
            </Button>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Payment Information
            </h2>
          </div>

          <form onSubmit={handleBookingSubmit}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Card Number</label>
                  <Input 
                    placeholder="1234 5678 9012 3456"
                    value={bookingData.cardNumber}
                    onChange={(e) => setBookingData({...bookingData, cardNumber: e.target.value})}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Expiry Date</label>
                    <Input 
                      placeholder="MM/YY"
                      value={bookingData.expiryDate}
                      onChange={(e) => setBookingData({...bookingData, expiryDate: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">CVV</label>
                    <Input 
                      placeholder="123"
                      value={bookingData.cvv}
                      onChange={(e) => setBookingData({...bookingData, cvv: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Hotel:</span>
                    <span className="font-medium">{selectedHotel?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span>{selectedHotel?.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>{bookingData.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>{bookingData.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span>{bookingData.guests}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total per night:</span>
                      <span className="text-blue-600">{selectedHotel?.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-end">
              <Button type="submit" size="lg" className="px-8">
                Complete Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default BookingSection;
