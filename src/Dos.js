
import React, { Component } from 'react';
import { Button, Card, Row, Col,Carousel } from 'react-materialize'

class Dos extends Component {
	render() {
		return (
			
			<Carousel options={{ fullWidth: true }} images={[
				'http://jeffreygstern.com/wp-content/uploads/2011/06/Republica-del-Cacao-Products.jpg',
				'https://k39.kn3.net/A531A749C.jpg',
				'http://www.travelandescape.ca/wp-content/uploads/2012/10/fancy-chocolate-truffles.jpg'
				]} />
				);
			}
		}

		export default Dos;