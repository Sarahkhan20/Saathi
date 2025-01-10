import "./PostFlat.css";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import HomeIcon from '@mui/icons-material/Home';
import { LocalLaundryService, LocalParking, NetworkWifi } from "@mui/icons-material";
import {  databases,account, storage } from "../../services/appwriteConfig";
import { ID } from "appwrite";


const PostFlat = () => {
   const [propType, setPropType] = useState("");
   const [roomType, setRoomType] = useState("");
   const [gender, setGender] = useState("");
   const [occupation, setOccupation] = useState("");
   const [bedsAvail, setBedsAvail] = useState("");
   const [rent, setRent] = useState("");
   const [area, setArea] = useState("");
   const [minstay, setMinstay] = useState("");
   const [ageRange, setAgeRange] = useState({ min: 15, max: 80 });
   const [city, setCity] = useState("");
   const [address, setAddress] = useState("");
       const [phonenum, setPhonenum] = useState("");
       const amenitiesData = [
              { name: 'WiFi', icon: <NetworkWifi /> } ,
  { name: 'Laundry', icon: <LocalLaundryService/> },
  { name: 'Parking', icon: <LocalParking/> },
  // Add more amenities with their respective icons
];

const Checkbox = ({ amenity, isChecked, onToggle }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggle(amenity)}
                />
                

      <span className="checkbox-icon">{amenity.icon}</span>
      <span>{amenity.name}</span>
    </label>
  );
       };
       const AmenitySelector = () => {
              const [selectedAmenities, setSelectedAmenities] = useState([]);

              const toggleAmenity = (amenity) => {
                     const isAmenitySelected = selectedAmenities.includes(amenity);

                     if (isAmenitySelected) {
                            setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
                     } else {
                            setSelectedAmenities([...selectedAmenities, amenity]);
                     }
              };
              return (
                     <div>
                            <h4>Select Amenities:  <br /> <br /> <br /> </h4>
                            {amenitiesData.map((amenity) => (
                                   <Checkbox
                                          key={amenity.name}
                                          amenity={amenity}
                                          isChecked={selectedAmenities.includes(amenity)}
                                          onToggle={toggleAmenity}
                                   />
                            ))}
                     </div>
              )
       }

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      navigate('./findflat');
          const promise = databases.createDocument("647beff6d2bb278e1166", "6480bea54aea6eb0543b", ID.unique(), {
             propType, roomType, gender, occupation,bedsAvail, rent, area, minstay, city, address, phonenum 
          })

          const storing = storage.createFile(
                 "6480d843935646ed03ca", ID.unique(),document.getElementById('flatPhoto').files[0]
          )
          promise.then(
      function (response) {
        console.log(response);
        
      },
      function (error) {
        console.log(error);
      })

   }

   return (
      <div className="postflat-container">
         <form className="postflat-form" onSubmit={handleSubmit}>
            <div className="flat-group">
               <p className="font-weight-bold">Property type</p>
                               <fieldset>
                                    
                  <input name="propertyType" type="radio" id="flat" value="flat"
                     className="input-hide" onChange={(e) => setPropType(e.target.value)}
                  />
                  <label htmlFor="flat" className="label-pop">Flat</label>

                  <input name="propertyType" type="radio" id="house" value="house"
                     className="input-hide" onChange={(e) => setPropType(e.target.value)}
                  />
                  <label htmlFor="house" className="label-pop">House</label>

                  <input name="propertyType" type="radio" id="dorm" value="dorm"
                     className="input-hide" onChange={(e) => setPropType(e.target.value)}
                  />
                  <label htmlFor="dorm" className="label-pop">Dorm</label>
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Room type</p>
               <fieldset>
                  <input name="roomType" type="radio" id="private_room" value="private_room"
                     className="input-hide" onChange={(e) => setRoomType(e.target.value)}
                  />
                  <label htmlFor="private_room" className="label-pop">Private Room</label>

                  <input name="roomType" type="radio" id="shared_room" value="shared_room"
                     className="input-hide" onChange={(e) => setRoomType(e.target.value)}
                  />
                  <label htmlFor="shared_room" className="label-pop">Shared Room</label>
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Prefered Gender</p>
               <fieldset>
                  <input name="preferGender" type="radio" id="male" value="male"
                     className="input-hide" onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male" className="label-pop">Male</label>

                  <input name="preferGender" type="radio" id="female" value="female"
                     className="input-hide" onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female" className="label-pop">Female</label>

                  <input name="preferGender" type="radio" id="anygender" value="anygender"
                     className="input-hide" onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="anygender" className="label-pop">Doesn't Matter</label>
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Prefered Occupation</p>
               <fieldset>
                  <input name="preferOccupation" type="radio" id="student" value="student"
                     className="input-hide" onChange={(e) => setOccupation(e.target.value)}
                  />
                  <label htmlFor="student" className="label-pop">Student</label>

                  <input name="preferOccupation" type="radio" id="professional" value="professional"
                     className="input-hide" onChange={(e) => setOccupation(e.target.value)}
                  />
                  <label htmlFor="professional" className="label-pop">Professional</label>

                  <input name="preferOccupation" type="radio" id="anyoccupation" value="anyoccupation"
                     className="input-hide" onChange={(e) => setOccupation(e.target.value)}
                  />
                  <label htmlFor="anyoccupation" className="label-pop">Doesn't Matter</label>
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Total no of Bedrooms</p>
               <fieldset>
                  <input name="availableBeds" type="radio" id="1availableBeds" value="1"
                     className="input-hide" onChange={(e) => setBedsAvail(e.target.value)}
                  />
                  <label htmlFor="1availableBeds" className="label-pop">1</label>

                  <input name="availableBeds" type="radio" id="2availableBeds" value="2"
                     className="input-hide" onChange={(e) => setBedsAvail(e.target.value)}
                  />
                  <label htmlFor="2availableBeds" className="label-pop">2</label>

                  <input name="availableBeds" type="radio" id="3availableBeds" value="3"
                     className="input-hide" onChange={(e) => setBedsAvail(e.target.value)}
                  />
                  <label htmlFor="3availableBeds" className="label-pop">3</label>

                  <input name="availableBeds" type="radio" id="3+availableBeds" value="3+"
                     className="input-hide" onChange={(e) => setBedsAvail(e.target.value)}
                  />
                  <label htmlFor="3+availableBeds" className="label-pop">3+</label>
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Rent</p>
               <fieldset>
                  <input
                     name="rent"
                     type="number"
                     id="rent"
                     value={rent}
                     onChange={(e) => setRent(e.target.value)}
                     placeholder='Enter rent in rupees'
                     className="input-ok"
                  />
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Room Area(sq.ft)</p>
               <fieldset>
                  <input
                     name="area"
                     type="number"
                     id="area"
                     value={area}
                     onChange={(e) => setArea(e.target.value)}
                     placeholder='Enter area in sqft'
                     className="input-ok"
                  />
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Minimum Stay(in Months)</p>
               <fieldset>
                  <input
                     name="minstay"
                     type="number"
                     id="minstay"
                     value={minstay}
                     onChange={(e) => setMinstay(e.target.value)}
                     placeholder='Enter minimum stay in months'
                     className="input-ok"
                  />
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Preferred Age</p>
               <fieldset>
                  <InputRange
                     minValue={15}
                     maxValue={80}
                     value={ageRange}
                     onChange={(value) => setAgeRange(value)}
                  />
               </fieldset>
               <p className="age-p">Age selected is {ageRange.min} - {ageRange.max}</p>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">City</p>
               <fieldset>
                  <input
                     name="city"
                     type="text"
                     id="city"
                     value={city}
                     onChange={(e) => setCity(e.target.value)}
                     placeholder='Enter name of city'
                     className="input-ok"
                  />
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Address</p>
               <fieldset>
                  <textarea
                     name="address"
                     id="address"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     placeholder='Enter address'
                     className="input-ok"
                  ></textarea>
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Phone Number</p>
               <fieldset>
                  <input
                     name="phonenum"
                     type="number"
                     id="phonenum"
                     value={phonenum}
                     onChange={(e) => setPhonenum(e.target.value)}
                     placeholder='Enter Phone Number'
                     className="input-ok"
                  />
               </fieldset>
            </div>

            <div className="flat-group">
               <p className="font-weight-bold">Property Images</p>
               <fieldset>
                  <input
                     className="input-ok"
                     type="file"
                     multiple
                     name="flatPhoto"
                     id="flatPhoto"
                  />
               </fieldset>
                        </div>
                 <AmenitySelector/>      
                        

            <div className="flat-group">
               <p className="font-weight-bold"></p>
               <fieldset>
                  <button type="submit" className="flat-but" onClick={handleSubmit}>Submit Flat</button>
               </fieldset>
            </div>
         </form>
      </div>
   );
       };

export default PostFlat;