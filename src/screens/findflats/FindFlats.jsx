import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { storage, databases } from '../../services/appwriteConfig';
import './FindFlats.css';
import { Hotel } from "@mui/icons-material";
import Map from '../../components/map/Map';

const FindFlats = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const getFlats = async () => {
      try {
        const filesResponse = await storage.listFiles("6480d843935646ed03ca");
        const deetsResponse = await databases.listDocuments("647beff6d2bb278e1166", "6480bea54aea6eb0543b");

         setFlats(
      filesResponse.files.map((file, index) => ({
        id: file.$id,
        file,
        deet: deetsResponse.documents[index],
      }))
    );
  } catch (error) {
    console.log(error);
      }
    };

    getFlats();
  }, []);

  const getFilePreview = (file) => {
    return storage.getFilePreview("6480d843935646ed03ca", document.$id);
  };

       const handleFlatClick = (flatId) => {
              navigate('/flatdeets', { state: { flatId } });
              console.log(flatId);
  };
  return (
    <div>
      <Navbar />
      <div className="flatandmap">
        <div className="flatsphotoinfo">
          <div className="flatsphotos">
            {flats.map((flat) => (
              <div key={flat.id} onClick={() => handleFlatClick(flat.id)}>
                <img src={getFilePreview(flat.file)} alt={flat.file.name} className="flatsphoto" />
                <h2>Rs.{flat.deet.rent} per month</h2>
                <p><Hotel/> {flat.deet.bedsAvail} bhk</p>
                <p>{flat.deet.city} </p>
                <p>{flat.deet.address} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flatsmap"><Map/></div>
      </div>
      <Footer />
    </div>
  );
};

export default FindFlats;

