const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDb = require("./config/connectDb")

dotenv.config()
connectDb()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/files", require("./routes/fileRoute"))

const PORT = 8080 || process.env.PORT

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
