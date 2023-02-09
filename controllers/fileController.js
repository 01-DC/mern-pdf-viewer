const fileDataModel = require("../models/fileDataModel")
const fileInfoModel = require("../models/fileInfoModel")

const getAllFiles = async (req, res) => {
	try {
		const files = await fileInfoModel.find({})
		res.status(200).json(files)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const getFileById = async (req, res) => {
	try {
		const fileData = await fileDataModel.findById(req.params.id)
		res.status(200).json(fileData)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const uploadFile = async (req, res) => {
	try {
		const { fileName, fileType, fileSize, fileData } = req.body

		const fdata = await fileDataModel.create({
			fileName: fileName,
			fileBase64: fileData,
		})

		const finfo = await fileInfoModel.create({
			fileName: fileName,
			fileType: fileType,
			fileSize: fileSize,
			fileData: fdata._id,
		})
		// console.log(fdata)
		res.status(200).json(finfo)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

module.exports = {
	getAllFiles,
	uploadFile,
	getFileById
}
