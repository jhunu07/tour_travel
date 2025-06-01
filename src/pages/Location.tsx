
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search } from 'lucide-react';

const Location = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const popularLocations = [
    { name: 'Kerala', country: 'India', hotels: 60 },
    { name: 'Kashmir', country: 'India', hotels: 25 },
    { name: 'Goa', country: 'India', hotels: 50 },
    { name: 'Delhi', country: 'India', hotels: 80 },
    { name: 'Shimla', country: 'India', hotels: 35 },
    { name: 'Meghalaya', country: 'India', hotels: 30 },
    { name: 'Jaipur', country: 'India', hotels: 20 },
    { name: 'Leh', country: 'India', hotels: 10 },
    { name: 'Agra', country: 'India', hotels: 50 },
    { name: 'Varanasi', country: 'India', hotels: 40 },
    { name: 'Udaipur', country: 'India', hotels: 22 },
    { name: 'Rishikesh', country: 'India', hotels: 18 },
    { name: 'Mysore', country: 'India', hotels: 15 },
    { name: 'Darjeeling', country: 'India', hotels: 12 },
    { name: 'Ooty', country: 'India', hotels: 17 },
    { name: 'Pune', country: 'India', hotels: 28 },
    { name: 'Amritsar', country: 'India', hotels: 21 },
    { name: 'Mumbai', country: 'India', hotels: 100 },
    { name: 'Chennai', country: 'India', hotels: 55 },
    { name: 'Hyderabad', country: 'India', hotels: 45 },
  ];

  const filteredLocations = popularLocations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationSelect = (locationName: string) => {
    setSelectedLocation(locationName);
    // Navigate to main booking page with selected location
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Where do you want to stay?
            </h1>
            <p className="text-gray-600 text-lg">
              Choose your destination and discover amazing hotels
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for a city or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <Card 
                key={location.name}
                className="hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105"
                onClick={() => handleLocationSelect(location.name)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    {location.name}
                  </CardTitle>
                  <p className="text-gray-600">{location.country}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {location.hotels} hotels available
                  </p>
                  <Button className="w-full mt-4" variant="outline">
                    Select Destination
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No locations found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
