import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
	id: {
		type: Number,
		unique : true
	},
	userId: Number,
	title: String,
	body: String,
}, {versionKey: false});

export default mongoose.model('Post', postSchema);