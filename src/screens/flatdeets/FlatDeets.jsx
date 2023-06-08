import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { databases, storage } from '../../services/appwriteConfig';

const FlatDeets = () => {
  const location = useLocation();
  const flatId = location.state.flatId;
  const  flatdeetId= location.state.flatdeetId;
  const [flatDetails, setFlatDetails] = useState(null);
useEffect(() => {
       console.log(flatdeetId+'I am flatdeet');
  const fetchFlatDetails = async () => {
    try {
      const filesresponse = await storage.listFiles("6480d843935646ed03ca");
      const deetsResponse = await databases.listDocuments("647beff6d2bb278e1166", "6480bea54aea6eb0543b", flatdeetId);
      setFlatDetails(
        filesresponse.files.map((file, index) => ({
          id: file.$id,
          file,
          deet: deetsResponse.documents[index],
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  fetchFlatDetails();
}, [flatId]);

useEffect(() => {
  console.log(flatDetails);
}, [flatDetails]);
 
  if (!flatDetails) {
    return <div>Loading...</div>;
       }
      const getFilePreview = (file) => {
    return storage.getFilePreview("6480d843935646ed03ca", flatId);
  }; 

  return (
    <div>
      <Navbar />
      <div>
                <img src={getFilePreview("6480d843935646ed03ca", flatId)} /> 
      </div>
      <Footer />
    </div>
  );
};

export default FlatDeets;