const mongoose = require("mongoose")

const fileDataSchema = new mongoose.Schema({
	fileName: {
		type: String,
		required: true,
	},
	fileBase64: {
		type: String,
	},
})

const fileDataModel = mongoose.model("fileData", fileDataSchema)
module.exports = fileDataModel
