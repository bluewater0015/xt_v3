//router.js
import React,{ Component } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import createBrowserHistory from 'history';
import Login from '../pages/Login/login';
import Home from '../pages/Home/home';
import Trade from '../pages/trade_Account/trade_Account';
import Select from '../pages/date_Select/date_Select';
import Income from '../pages/income_Detail/income_Detail';
import Billing from '../pages/billing_Report/billing_Report';
import Report from '../pages/report_Detail/report_Detail';
import Inform from '../pages/news_Inform/news_Inform';
import News from '../pages/news_Detail/news_Detail';
import NoFound from '../pages/noFound/noFound'

const history = createBrowserHistory;
export default class RouterMap extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Router history={ history } >
				<div style={{ width: '100%',height: '100%'}}>
					<Route exact path="/" component={ Login } />
					<Route exact path="/home" component={ Home } />
					<Route exact path="/trade_Account" component={ Trade } />
					<Route exact path="/date_Select" component={ Select } />
					<Route exact path="/billing_Report" component={ Billing } />
					<Route exact path="/income_Detail" component={ Income } />
					<Route exact path="/report_Detail" component={ Report } />
					<Route exact path="/news_Infrom" component={ Inform } />
					<Route exact path="/news_Detail" component={ News } />
					<Route exact path="/noFound" component={ NoFound } />
				</div>
			</Router>
		)
	}
}
