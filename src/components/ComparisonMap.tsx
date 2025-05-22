import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, Thermometer, Trees, Satellite, Map } from 'lucide-react';
import MapView from './MapView';

const ComparisonMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState("visual");

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newPosition = (x / rect.width) * 100;
      setPosition(Math.min(Math.max(newPosition, 5), 95));
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section id="visualization" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Before & After Transformation</h2>
        
        <Tabs defaultValue="visual" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="visual" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span>Visual</span>
              </TabsTrigger>
              <TabsTrigger value="temperature" className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                <span>Temperature</span>
              </TabsTrigger>
              <TabsTrigger value="ndvi" className="flex items-center gap-2">
                <Trees className="h-4 w-4" />
                <span>Vegetation (NDVI)</span>
              </TabsTrigger>
              <TabsTrigger value="satellite" className="flex items-center gap-2">
                <Satellite className="h-4 w-4" />
                <span>Satellite</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span>Real Map</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="visual">
            <div 
              ref={containerRef}
              className="map-container h-[500px] relative rounded-lg overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
            >
              {/* Before image (full width) */}
              <div className="absolute inset-0 bg-heat-light/30">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22%23FF9A76%22%20fill-opacity%3D%220.2%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-heat-dark/30 rounded-md p-6 text-white">
                    <div className="border-b-2 border-white/20 pb-2 mb-4">Kibera / Pipeline Area</div>
                    <div className="grid grid-cols-3 gap-4 h-full">
                      <div className="col-span-2 bg-heat/20 rounded-md"></div>
                      <div className="space-y-2">
                        <div className="h-1/3 bg-heat/20 rounded-md"></div>
                        <div className="h-1/3 bg-heat/30 rounded-md"></div>
                        <div className="h-1/3 bg-heat/40 rounded-md"></div>
                      </div>
                    </div>
                    {/* Scattered small buildings */}
                    <div className="absolute top-[30%] left-[20%] w-6 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[40%] left-[25%] w-8 h-12 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[35%] left-[35%] w-10 h-8 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[45%] left-[40%] w-6 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[50%] left-[30%] w-8 h-8 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[60%] left-[25%] w-10 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[55%] left-[45%] w-12 h-8 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[65%] left-[50%] w-8 h-12 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[70%] left-[35%] w-10 h-10 bg-heat-dark rounded shadow-md"></div>
                    
                    {/* Roads */}
                    <div className="absolute top-[50%] left-0 w-full h-2 bg-gray-600"></div>
                    <div className="absolute top-0 left-[30%] w-2 h-full bg-gray-600"></div>
                    <div className="absolute top-0 left-[70%] w-2 h-full bg-gray-600"></div>
                  </div>
                </div>
              </div>

              {/* After image (partial width based on divider position) */}
              <div 
                className="absolute inset-0 bg-green-light/30"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22%234CAF50%22%20fill-opacity%3D%220.2%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-green-dark/30 rounded-md p-6 text-white">
                    <div className="border-b-2 border-white/20 pb-2 mb-4">Kibera / Pipeline Area (Transformed)</div>
                    <div className="grid grid-cols-3 gap-4 h-full">
                      <div className="col-span-2 bg-green/20 rounded-md"></div>
                      <div className="space-y-2">
                        <div className="h-1/3 bg-green/20 rounded-md"></div>
                        <div className="h-1/3 bg-green/30 rounded-md"></div>
                        <div className="h-1/3 bg-green/40 rounded-md"></div>
                      </div>
                    </div>
                    
                    {/* Scattered small buildings with trees */}
                    <div className="absolute top-[30%] left-[20%] w-6 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[29%] left-[22%] w-4 h-4 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[40%] left-[25%] w-8 h-12 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[38%] left-[28%] w-5 h-5 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[35%] left-[35%] w-10 h-8 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[33%] left-[38%] w-6 h-6 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[45%] left-[40%] w-6 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[43%] left-[42%] w-5 h-5 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[50%] left-[30%] w-8 h-8 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[48%] left-[33%] w-5 h-5 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[60%] left-[25%] w-10 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[58%] left-[28%] w-6 h-6 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[55%] left-[45%] w-12 h-8 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[53%] left-[48%] w-5 h-5 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[65%] left-[50%] w-8 h-12 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[63%] left-[53%] w-6 h-6 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    <div className="absolute top-[70%] left-[35%] w-10 h-10 bg-heat-dark rounded shadow-md"></div>
                    <div className="absolute top-[68%] left-[38%] w-5 h-5 rounded-full bg-green animate-pulse-gentle shadow-md"></div>
                    
                    {/* Green pathways instead of roads */}
                    <div className="absolute top-[50%] left-0 w-full h-2 bg-gray-600"></div>
                    <div className="absolute top-[50%] left-0 w-full h-6 bg-green-dark/50 -translate-y-1/2"></div>
                    
                    <div className="absolute top-0 left-[30%] w-2 h-full bg-gray-600"></div>
                    <div className="absolute top-0 left-[30%] w-6 h-full bg-green-dark/50 -translate-x-1/2"></div>
                    
                    <div className="absolute top-0 left-[70%] w-2 h-full bg-gray-600"></div>
                    <div className="absolute top-0 left-[70%] w-6 h-full bg-green-dark/50 -translate-x-1/2"></div>
                    
                    {/* Community members with phones */}
                    <div className="absolute top-[25%] left-[60%] w-3 h-6 bg-blue-500 rounded-full shadow-md"></div>
                    <div className="absolute top-[25%] left-[60%] w-6 h-6 rounded-full border-2 border-blue-500 animate-ping-slow"></div>
                    
                    <div className="absolute top-[75%] left-[20%] w-3 h-6 bg-blue-500 rounded-full shadow-md"></div>
                    <div className="absolute top-[75%] left-[20%] w-6 h-6 rounded-full border-2 border-blue-500 animate-ping-slow"></div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div 
                ref={dividerRef}
                className="map-compare-handle"
                style={{ left: `${position}%` }}
                onMouseDown={handleMouseDown}
              ></div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">Before</div>
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded">After</div>
            </div>
          </TabsContent>
          
          <TabsContent value="temperature">
            <div 
              ref={containerRef}
              className="map-container h-[500px] relative rounded-lg overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
            >
              {/* Before - Temperature overlay (hot) */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-600">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23FF0000%22%20fill-opacity%3D%220.3%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
                {/* Temperature data points */}
                <div className="absolute top-1/4 left-1/4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">38°C</div>
                <div className="absolute top-2/3 left-1/3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">39°C</div>
                <div className="absolute top-1/3 left-2/3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">40°C</div>
                <div className="absolute top-3/4 left-3/5 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">37°C</div>
              </div>

              {/* After - Temperature overlay (cooler) */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-300 to-blue-400"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%230000FF%22%20fill-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
                {/* Temperature data points */}
                <div className="absolute top-1/4 left-1/4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">29°C</div>
                <div className="absolute top-2/3 left-1/3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">31°C</div>
                <div className="absolute top-1/3 left-2/3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">30°C</div>
                <div className="absolute top-3/4 left-3/5 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">28°C</div>
              </div>

              {/* Divider */}
              <div 
                ref={dividerRef}
                className="map-compare-handle"
                style={{ left: `${position}%` }}
                onMouseDown={handleMouseDown}
              ></div>

              {/* Legend */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded"></div>
                <span className="text-xs">Cooler</span>
                <div className="w-24 h-2 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-600 rounded-full"></div>
                <span className="text-xs">Hotter</span>
                <div className="w-4 h-4 bg-red-600 rounded"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ndvi">
            <div 
              ref={containerRef}
              className="map-container h-[500px] relative rounded-lg overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
            >
              {/* Before - Low NDVI (less vegetation) */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-orange-800">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%220.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
                {/* NDVI data points */}
                <div className="absolute top-1/4 left-1/4 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.12</div>
                <div className="absolute top-2/3 left-1/3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.08</div>
                <div className="absolute top-1/3 left-2/3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.15</div>
                <div className="absolute top-3/4 left-3/5 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.10</div>
              </div>

              {/* After - High NDVI (more vegetation) */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%220.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
                {/* NDVI data points */}
                <div className="absolute top-1/4 left-1/4 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.45</div>
                <div className="absolute top-2/3 left-1/3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.52</div>
                <div className="absolute top-1/3 left-2/3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.48</div>
                <div className="absolute top-3/4 left-3/5 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">0.55</div>
              </div>

              {/* Divider */}
              <div 
                ref={dividerRef}
                className="map-compare-handle"
                style={{ left: `${position}%` }}
                onMouseDown={handleMouseDown}
              ></div>

              {/* Legend */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-700 rounded"></div>
                <span className="text-xs">Low NDVI</span>
                <div className="w-24 h-2 bg-gradient-to-r from-yellow-700 via-lime-500 to-green-700 rounded-full"></div>
                <span className="text-xs">High NDVI</span>
                <div className="w-4 h-4 bg-green-700 rounded"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="satellite">
            <div 
              ref={containerRef}
              className="map-container h-[500px] relative rounded-lg overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
            >
              {/* Before - Satellite view (sparse vegetation) */}
              <div className="absolute inset-0 bg-gray-700">
                <div className="absolute inset-0 satellite-layer"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 relative">
                    {/* Simulating satellite imagery patterns */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23555555%22%20%2F%3E%3Crect%20x%3D%2250%22%20y%3D%220%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23444444%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%2250%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23444444%22%20%2F%3E%3Crect%20x%3D%2250%22%20y%3D%2250%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23555555%22%20%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:20px_20px]"></div>
                    
                    {/* Adding rare green spots */}
                    <div className="absolute top-[10%] left-[20%] w-4 h-4 rounded-full bg-green-700/70"></div>
                    <div className="absolute top-[30%] left-[70%] w-6 h-6 rounded-full bg-green-700/70"></div>
                    <div className="absolute top-[60%] left-[15%] w-5 h-5 rounded-full bg-green-700/70"></div>
                    <div className="absolute top-[80%] left-[60%] w-4 h-4 rounded-full bg-green-700/70"></div>
                    
                    {/* Roads */}
                    <div className="absolute top-[50%] left-0 w-full h-1 bg-gray-400"></div>
                    <div className="absolute top-0 left-[30%] w-1 h-full bg-gray-400"></div>
                    <div className="absolute top-0 left-[70%] w-1 h-full bg-gray-400"></div>
                  </div>
                </div>
              </div>

              {/* After - Satellite view (more vegetation) */}
              <div 
                className="absolute inset-0 bg-gray-700"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <div className="absolute inset-0 satellite-layer"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 relative">
                    {/* Simulating satellite imagery patterns */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23555555%22%20%2F%3E%3Crect%20x%3D%2250%22%20y%3D%220%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23444444%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%2250%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23444444%22%20%2F%3E%3Crect%20x%3D%2250%22%20y%3D%2250%22%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23555555%22%20%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:20px_20px]"></div>
                    
                    {/* Adding many green spots */}
                    <div className="absolute top-[10%] left-[20%] w-8 h-8 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[30%] left-[70%] w-10 h-10 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[60%] left-[15%] w-12 h-12 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[80%] left-[60%] w-9 h-9 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[20%] left-[40%] w-7 h-7 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[50%] left-[80%] w-8 h-8 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[70%] left-[30%] w-10 h-10 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[40%] left-[50%] w-8 h-8 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[15%] left-[85%] w-6 h-6 rounded-full bg-green-600/80"></div>
                    <div className="absolute top-[85%] left-[10%] w-9 h-9 rounded-full bg-green-600/80"></div>
                    
                    {/* Roads with green buffers */}
                    <div className="absolute top-[50%] left-0 w-full h-1 bg-gray-400"></div>
                    <div className="absolute top-[50%] left-0 w-full h-4 bg-green-600/40 -translate-y-1/2"></div>
                    
                    <div className="absolute top-0 left-[30%] w-1 h-full bg-gray-400"></div>
                    <div className="absolute top-0 left-[30%] w-4 h-full bg-green-600/40 -translate-x-1/2"></div>
                    
                    <div className="absolute top-0 left-[70%] w-1 h-full bg-gray-400"></div>
                    <div className="absolute top-0 left-[70%] w-4 h-full bg-green-600/40 -translate-x-1/2"></div>
                  </div>
                </div>
                
                {/* Satellite indicators */}
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 border-2 border-white rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-0 w-8 h-px bg-white"></div>
                    <div className="absolute top-0 left-1/2 h-8 w-px bg-white"></div>
                  </div>
                  <div className="mt-1 text-[8px] text-white bg-black/50 px-1 rounded">
                    SAT-6 NDVI
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div 
                ref={dividerRef}
                className="map-compare-handle"
                style={{ left: `${position}%` }}
                onMouseDown={handleMouseDown}
              ></div>

              {/* Legend */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-xs">
                Satellite Imagery with Enhanced Vegetation Index
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="map">
            <MapView 
              position={position}
              beforeLayer="streets-v12"
              afterLayer="satellite-v9"
            />
          </TabsContent>
          
          <div className="mt-6 text-center text-gray-600 text-sm">
            Drag the slider to compare before and after urban greening intervention
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ComparisonMap;
