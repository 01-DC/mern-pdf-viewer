const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDb = require("./config/connectDb")

dotenv.config()
connectDb()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/users", require("./routes/userRoute"))
app.use("/api/v1/expenses", require("./routes/expenseRoute"))
app.use("/api/v1/settings", require("./routes/settingRoute"))

const PORT = 8080 || process.env.PORT

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
