import React from 'react';

const Contact = () => {
    return (
        <section className="contact py-5 mb-0 mt-5" style = {{backgroundColor: '#5362EE'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 style = {{fontWeight: 800 , color: 'white' }}>Let I handle your <br/> project , professionally.</h1>
                        <p style = {{color: 'white'}}>With well written codes , we build amazing apps for all platforms , mobile and web apps in general</p>
                    </div>
                    <div className="col-md-7 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-warning"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
                <p style = {{color: "white"}} className = 'text-center mt-3'>Copyright Razwan Hossain Ifaz - Portfolio 2020</p>
            </div>
       </section>
    );
};

export default Contact;