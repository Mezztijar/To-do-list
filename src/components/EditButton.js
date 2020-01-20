import React from 'react';

const EditButton = ({ onOpenEditTaskClicked }) => (
	<div className="edit-wrapper">
		<img 
		  className="edit-btn"
		  onClick={onOpenEditTaskClicked}
		  src="../images/edit.svg" 
		  alt="edit"/>
	</div>
);

export default EditButton;