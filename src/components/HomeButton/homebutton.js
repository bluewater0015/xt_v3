//homebutton.js
import React,{ Component } from 'react';

export default class HomeButton extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="homebutton">
				<input type="text" placeholder="请输入手机号" />
				<input type="text" placeholder="请输入密码" />
			</div>
		)
	}
}