import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Fix for default marker icon issue in Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([34.0837, 74.7973], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.current);

    // Add marker
    const marker = L.marker([34.0837, 74.7973]).addTo(map.current);
    marker.bindPopup('<div style="text-align: center;"><h3 style="font-weight: bold; color: #000; margin: 0 0 4px 0;">Srinagar</h3><p style="color: #666; margin: 0;">Kashmir, India</p></div>');

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <section id="location" className="py-24 bg-darker-bg relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Location</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Srinagar, Kashmir, India
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            ref={mapContainer}
            className="w-full h-[500px] rounded-xl shadow-2xl border border-border/50 overflow-hidden"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Address:</span> Srinagar, Kashmir, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
