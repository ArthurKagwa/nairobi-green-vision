
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Satellite, Database, Map, LineChart } from 'lucide-react';

const DataSection: React.FC = () => {
  return (
    <section id="data" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Earth Observation & Digital Tools</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          GreenMap Nairobi combines satellite data with community input to guide urban greening efforts
          for maximum impact on heat reduction.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-72 md:h-auto flex flex-col justify-center">
              {/* Satellite visualization */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Rotating earth */}
                <div className="w-64 h-64 rounded-full bg-map-dark border-4 border-white/10 relative animate-[spin_30s_linear_infinite]">
                  {/* Landmass patterns */}
                  <div className="absolute top-1/4 left-1/4 w-1/5 h-1/4 bg-green-dark/70 rounded-full"></div>
                  <div className="absolute top-2/3 right-1/3 w-1/4 h-1/5 bg-green-dark/70 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1/6 bg-green-dark/70 rounded-full"></div>
                  
                  {/* Satellite orbit path */}
                  <div className="absolute inset-0 border-2 border-white/20 rounded-full rotate-45"></div>
                  
                  {/* Satellite icon */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-4 bg-gray-300 rounded animate-pulse-gentle flex flex-col items-center">
                      <div className="w-4 h-2 bg-blue-500 rounded-t-sm"></div>
                      <div className="w-6 h-px bg-white absolute -left-6 top-1/2"></div>
                      <div className="w-6 h-px bg-white absolute -right-6 top-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* Data beams */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-xs max-h-xs">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(14, 165, 233, 0.8)" />
                          <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
                        </linearGradient>
                      </defs>
                      <path d="M50,0 L60,100 L50,100 Z" fill="url(#beam)" opacity="0.5" className="animate-pulse-gentle" />
                      <path d="M50,0 L40,100 L50,100 Z" fill="url(#beam)" opacity="0.5" className="animate-pulse-gentle" style={{animationDelay: '0.5s'}} />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Labels overlay */}
              <div className="absolute top-4 left-4 bg-black/60 text-white text-xs rounded px-2 py-1">
                Landsat-8 NDVI Capture
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Satellite Data Analysis</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-green-100 rounded-md">
                    <Satellite className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Earth Observation</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Regular satellite imagery captures surface temperature and vegetation changes across Nairobi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-green-100 rounded-md">
                    <Map className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">NDVI Analysis</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Normalized Difference Vegetation Index quantifies plant health and density from spectral data
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-green-100 rounded-md">
                    <Database className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Open Data Integration</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Combining satellite data with demographic and infrastructure information for holistic planning
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-green-100 rounded-md">
                    <LineChart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Impact Measurement</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Quantitative tracking of temperature changes and vegetation growth over time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Sustainable Development Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">11</span>
                    </div>
                    <h4 className="font-semibold">SDG 11: Sustainable Cities & Communities</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Making Nairobi's urban spaces more inclusive, safe, resilient and sustainable through 
                    community-driven greening initiatives and data-driven planning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-green-600">13</span>
                    </div>
                    <h4 className="font-semibold">SDG 13: Climate Action</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Taking urgent action to combat climate change and its impacts by reducing urban heat islands,
                    increasing carbon sequestration, and building community climate resilience.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="bg-green-500 hover:bg-green-600">
                Learn More About Our SDG Impact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
