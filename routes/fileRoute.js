const express = require("express")

const { getAllFiles, uploadFile } = require("../controllers/fileController")

const router = express.Router()

router.get("/", getAllFiles)

router.post("/upload", uploadFile)

module.exports = router
