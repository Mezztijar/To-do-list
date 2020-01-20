import { constants as c } from '../constant';
import local_storage from '../localStorage';

const initialState = local_storage.read();
initialState.map(item => {
	return item.isOpenEditForm = false;
});

const reducer = (state = initialState, { type, id , text, isCompleted, isEdit, isOpenEditForm }) => {
	switch(type) {

		case c.ADD_ITEM:
			return [
				...state,
				{
					id,
					text,
					isCompleted,
					isOpenEditForm
				}
			];

		case c.CHECK_TASK:
			return [...state].filter(task => {
				if(task.id === id) task.isCompleted = !task.isCompleted;
				return task;
			});

		case c.DELETE_TASK:
			return [...state].filter(task => task.id !== id);

		case c.EDIT_TASK:
			return [...state].filter(task => {
				if(task.id === id) {
					task.isEdit = !task.isEdit;
					task.text = text;
				}
				return task;
			});
		case c.OPEN_EDIT_TASK_FORM:
			return [...state].filter(task => {
				if(task.id === id) {
					task.isOpenEditForm = !task.isOpenEditForm;
				}
				return task;
			});

		default:
			return state;
	}
};

export default reducer;