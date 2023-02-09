import React from "react"
import axios from "axios"

import Navbar from "./components/Navbar"
import FileUploader from "./components/FileUploader"
import FileViewer from "./components/FileViewer"

axios.defaults.baseURL = "http://localhost:8080"

const App = () => {
	return (
		<div className="container mx-auto">
			<Navbar />
			<div className="bg-base-200 rounded-lg p-8 my-8">
				<FileUploader />
			</div>
			<div className="bg-base-200 rounded-lg p-8 my-8">
				<FileViewer />
			</div>
		</div>
	)
}

export default App
