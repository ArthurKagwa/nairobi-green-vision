
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine, Thermometer, Users, Map } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">About GreenMap Nairobi</h2>
          <p className="text-lg text-gray-700 mb-8">
            GreenMap Nairobi is a community-powered initiative that combines technology, local knowledge, and
            collective action to transform urban heat islands into cooler, greener, and more livable spaces.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Community-Driven
            </span>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Data-Powered
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              Climate Action
            </span>
            <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Urban Resilience
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Urban Greening</h3>
              <p className="text-gray-600 text-sm">
                Strategic tree planting and green space development in Nairobi's most heat-stressed neighborhoods like Kibera and Pipeline.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-orange-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Thermometer className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Heat Reduction</h3>
              <p className="text-gray-600 text-sm">
                Combating urban heat islands through increased vegetation coverage and strategic shade creation for healthier communities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Digital Mapping</h3>
              <p className="text-gray-600 text-sm">
                Combining satellite data with community knowledge to identify priority areas and measure the impact of greening efforts.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-purple-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Community Action</h3>
              <p className="text-gray-600 text-sm">
                Engaging local residents in planning, planting, and maintaining green spaces for sustainable transformation.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-700">
            We envision a Nairobi where every community has access to cooler, greener spaces that enhance quality of life,
            build climate resilience, and create healthier environments for all residents — driven by communities and powered
            by digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
