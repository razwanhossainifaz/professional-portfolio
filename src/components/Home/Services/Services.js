import React from 'react';
import frontend from '../../../images/frontend.jpg';
import backend from '../../../images/backend.png';
import design from '../../../images/design.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'FrontEnd Development',
        img: frontend,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse facere eveniet perspiciatis, inventore laudantium a sed eligendi natus corporis quos.'
    },
    {
        name: 'BackEnd Development',
        img: backend,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse facere eveniet perspiciatis, inventore laudantium a sed eligendi natus corporis quos.'
    },
    {
        name: 'Graphic Design',
        img: design,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse facere eveniet perspiciatis, inventore laudantium a sed eligendi natus corporis quos.'
    },
]

const Services = () => {
    return (
        <section className = 'services-container mt-5'>
            <div className="text-center">
                <h5 style = {{color: '#5FC7C7' , fontSize: '20px' , fontWeight: '800'}}>MY SERVICES</h5>
                <h1 style = {{color: '#203047' , fontSize: '40px' , fontWeight: '800'}}>Services I Provide</h1>
            </div>
            <div className = "d-flex justify-content-center">
                <div className = 'w-75 row mt-5'>
                    {
                        serviceData.map(service => <ServiceDetail service = {service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;