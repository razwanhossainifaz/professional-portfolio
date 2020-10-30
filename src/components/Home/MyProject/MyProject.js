import React from 'react';
import carousel1 from '../../../images/carousel-1.jpg';
import carousel2 from '../../../images/carousel-2.jpg';
import carousel3 from '../../../images/carousel-3.jpg';
import './MyProject.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MyProject = () => {
    return (
        <section className="testimonials mt-5 mb-5">
            <h1 className="text-white my-5">Here are some of <span style={{ color: '#7AB259' }}>my projects</span></h1>
            <Carousel>

                <div className="carousel-inner">
                    <img src={carousel1} />
                    <p className="legend">Creative Agency</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel2} />
                    <p className="legend">Travel Agency</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel3} />
                    <p className="legend">Volunteer Network</p>
                </div>

            </Carousel>
        </section>
    );
};

export default MyProject;