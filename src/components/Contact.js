import React, { Component } from 'react';
import SimpleMap from './SimpleMap';
import { Grid, Row, Col } from 'react-bootstrap';
import Form from './Form';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <SimpleMap />
                            <Form />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Contact;