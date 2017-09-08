//Main.js
import React,{ Component } from 'react';
import RouterMap from '../router/router';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import '../css/com.css';

export default class Main extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="main">
				<RouterMap />
			</div>
		)
	}
}