"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Fix for default marker icon issue in Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })
  ._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // ✅ Correct coordinates for Convocation Complex, University of Kashmir
    const lat = 34.089897;
    const lon = 74.864871;

    // Slightly higher zoom for precise placement
    map.current = L.map(mapContainer.current).setView([lat, lon], 17);

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.current);

    // ✅ Marker precisely at Convocation Complex
    const marker = L.marker([lat, lon]).addTo(map.current);
    marker.bindPopup(`
      <div style="text-align: center;">
        <h3 style="font-weight: bold; color: #000; margin: 0 0 4px 0;">
          Sher-Kashmir International Conference Centre
        </h3>
        <p style="color: #666; margin: 0;">
           Cheshmashahi,near Centaur Hotel, Srinagar, Jammu and Kashmir 191121
        </p>
      </div>
    `);

    // (Optional) Open popup by default when map loads
    marker.openPopup();

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <section
      id="location"
      ref={ref}
      className="py-28 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Matching glowing red background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e62b1e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e62b1e] rounded-full blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <MapPin className="w-10 h-10 text-[#e62b1e] mr-3 animate-float" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Event <span className="text-[#e62b1e]">Location</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl">
            Sher-Kashmir International Conference Centre(SKICC), Cheshmashahi,
            near Centaur Hotel, Srinagar, Jammu and Kashmir 191121
          </p>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto">
          <div
            ref={mapContainer}
            className="w-full h-[500px] rounded-2xl shadow-2xl border border-[#e62b1e]/20 overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
