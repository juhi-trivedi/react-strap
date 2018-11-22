import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';


var FontAwesome = require('react-fontawesome');

class Footer extends Component {
	render() {        
      return (
        <div id="footer">
            <Grid>
                <Row>
                    <Col xs={12} md={12}>     
						<div className="social-footer text-center">
							<ul className="list-unstyled">
								<li>
									<Link to="#">
										<i className="fa fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fa fa-twitter"></i>
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fa fa-dribbble"></i>
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fa fa-vk"></i>
									</Link>
								</li>
							</ul>
						</div>                  
						<p className="copyright text-center">© 2018 Field. All Rights Reserved | Design by <Link to="#">J.T</Link> </p>
                    </Col>
                </Row>
            </Grid>    
        </div>
    );
}

}

export default Footer;