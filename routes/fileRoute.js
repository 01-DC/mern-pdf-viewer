const express = require("express")

const {
	getAllFiles,
	uploadFile,
	getFileById,
} = require("../controllers/fileController")

const router = express.Router()

router.get("/", getAllFiles)

router.get("/file/:id", getFileById)

router.post("/upload", uploadFile)

module.exports = router
