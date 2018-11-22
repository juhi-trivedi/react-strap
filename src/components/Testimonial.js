import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { Grid, Row, Col } from 'react-bootstrap';
import './Testimonial.css';

class Testimonial extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			items: [
				<div key={1} className="item"><p>"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Module not found: Can't resolve labore et dolore magna aliqua."</p><h5>- Adam Lobster</h5></div>,
				<div key={2} className="item"><p>"Module not found: Can't resolve Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Module not found: Can't resolve mod tempor incid. "</p><h5>- John Khan</h5></div>,
				<div key={3} className="item"><p>"Ipsum dolor sit amet,consectetur adipiscing elit, Module not found: It seems Can't resolve sed do eiusmod tempor incididunt ut labore mod tempor."</p><h5>- Ava Williams</h5></div>,
			],

			itemNo: 1,
			loop: true,
			nav: false,
			rewind: false,
			autoplay: true
		};
	}

	render() {
		const options = {
			items: this.state.itemNo,
			loop: this.state.loop,
			nav: this.state.nav,
			rewind: this.state.rewind,
			autoplay: this.state.autoplay
		};
        
      return (
        <div id="testimonial">
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <OwlCarousel
                            ref="car"
                            options={options}
                        >
                            {this.state.items}
                        </OwlCarousel>

                    </Col>
                </Row>
            </Grid>    
        </div>
    );
}

}

export default Testimonial;