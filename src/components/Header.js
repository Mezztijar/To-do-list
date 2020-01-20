import React, { Component } from 'react';

export default class Header extends Component{
	dateLabel = () => {
		let date = new Date(),
			months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
			days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
	};

	render(){
		return(
			<div className="header">
				<div className="date">{this.dateLabel()}</div>
			</div>
		)
	}
}