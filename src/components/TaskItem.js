import React from 'react';

import TextTask from './TextTask';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import EditInput from './EditInput';

const TaskItem = ({ state, checkTask, deleteTask, openEditTaskForm, editTask }) => {
	const  { id, text, isCompleted, isOpenEditForm } = state;

	return (
	<div 
	  className={"task-item" + (isCompleted ? " check" : "")} 
		onClick={(e) => (e.target.classList.contains("task-item") ||
										 e.target.classList.contains("text")) ? checkTask(id) : null}>
		{!isOpenEditForm ?
		<div className="text-wrapper">
			<TextTask
		   	text={text}/>
			<EditButton
			  onOpenEditTaskClicked={() => openEditTaskForm(id)}/> 
		</div> :
			<EditInput
			  text={text}
			  taskId={id}
			  onOpenEditTaskClicked={openEditTaskForm}
			  onEditTaskClicked={editTask}/>
		}
			<DeleteButton
				onDeleteTaskClicked={() => deleteTask(id)}/>
		{(isCompleted) ?
			<img className="check-icon" src="../images/success.svg" alt="success"/>
			: null	
		}
	</div>
)};

export default TaskItem;