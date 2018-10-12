const PersonModel = {
	getPerson(data) {
		let person = {};
		person.firstName = data.name.first;
		person.lastName = data.name.last;
		person.avatar = data.picture.thumbnail;
		person.pic = data.picture.large;
		person.age = data.dob.age;
		person.uuid = data.login.uuid;
 		return person;
	}
}

export default PersonModel;