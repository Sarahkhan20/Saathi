import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './PostFlat.css'

const PostFlat = () => {
       const [Flatdeets, setFlatdeets] = useState(['']);
       console.log(Flatdeets);
       
const handleRentChange = (event) => {
 setFlatdeets(parseInt(event.target.value));
  };
       return (
         <div>
                <Navbar/>
                <form action="
                ">
                        <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          onChange={(event) => setFlatdeets(event.target.value)}
          required
        />
                            </div>
                     <div>
      <label htmlFor="rent">Rent:</label>
      <input
        type="range"
        id="rent"
        min={100}
        max={100000}
        onChange={handleRentChange}
      />

    </div>

                </form>
         <Footer/>
         </div>
  )
}

export default PostFlat