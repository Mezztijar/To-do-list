import React, { Component } from 'react';
import { addTask } from '../actions';
import connect from 'react-redux/es/connect/connect';

class CreateNewTaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ""};
	};

	generateId = () => {
		return `id${(new Date()).getTime()}`;
	};

	handleChange = (e) => {
		this.setState({text: e.target.value});
	};

	collectionData = () => {
		const { addTask } = this.props, 
			  { text } = this.state;

		return (
			(text) ?
				(addTask(this.generateId(), text),
				this.setState({text: ""})) : false
		);
	};

	submit = e => {
		e.preventDefault();
		return this.collectionData();
	};

	render() {
		return (
			<form className="create-new-task-form" onSubmit={this.submit}>
				<input value={this.state.text} type="text" onChange={this.handleChange}/>
				<button disabled={!this.state.text}>Click</button>
			</form>
		)
	}
}

export default connect(null, { addTask })(CreateNewTaskForm);