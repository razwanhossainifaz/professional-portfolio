import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import Header from '../Header/Header';
import MyProject from '../MyProject/MyProject';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className = "mb-0">
            <Header></Header>
            <Skills></Skills>
            <MyProject></MyProject>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;