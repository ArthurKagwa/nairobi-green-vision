
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, CalendarDays } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <section className="py-16 bg-green-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"%234CAF50\" /></svg>')] bg-repeat-x"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"%234CAF50\" /></svg>')] bg-repeat-x"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join the Green Movement</h2>
          <p className="text-lg text-gray-700">
            Whether you're a resident of Nairobi, a tech enthusiast, or a supporter from afar, there are many ways to contribute 
            to GreenMap's mission of creating cooler, greener urban spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-center">Join Local Efforts</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Volunteer for tree planting events</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Help monitor and water new trees</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Contribute to community mapping</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Organize neighborhood clean-ups</span>
              </li>
            </ul>
            <Button className="w-full bg-green-600 hover:bg-green-700">Volunteer Locally</Button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-center">Support Remotely</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Donate to fund tree planting</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Share our story on social media</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Contribute remote data analysis</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-3 w-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Advocate for urban greening policies</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">Donate or Share</Button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <CalendarDays className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-center">Upcoming Events</h3>
            <div className="space-y-4 text-gray-700 mb-6">
              <div className="border-l-2 border-purple-500 pl-3">
                <p className="text-xs text-purple-600 font-medium">June 5, 2025</p>
                <p className="font-medium">World Environment Day Planting</p>
                <p className="text-xs text-gray-500">Kibera Community Park</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-3">
                <p className="text-xs text-purple-600 font-medium">July 12, 2025</p>
                <p className="font-medium">Mapping Workshop</p>
                <p className="text-xs text-gray-500">Pipeline Community Center</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-3">
                <p className="text-xs text-purple-600 font-medium">August 20, 2025</p>
                <p className="font-medium">Tree Health Check Day</p>
                <p className="text-xs text-gray-500">Multiple Locations</p>
              </div>
            </div>
            <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">View Calendar</Button>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-gray-700 mb-6">
            Join our newsletter to receive updates on our progress, upcoming events, and opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-500 hover:bg-green-600">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
