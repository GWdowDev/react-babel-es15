import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import keenImage from '../assets/keen.png'; // Importing image -> ADDED IN THIS STEP

export default class Hello extends Component {
	render() {
		return (
			<div class="app__style">
				<p>Hello from React!</p>
				<img src={ keenImage } alt='Commander Keen' />
			</div>
		);
	}
}

render(<Hello />, document.getElementById('app'));