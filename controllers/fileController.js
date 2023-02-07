const fileModel = require("../models/fileModel")

const getAllFiles = async (req, res) => {
	try {
		const files = await fileModel.find({})
		res.status(200).json(files)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const uploadFile = async (req, res) => {

}

module.exports = {
	getAllFiles,
	uploadFile,
}
