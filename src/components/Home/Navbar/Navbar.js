import React from 'react';
import logo from '../../../images/logo-2.png'

const Navbar = () => {
    return (
        <section className = "main">
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <img style = {{width: "300px" , height: '80px'}} className = 'mr-auto img-fluid ml-5 mt-3' src={logo} alt=""/>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a style = {{color : "white"}}className="nav-link menu-style mr-5" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style = {{color : "white"}} className="nav-link menu-style mr-5" href="/project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a style = {{color : "white"}} className="nav-link menu-style mr-5" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a style = {{color : "white"}} className="nav-link menu-style mr-5" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;