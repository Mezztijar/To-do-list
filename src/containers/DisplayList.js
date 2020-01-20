import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { checkTask, deleteTask, openEditTaskForm, editTask } from '../actions';

import TaskItem from '../components/TaskItem';

const DisplayList = ({ state, checkTask, deleteTask, openEditTaskForm, editTask }) => (
	<div className="display-tasks">
		{(state.length) ?
			state.map((item, index) => {
				return (
					<TaskItem
						state={item}
						key={index}
						checkTask={checkTask}
						deleteTask={deleteTask}
						openEditTaskForm={openEditTaskForm}
						editTask={editTask}
					/>
				)
			}) :
			<span>Empty</span>
		}
	</div>
);

const mapStateToProps = state => {
	return {state};
};

export default connect(mapStateToProps, { checkTask, deleteTask, openEditTaskForm, editTask })(DisplayList);