class LocalStorage {
	read() {
		return (localStorage['redux-store']) ?
			JSON.parse(localStorage['redux-store']) :
			[];
	}
	write(stage = []) {
		this.stage = stage;
		localStorage['redux-store'] = JSON.stringify(this.stage);
	}
}

const local_storage = new LocalStorage();

export default local_storage;