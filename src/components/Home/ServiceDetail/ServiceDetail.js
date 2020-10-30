import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className = 'col-md-4 text-center'>
            <img className = 'mt-5' style = {{width: '400px' , height: '300px'}} src={service.img} alt=""/>
            <h2 style = {{color: '#203047' , fontSize: '30px' , fontWeight: '800'}} className = 'mt-4 mb-4'>{service.name}</h2>
            <p className = 'text-secondary'>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;