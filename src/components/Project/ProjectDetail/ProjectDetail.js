import React from 'react';
import featured from '../../../images/creative-agency.jpg';
import featured2 from '../../../images/travel-guru.jpg';
import featured3 from '../../../images/volunteer.jpg';

const ProjectDetail = () => {
    return (
        <div className="container-fluid">
            <section className="features-service pb-0 pb-md-5 my-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4 m-md-0">
                            <img className="img-fluid" src={featured} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center ml-3">
                            <h1>Creative Agency - A Full Stack Project</h1>
                            <ul className="text-secondary my-5">
                                <p>Developed a dynamic , secure website from scratch , launched visually appearing , user friendly site and also use technology for better user experience.</p>
                                <p>A customer can order and review for service and an admin can see orders for mark them done or pending.</p>
                                <p>Customer also feel dynamic experience with fully satisfaction</p>
                                <p>Without wasted valuable time of customer , he/she can go one page to another page without page loading</p>
                                <p>Used <strong>React</strong> , <strong>React router dom</strong> , <strong>Bootstrap</strong> , <strong>Context Api</strong> , <strong>Google authentication</strong> using <strong>firebase</strong> and also use <strong>Node.js</strong> for backend.</p>
                            </ul>
                            <button className = 'btn btn-primary pr-5 pl-5 btn-style'><a style = {{textDecoration : "none" , color: '#ffffff'}} href = "https://creative-agency-2ddc2.web.app/" target = "_blank">LIVE SITE</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-service pb-0 pb-md-5 my-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-7 align-self-center mr-3">
                            <h1>Travel Agency - A Mern Stack Project</h1>
                            <ul className="text-secondary my-5">
                                <p>A travel agency always need a website to promote their business . This website will be helpful to grow their business</p>
                                <p>Traveler can select one option of destination from 3 locations , login or sign up form .</p>
                                <p>Has a booking page where some information of destination</p>
                                <p>This website has a dynamic tracking section using Google Map.</p>
                                <p>Implemented my whole knowledge of <strong>React</strong> , <strong>React router</strong> , <strong>React context api</strong> , <strong>Firebase</strong> for deploy and the important thing is i use dynamic <strong>Google Map</strong> in this project</p>
                            </ul>
                            <button className = 'btn btn-primary pr-5 pl-5 btn-style'><a style = {{textDecoration : "none" , color: '#ffffff'}} href = "https://travel-guru-69cf0.web.app/" target = "_blank">LIVE SITE</a></button>
                        </div>
                        <div className="col-md-4 mb-4 m-md-0">
                            <img className="img-fluid" src={featured2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-service pb-0 pb-md-5 my-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4 m-md-0">
                            <img className="img-fluid" src={featured3} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center ml-3">
                            <h1>Volunteer Network - A BackEnd Project</h1>
                            <ul className="text-secondary my-5">
                                <p>I implemented my node.js , mongoDb knowledge in this project and also focus on my design.</p>
                                <p>People can choose volunteer work for a specific date and delete and an admin can add new volunteer work visible in events section.</p>
                                <p>Customer also feel dynamic experience with fully satisfaction</p>
                                <p>Without wasted valuable time of customer , he/she can go one page to another page without page loading</p>
                                <p>Also it is a mid level project for junior web developer , i using <strong>React</strong> , <strong>React router</strong> , <strong>Firebase for deploy</strong> and <strong>Heroku for data load</strong></p>
                            </ul>
                            <button className = 'btn btn-primary pr-5 pl-5 btn-style'><a style = {{textDecoration : "none" , color: '#ffffff'}} href = "https://creative-agency-2ddc2.web.app/" target = "_blank">LIVE SITE</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;