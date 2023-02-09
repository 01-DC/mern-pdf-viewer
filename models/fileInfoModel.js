const mongoose = require("mongoose")

const fileInfoSchema = new mongoose.Schema({
	fileName: {
		type: String,
		required: true,
	},
	fileType: String,
	fileSize: String,
	fileData: {
		type: mongoose.Schema.ObjectId,
		ref: "fileData",
	},
})

const fileInfoModel = mongoose.model("fileInfo", fileInfoSchema)
module.exports = fileInfoModel
