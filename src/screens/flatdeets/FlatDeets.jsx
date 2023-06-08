import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { databases, storage } from '../../services/appwriteConfig';

const FlatDeets = () => {
  const location = useLocation();
  const flatId = location.state.flatId;
  const [flatDetails, setFlatDetails] = useState(null);

  useEffect(() => {
    console.log(flatId);
    const fetchFlatDetails = async () => {
      try {
        const response = await storage.getFilePreview('647beff6d2bb278e1166', flatId);
        setFlatDetails(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlatDetails();
  }, [flatId]);

  if (!flatDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <h2>Flat Details</h2>
        <p>Rent: Rs.{flatDetails.rent} per month</p>
        <p>BHK: {flatDetails.bedsAvail}</p>
        <p>City: {flatDetails.city}</p>
        <p>Address: {flatDetails.address}</p>
      </div>
      <Footer />
    </div>
  );
};

export default FlatDeets;