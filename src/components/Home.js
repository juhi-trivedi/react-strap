import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CountTo from 'react-count-to';
import CountUp from 'react-countup';
import './Home.css'
import Services from './Services';
import Testimonial from './Testimonial';
import About from './About';
import ReactWOW from 'react-wow'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listItems = numbers.map((numbers) =>
    <li key={Math.random()}>{numbers}</li>
);
class Home extends Component {

    render() {
        return (
            <div className="homepage"> 
                <div className="banner">
                    <Grid fluid>
                        <ul className="bg-bubbles">
                            {listItems}
                        </ul>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>
                                <div className="effect-w3">
                                    <ReactWOW animation='fadeIn' duration={1}>
                                        <img src="assets/images/img.jpg" alt="image" className="img-fluid image1" />
                                    </ReactWOW>
                                    <ReactWOW animation='fadeIn' duration={2}>
                                        <img src="assets/images/img.jpg" alt="image" className="img-fluid image2" />
                                    </ReactWOW>
                                    <ReactWOW animation='fadeIn' duration={3}>
                                        <img src="assets/images/img.jpg" alt="image" className="img-fluid image3" />
                                    </ReactWOW>
                                    <ReactWOW animation='fadeIn' duration={4}>
                                        <img src="assets/images/img.jpg" alt="image" className="img-fluid image4" />
                                    </ReactWOW>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="style-banner">
                                <ReactWOW animation='fadeInRight'>
                                <h1>The Most Prestigious business Consulting Firm</h1>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                                <Link to="/About" className="btn button-style scroll">Read More</Link>
                                </ReactWOW>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="banner-bottom">
                    <Grid>
                        <Row>
                            <Col xs={12} md={4}>
                                <ReactWOW animation='bounceIn'>
                                    <img src="assets/images/b2.png" alt="" className="img-fluid" />
                                </ReactWOW>
                                <div className="text-side">
                                    <h4 className="mb-3">Easy To Customize</h4>
                                    <p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <ReactWOW animation='bounceIn'>
                                    <img src="assets/images/b1.png" alt="" className="img-fluid" />
                                </ReactWOW>
                                <div className="text-side">
                                    <h4 className="mb-3">Awesome Designs</h4>
                                    <p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <ReactWOW animation='bounceIn'>
                                    <img src="assets/images/b3.png" alt="" className="img-fluid" />
                                </ReactWOW>
                                <div className="text-side">
                                    <h4 className="mb-3">24/7 Support</h4>
                                    <p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <About />
                <div className="counter-section">
                    <Grid>
                        <Row>
                            <Col xs={12} md={3}>
                             <CountUp start={0} end={1680} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                                <label>Popularity</label>
                            </Col>
                            <Col xs={12} md={3}>
                             <CountUp start={0} end={1200} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>                                
                                <label>Happy Customers</label>
                            </Col>
                            <Col xs={12} md={3}>
                             <CountUp start={0} end={400} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>                                 
                                <label>Rates</label>
                            </Col>
                            <Col xs={12} md={3}>
                             <CountUp start={0} end={800} delay={0}>
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>                                 
                                <label>Awards Won</label>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Services />
                <Testimonial />
            </div>
        );
    }
}

export default Home;