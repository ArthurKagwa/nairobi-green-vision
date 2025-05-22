
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapViewProps {
  position: number;
  beforeLayer?: string;
  afterLayer?: string;
}

const MapView: React.FC<MapViewProps> = ({ position, beforeLayer = 'streets-v12', afterLayer = 'satellite-v9' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    // Check if we have a token in local storage
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      setMapboxToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    mapboxgl.accessToken = mapboxToken;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${beforeLayer}`,
      center: [36.8219, -1.2921], // Nairobi coordinates
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add compare functionality
    map.current.on('load', () => {
      // Add the "after" layer which will be revealed by the swiper
      const afterSource = {
        'type': 'raster',
        'tiles': [`https://api.mapbox.com/styles/v1/mapbox/${afterLayer}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`],
        'tileSize': 256,
      };

      map.current?.addSource('after-source', afterSource);
      
      map.current?.addLayer({
        'id': 'after-layer',
        'type': 'raster',
        'source': 'after-source',
        'layout': {
          'visibility': 'visible'
        },
        'paint': {}
      });

      updateClipPath();
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, beforeLayer, afterLayer]);

  // Update clip path when position changes
  useEffect(() => {
    updateClipPath();
  }, [position]);

  const updateClipPath = () => {
    if (!map.current) return;
    
    // This function updates the clip path for the "after" layer
    const afterLayer = map.current.getLayer('after-layer');
    if (afterLayer) {
      map.current.setPaintProperty('after-layer', 'raster-opacity-transition', {
        duration: 0
      });
      
      const width = map.current.getContainer().offsetWidth;
      const clipX = (position / 100) * width;
      
      // Create a clip path that shows only the left portion up to the position
      map.current.setPaintProperty('after-layer', 'raster-opacity', [
        'interpolate',
        ['linear'],
        ['viewport-x'],
        clipX,
        1,
        clipX + 1,
        0
      ]);
    }
  };

  const handleSetMapboxToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const token = formData.get('token') as string;
    
    if (token) {
      localStorage.setItem('mapbox_token', token);
      setMapboxToken(token);
    }
  };

  if (!mapboxToken) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Mapbox API Token Required</h3>
        <p className="text-sm text-gray-600 mb-4">
          To use the interactive map features, please enter your Mapbox public token. 
          You can get one by signing up at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>.
        </p>
        <form onSubmit={handleSetMapboxToken} className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text" 
              name="token" 
              placeholder="Enter your Mapbox public token" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required 
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Set Token
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="h-[500px] relative rounded-lg overflow-hidden shadow-xl">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Divider line */}
      <div 
        className="map-compare-handle"
        style={{ left: `${position}%` }}
      ></div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded">After</div>
    </div>
  );
};

export default MapView;
