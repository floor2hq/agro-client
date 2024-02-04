"use client"
import DistributorHeader from "@/components/component/distributor/DistributorHeader";
import DistributorCropDetails from "@/components/component/distributor/DistributorCropDetails";
import DistributorFarmerDetails from "@/components/component/distributor/DistributorFarmerDetails";
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoic291Ymhpa2cyNiIsImEiOiJjbHM3aXV6eHIxaWFtMmtyeHRzOGxtMjUyIn0.WMSp-LMdA8tt3xJWjutlCg';
const MapComponent = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [distance, setDistance] = useState(null);

  // @ts-ignore
  useEffect(() => {
    if (!map) {
      const initializedMap = new mapboxgl.Map({
        // @ts-ignore
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
      });

      initializedMap.on('load', () => {
        initializedMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add a marker at the Statue of Liberty
        const marker1 = new mapboxgl.Marker()
          .setLngLat([-74.0445, 23.6892])
          .addTo(initializedMap);

        // Add a marker at the Empire State Building
        const marker2 = new mapboxgl.Marker()
          .setLngLat([-73.9857, 40.7484])
          .addTo(initializedMap);

        // Calculate the distance between two points
        const distanceInMeters = marker1.getLngLat().distanceTo(marker2.getLngLat());
        const distanceInKilometers = (distanceInMeters / 1000).toFixed(2); // Convert to kilometers and round to 2 decimal places
        // @ts-ignore
        setDistance(distanceInKilometers + ' km');
      });
// @ts-ignore
      setMap(initializedMap);
    }
// @ts-ignore
    return () => map && map.remove(); // Cleanup function to remove the map when component unmounts
  }, [map]);

  return (
    <main className="py-8">
         <div>
             <DistributorHeader />
         </div>
         <div className="flex justify-between">
             <DistributorCropDetails />
         <DistributorFarmerDetails />
         </div>
    <div>
      <div ref={mapContainer} style={{ height: '400px' }} />
      <div>Distance between points: {distance}</div>
    </div>
       </main>
    )

};
export default MapComponent;
 