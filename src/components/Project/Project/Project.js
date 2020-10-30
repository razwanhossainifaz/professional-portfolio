import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const Project = () => {
    return (
        <div>
            <div className="text-center">
                <h1 style = {{backgroundColor: '#5362EE' , color: 'white' , fontSize: '40px' , fontWeight: '800' , padding: '20px'}}>Projects</h1>
            </div>
            <ProjectDetail></ProjectDetail>
            <Contact></Contact>
        </div>
    );
};

export default Project;