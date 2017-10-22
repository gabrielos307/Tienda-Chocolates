import React, { Component } from 'react';
import {Button, Icon, Navbar, NavItem, Footer} from 'react-materialize'
import './Uno.css';

class Footers extends Component {
	render() {
		return (
			<Footer copyrights="" class="foot" fixed
			moreLinks={
				<a class="github-button" aria-label="Follow @gabrielos307 on GitHub" href="https://github.com/gabrielos307">Follow @gabrielos307</a>

			}
			links={
				<ul>
				
				</ul>
			}
			className='example'
			>
			<h5 className="white-text">Tenemos tus chocolates favoritos</h5>
			<p className="grey-text text-lighten-4">Compra en nuestra tienda en linea!.</p>
			</Footer>
			);
		}
	}

	export default Footers;