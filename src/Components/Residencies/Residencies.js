import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import default Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/scrollbar'; // Scrollbar styles
import "./Residencies.css";
//import data from "../../Utils/slider.json"; // Import the slider data
import swiperConfig from '../../Utils/swiperConfig';
import { useState, useEffect } from 'react';

import { Navigation, Pagination, Scrollbar, Loop } from 'swiper/modules'; // Import necessary modules

const Residencies = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProperties = async () => {
          try {
            const response = await fetch('https://mocki.io/v1/4b1724f0-fcc9-47fe-a237-e256d491c71d');
            const data = await response.json();
            setProperties(data);
          } catch (error) {
            console.error('Error fetching properties:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProperties();
      }, []);

    if(loading)
        return <div>Loading...</div>

    return (
        <div className='r-wrapper'>
        <div className="paddings inner-width r-container">
            <div className="r-head flexColStart">
            <span>Best Choice</span>
            <span>Popular Residencies</span>
            </div>

            <Swiper {...swiperConfig} >
            {properties.map((property, index) => (
                <SwiperSlide key={index}>
                <div className="residency-slide">
                    <img src={property.image} alt={property.name} className="residency-image" />
                    <div className="residency-details">
                    <h3>{property.name}</h3>
                    <p>{property.detail}</p>
                    <span className="residency-price">{property.price}</span>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </div>
    );
};

export default Residencies;
