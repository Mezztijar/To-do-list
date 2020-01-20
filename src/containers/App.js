import React, { Component } from 'react';
import DisplayList from './DisplayList';
import CreateNewTaskForm from './CreateNewTaskForm';
import Header from '../components/Header';

export default class App extends Component {
	render() {
		return (
			<div className="app-wrapper">
				<Header/>
				<DisplayList/>
				<CreateNewTaskForm/>
			</div>
		)
	}
}
