import React, { Component } from 'react';
import ServiceData from '../serviceData.json';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactWOW from 'react-wow'
import './Services.css'

var FontAwesome = require('react-fontawesome');

class Services extends Component {
    render() {
      return (
        <section id="services"> 
            <Grid>
                <div className="skill">      
                    {ServiceData.map((serviceList, index) => {
                        return <Col xs={12} md={4}>
                                <ReactWOW animation='zoomIn'> 
                                 <div className="skill-list">
                                    <FontAwesome
                                        className='service-fonts'
                                        name={serviceList.icon}
                                        size='2x' />
                                    <h4> {serviceList.title} </h4>
                                    <p> {serviceList.content} </p>
                                 </div>
                                </ReactWOW>
                            </Col>                        
                    })}
                </div>
            </Grid>
        </section>
    );
}

}

export default Services;