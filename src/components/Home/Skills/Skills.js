import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section style = {{marginTop : '100px' , marginBottom : "100px"}} className = 'row d-flex align-items-center'>
            <div className="col-md-5 offset-md-1">
                <h1 style = {{color: '#000000' , fontSize: '50px' , fontWeight: '800'}}>About <font color = "#09F4C5">Me</font></h1>
                <p style = {{color: '#000000'}}>I'm Razwan Hossain Ifaz . I designed and developed this site so you can get to know me on a personal level . My career as a junior or react developer , my portfolio , my personal projects , my skills , my favourite quotes represent myself and also impress you . So please sit back and enjoy !<br/><br/>On the other hand , I denounce with righteous indignation and dislike men who are so beguled and demoralized by the charms of pleasure of the moment , so blinded by desire , that they cannot for see the pain and trouble that.</p>
                <button style ={{backgroundColor: '#FFCD1A' , border: 'none' , fontWeight: '800'}} className = 'btn btn-primary pr-5 pl-5'><a style = {{textDecoration : "none" , color: '#000000'}} href = "https://drive.google.com/file/d/1tTgnJOqapxgjETIjJMTAT3s0RixQS0tl/view?usp=sharing" target = "_blank">DOWNLOAD CV</a></button>
                <button style ={{backgroundColor : 'white' , border: '2px solid #7BD5D3' , fontWeight: '800'}} className = 'btn btn-primary pr-5 pl-5 ml-3'><a style = {{textDecoration : "none" , color: '#000000'}} href = "https://www.linkedin.com/in/razwan-hossain-ifaz" target = "_blank">HIRE ME</a></button>
            </div>
            <div className="col-md-6">
                <div class="skill-bars">
                    <div class="bar">
                            <div class="info">
                                <span>REACT , ES6</span>
                            </div>
                            <div class="progress-line react">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>REACT BOOTSTRAP , BOOTSTRAP</span>
                            </div>
                            <div class="progress-line bootstrap">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>MATERIAL UI</span>
                            </div>
                            <div class="progress-line materialui">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>JAVASCRIPT , NODE.JS</span>
                            </div>
                            <div class="progress-line node">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>MONGODB</span>
                            </div>
                            <div class="progress-line mongodb">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>WORDPRESS THEME CUSTOMIZATION</span>
                            </div>
                            <div class="progress-line wordpress">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>REACT CONTEXT API , REDUX</span>
                            </div>
                            <div class="progress-line redux">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>FIREBASE , HEROKU , NETLIFY</span>
                            </div>
                            <div class="progress-line firbase">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>HTML5 , CSS3</span>
                            </div>
                            <div class="progress-line html">
                                <span></span>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="info">
                                <span>PHOTOSHOP 2020 , ILLUSTRATOR 2020</span>
                            </div>
                            <div class="progress-line photoshop">
                                <span></span>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;