import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhhaGFoYTIwIiwiYSI6ImNsaXAwNG9weTA1OHEzZm5xNmd2Z3luYzgifQ.oXF78WtgwOapjpNXFB1b-Q'; 

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [72.8777, 19.0760], 
      zoom: 10
    });

    return () => {
      map.remove(); 
    };
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;

