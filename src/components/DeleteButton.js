import React from 'react';

const DeleteButton = ({ onDeleteTaskClicked }) => (
	<img
	  src="../images/trash.svg" 
	  alt="success"
	  className="delete-btn"
	  onClick={onDeleteTaskClicked}/>
);

export default DeleteButton;