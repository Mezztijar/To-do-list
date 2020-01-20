import React, { Component } from 'react';

class EditInput extends Component {
	constructor(props) {
		super(props);
		this.state = {value: this.props.text};
	};

	handleChange = (e) => {
		this.setState({value: e.target.value});
	};

	onSubmit = e => {
		const { onEditTaskClicked, onOpenEditTaskClicked, taskId } = this.props;
		onEditTaskClicked(taskId, this.state.value);
		onOpenEditTaskClicked(taskId);
		return e.preventDefault();
	};
	
	render() {
		return (
			<form className="edit-form" onSubmit={this.onSubmit}>
				<input value={this.state.value} type="text" onChange={this.handleChange}/>
				<button disabled={!this.state.value}>Edit</button>
			</form>
		);
	}
}

export default EditInput;