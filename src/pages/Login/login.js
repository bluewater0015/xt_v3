//login.js
import React,{ Component } from 'react';
import HomeButton from '../../components/HomeButton/homebutton';
//import Header from "../../components/Header/header";
import "./login.css";

export default class Login extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="login">
				登录页面
			</div>
		)
	}
}