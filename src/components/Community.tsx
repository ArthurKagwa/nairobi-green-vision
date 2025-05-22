
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PersonStanding, Trees, Smartphone, Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Community-Powered Transformation</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          See how community members, planners, and technology come together to create 
          greener, cooler urban spaces in Nairobi.
        </p>
        
        <Tabs defaultValue="community" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 h-auto">
              <TabsTrigger value="community" className="py-3 flex flex-col items-center gap-1">
                <PersonStanding className="h-5 w-5" />
                <span>Community</span>
              </TabsTrigger>
              <TabsTrigger value="planting" className="py-3 flex flex-col items-center gap-1">
                <Trees className="h-5 w-5" />
                <span>Tree Planting</span>
              </TabsTrigger>
              <TabsTrigger value="tech" className="py-3 flex flex-col items-center gap-1">
                <Smartphone className="h-5 w-5" />
                <span>Tech Tools</span>
              </TabsTrigger>
              <TabsTrigger value="impact" className="py-3 flex flex-col items-center gap-1">
                <Users className="h-5 w-5" />
                <span>Impact</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="community" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
                <p className="text-gray-700 mb-4">
                  Local communities are at the heart of GreenMap Nairobi. Residents in areas like Kibera and Pipeline 
                  participate in identifying heat islands, planning green spaces, and maintaining new trees.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                    <span>Neighborhood mapping workshops identify priority areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                    <span>Community-led tree planting and maintenance teams</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                    <span>Knowledge sharing between established and new sites</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex flex-col">
                  {/* Stylized community image */}
                  <div className="flex-1 bg-earth-light flex items-center justify-center relative">
                    <div className="absolute inset-0 flex flex-wrap p-4 gap-2 justify-around content-around">
                      {/* People icons in a gathering pattern */}
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-earth-dark/80 flex items-center justify-center relative group">
                          <div className="h-3 w-3 rounded-full bg-white absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                          <div className="h-4 w-4 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-earth-dark"></div>
                        </div>
                      ))}
                      
                      {/* Community center representation */}
                      <div className="absolute inset-1/4 border-2 border-green-500 rounded-lg border-dashed flex items-center justify-center">
                        <div className="text-green-600 text-xs font-bold">Community Center</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map overlay at bottom */}
                  <div className="h-16 bg-map-light flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\"><rect width=\"10\" height=\"10\" fill=\"none\" stroke=\"%23FFFFFF\" stroke-width=\"0.5\" stroke-dasharray=\"1,1\" /></svg>')] bg-repeat"></div>
                    <div className="absolute inset-0 flex items-center justify-around">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-3 w-3 rounded-full bg-green-500 animate-pulse-gentle"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="planting" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-b from-earth-light to-green-light flex items-end justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Tree growth animation */}
                    <div className="tree-growth flex flex-col items-center transform scale-90 hover:scale-100 transition-transform">
                      {/* Tree trunk */}
                      <div className="w-8 h-24 bg-earth-dark rounded-lg"></div>
                      {/* Tree foliage */}
                      <div className="-mt-10 w-32 h-32 bg-green-dark rounded-full"></div>
                      <div className="-mt-20 w-24 h-24 bg-green-DEFAULT rounded-full"></div>
                      <div className="-mt-16 w-20 h-20 bg-green-light rounded-full"></div>
                      
                      {/* Ground */}
                      <div className="mt-4 w-48 h-6 bg-earth-DEFAULT rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Timeline indicators */}
                  <div className="h-12 w-full bg-white/20 flex items-center justify-between px-8">
                    <div className="text-center">
                      <div className="h-4 w-4 bg-green-dark rounded-full"></div>
                      <span className="text-xs font-bold">Year 1</span>
                    </div>
                    <div className="text-center">
                      <div className="h-4 w-4 bg-green-dark rounded-full"></div>
                      <span className="text-xs font-bold">Year 3</span>
                    </div>
                    <div className="text-center">
                      <div className="h-4 w-4 bg-green-dark rounded-full"></div>
                      <span className="text-xs font-bold">Year 5</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Strategic Tree Planting</h3>
                <p className="text-gray-700 mb-4">
                  Our approach combines indigenous knowledge with scientific data to ensure trees are planted 
                  where they'll have the most impact on cooling and quality of life.
                </p>
                <div className="space-y-4 mb-6">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <h4 className="font-medium">Native Species Selection</h4>
                      <p className="text-sm text-gray-600">
                        Locally adapted trees that require minimal water and provide maximum shade coverage
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <h4 className="font-medium">Strategic Placement</h4>
                      <p className="text-sm text-gray-600">
                        Trees positioned to maximize cooling near schools, markets, and community gathering spaces
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <h4 className="font-medium">Growth Monitoring</h4>
                      <p className="text-sm text-gray-600">
                        Digital tracking of tree health and growth for timely interventions
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tech" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Digital Tools & Earth Observation</h3>
                <p className="text-gray-700 mb-4">
                  GreenMap Nairobi leverages satellite imagery, mobile apps, and data science to guide interventions
                  and measure impact with precision.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="h-8 w-8 bg-map-DEFAULT rounded-md flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <line x1="12" y1="2" x2="12" y2="22"></line>
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium">Geospatial Mapping</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Precision mapping of heat islands and vegetation density
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="h-8 w-8 bg-map-DEFAULT rounded-md flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium">Mobile App</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Community reporting and tree monitoring
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="h-8 w-8 bg-map-DEFAULT rounded-md flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium">NDVI Analysis</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Vegetation index monitoring from satellite data
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="h-8 w-8 bg-map-DEFAULT rounded-md flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium">Dashboard</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Real-time analytics for planners and community leaders
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-[#111722] flex flex-col">
                  {/* Tech dashboard visualization */}
                  <div className="flex-1 flex flex-col p-4">
                    <div className="mb-3 flex justify-between items-center">
                      <div className="text-green-400 text-sm font-mono">GreenMap Dashboard</div>
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      <div className="bg-[#1a2233] rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">Temperature Map</div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-full h-3/4 bg-gradient-to-br from-blue-500/30 to-red-500/30 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-[#1a2233] rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">Vegetation Index</div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-full h-3/4 bg-gradient-to-br from-yellow-700/30 to-green-500/30 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-[#1a2233] rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">Tree Health Tracking</div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-4/5 h-3/4 flex space-x-1">
                            {[0.7, 0.9, 0.5, 0.8, 0.6].map((h, i) => (
                              <div 
                                key={i} 
                                className="flex-1 bg-green-500/40 rounded-t-sm" 
                                style={{height: `${h * 100}%`}}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1a2233] rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">Community Reporting</div>
                        <div className="flex-1 relative">
                          <div className="absolute inset-0 flex items-center justify-around flex-wrap gap-1">
                            {[...Array(9)].map((_, i) => (
                              <div key={i} className="h-2 w-2 rounded-full bg-blue-400/80 animate-pulse-gentle"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status bar */}
                  <div className="h-8 bg-[#0d1118] flex items-center justify-between px-3">
                    <div className="text-xs text-green-400">● System Online</div>
                    <div className="text-xs text-white/60">Last updated: 22/05/2025</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="impact" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 relative">
                    {/* Impact metrics visualization */}
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-green-600 mb-2">-5°C</div>
                        <div className="text-sm text-gray-600 text-center">Temperature Reduction</div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-green-600 mb-2">+350%</div>
                        <div className="text-sm text-gray-600 text-center">Green Cover Increase</div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
                        <div className="text-sm text-gray-600 text-center">Community Members</div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
                        <div className="text-sm text-gray-600 text-center">Trees Planted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Measurable Impact</h3>
                <p className="text-gray-700 mb-4">
                  Since our initiative began, we've seen tangible improvements in both environmental metrics 
                  and community wellbeing across Nairobi's urban neighborhoods.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Environmental Benefits</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                        <span>Average temperature reduction of 3-5°C in transformed areas</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                        <span>Improved air quality with measured reduction in particulate matter</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                        <span>Reduced flooding through improved water absorption</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Community Benefits</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                        <span>New shaded public spaces for community gatherings</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                        <span>Skill development in tree care and digital mapping</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 bg-green-500 rounded-full"></div>
                        <span>Pride and ownership in neighborhood transformation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CommunitySection;
