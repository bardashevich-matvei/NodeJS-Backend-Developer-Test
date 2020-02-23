import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: {
		type: Number,
		unique: true
	},
	name: String,
	username: String,
	email: String,
	address: {
		street: String,
		suite: String,
		city: String,
		zipcode: String,
		geo: {
			lat: String,
			Userlng: String
		}
	},
	phone: String,
	website: String,
	company: {
		name: String,
		catchPhrase: String,
		bs: String
	}
}, { versionKey: false });

export default mongoose.model('User', userSchema);