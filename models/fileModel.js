const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
	userid: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: [true, "amount is required"],
	},
	category: {
		type: String,
		required: [true, "category is required"],
	},
	description: {
		type: String,
		required: [true, "description is required"],
	},
	split: [
		{
			email: String,
			name: String,
			paid: Boolean,
		},
	],
})

const fileModel = mongoose.model("files", fileSchema)
module.exports = fileModel
