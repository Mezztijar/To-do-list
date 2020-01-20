import { constants as c } from '../constant';

export const addTask = (id, text, isCompleted = false, isEdit = false, isOpenEditForm = false) => ({
	type: c.ADD_ITEM,
	id,
	text,
	isCompleted,
	isEdit,
	isOpenEditForm
});

export const checkTask = id => ({
	type: c.CHECK_TASK,
	id
});

export const deleteTask = id => ({
	type: c.DELETE_TASK,
	id
});

export const editTask = (id, text) => ({
	type: c.EDIT_TASK,
	id,
	text
});

export const openEditTaskForm = (id) => ({
	type: c.OPEN_EDIT_TASK_FORM,
	id
});
