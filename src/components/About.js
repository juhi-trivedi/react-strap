import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactWOW from 'react-wow'
import './About.css'

class About extends Component {
    render() {
        return (
            <div id="about"> 
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6}>
                            <ReactWOW animation='slideInLeft'>
                                <img src="assets/images/about.png" alt="image" />
                            </ReactWOW>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="aboutContent">
                                <h3>About Us</h3>
                                <p> Su spendisse id ante molNulla auctor elit augue, eu volutpat risus tincidunt Su spendisse id ante mol ullamco endisse id ante molrper. le ist syd ashaf disse id ante molestie libero.</p>
                                <h4>Sed do eiusmod tempor ut labore</h4>
                                <p>Nulla auctor elit augue, eu volutpat risus tincidunt ullamcorper. Su spendisse id ante molestie libero placerat condimentum. Maecenas in conse quatlibero. Maecenas nisi sapien, olutpat risus tincidunt ullamcorper..</p>
                            </div>
                        </Col>
                    </Row>  
                </Grid>
            </div>
        );
    }
}

export default About;