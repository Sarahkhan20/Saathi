import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { databases, storage } from '../../services/appwriteConfig';
import { LocalLaundryService, LocalParking, NetworkWifi } from "@mui/icons-material";
import Map from '../../components/map/Map';
import './FlatDeets.css'
import mailto from 'mailto-link';

const FlatDeets = () => {
  const location = useLocation();
  const flatId = location.state.flatId;
  const flatdeetId = location.state.flatdeetId;
  const [flatDetails, setFlatDetails] = useState(null);

  useEffect(() => {
    const fetchFlatDetails = async () => {
      try {
        const filesresponse = await storage.listFiles("6480d843935646ed03ca");
        const deetsResponse = await databases.getDocument(
          "647beff6d2bb278e1166",
          "6480bea54aea6eb0543b",
          flatdeetId
        );
        setFlatDetails([
          {
            id: filesresponse.files[0].$id,
            file: filesresponse.files[0],
            deet: deetsResponse,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlatDetails();
  }, [flatId, flatdeetId]);

  useEffect(() => {
    console.log(flatDetails);
  }, [flatDetails]);

  if (!flatDetails) {
    return <div>Loading...</div>;
  }

  const getFilePreview = (file) => {
    return storage.getFilePreview("6480d843935646ed03ca", flatId);
  };
 const handleRequestTour = () => {
  const email = 'sarah@gmail.com';
  const subject = 'Requesting a Tour';
  const body = 'Dear, I would like to request a tour. Please provide me with the details.';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
};


  return (
    <div>
      <Navbar />
      <div>
        {flatDetails.map((detail) => (
          <div key={detail.id}>
            <div className='FlatDeets_images'>
            <img src={getFilePreview("6480d843935646ed03ca", flatId)} alt={detail.file.name} />
              </div>
            <div className='flat_deets'>
              <div className="major_deets">
              <div className="city_address">
                  <p> {detail.deet.city}</p>
              <p>{detail.deet.address}</p>
              </div>
              <div className="deets_report">
              <div className="room_deets">
              <p className='rent'><b>Rs.{ detail.deet.rent} </b> per month</p>
              <p className='bedsAvail'>{detail.deet.bedsAvail}bhk</p>
              <p className='address'>{detail.deet.address}</p>
              <p className='city'> {detail.deet.city}</p>
                </div>
              <div className="report_button">
                <button>Report the Flat</button>
               </div>
              </div>
              <div className="Amenities">
                <h2>Amenities</h2>
                <div className="diff_amenities">
                  <div className="wifi">
                    <NetworkWifi />
                    <p>wifi</p>
                  </div>
                  <div className="laundry">
                    <LocalLaundryService />
                    <p>laundry</p>
                  </div>
                  <div className="parking">
                    <LocalParking />
                    <p>parking</p>
                  </div>
                </div>
              </div>
              <div className="location">
                <h2>Location</h2>
                <Map/>
              </div>
               
              </div>
              <div className="contact_reviews">
                <div className="contact">
               <h2> Contact This Owner</h2>
                  <button className='Request_tour' onClick={ handleRequestTour}>Request Tour</button>
                <button className='Request_vidcall'>Request Video Call</button>
                <p>{detail.deet.phonenum }</p>
                </div>
                <div className="college_uni">
                  <div className="colleges">
                    <h6>Colleges & Universities</h6>
                    <p>TSEC College</p>
                    <p>National College</p>
                    <p>Mount Mary Convent High School</p>
                  </div>
                  <div className="distance">
                    <h6>Distance</h6>
                    <p>1.2 km</p>
                    <p>1.2 km</p>
                    <p>2.5 km</p>
                  </div>
                </div>
                <div className="ratings">
                  <div className="ratings_reviews">
                  <h2>Ratings & Reviews</h2>
                  <div className="stars">
                      <p className="fivestar"> 5.0 <br />
                        <br /></p>
                  <p className="excellent">Excellent <br /></p>  
                    <div className="star_mota_border">Out of 5</div>
                  </div>
                    </div>
                  <div className="write_review">
                Sharing your experience Helps 
Others To Explore Better Options
                    Wanna write a Genuine Review?
                    <button>
                      Write a Review
                    </button>
                  </div>
                </div>
                </div>
              </div>
          </div>
        ))}
        
      </div>
     
      <Footer />
    </div>
  );
};

export default FlatDeets;
