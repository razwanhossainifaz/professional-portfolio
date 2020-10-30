import React from 'react';
import profilePic from '../../../images/top-image.png';
import Tilt from 'react-tilt';

const HeaderMain = () => {
    return (
        <main style = {{height : '900px'}} className = 'row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style = {{color: 'white' , fontSize: '50px' , fontWeight: '800'}}>Let's Grow Your Dream With<br/> Razwan Hossain Ifaz <br/>Junior / <font color = "#09F4C5">React</font> Developer</h1>
                <p style = {{color: 'white'}}>To take a challenging role as a React / Front End Developer in a technical company where i could utilize my skills in web design and front-end web development, and use these skills in providing quality service to the  company.  </p>
                <button style ={{backgroundColor: '#FFCD1A' , border: 'none' , fontWeight: '800'}} className = 'btn btn-primary pr-5 pl-5 btn-style'><a style = {{textDecoration : "none" , color: '#000000'}} href = "https://drive.google.com/file/d/1tTgnJOqapxgjETIjJMTAT3s0RixQS0tl/view?usp=sharing" target = "_blank">CHECK MY RESUME</a></button>
            </div>
            <Tilt className="Tilt col-md-6 mb-0" options={{ max : 20}} style = {{width: '800px'}}>
                <div>
                    <img style = {{ height: '800px' }} className = 'img-fluid' src={profilePic} alt=""/>
                </div>
            </Tilt>
        </main>
    );
};

export default HeaderMain;