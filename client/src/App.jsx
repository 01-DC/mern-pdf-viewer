import React from "react"
import axios from "axios"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import FileUploader from "./components/FileUploader"
import FileViewer from "./components/FileViewer"
import PDFViewer from './components/PDFViewer'

axios.defaults.baseURL = "http://localhost:8080"

const App = () => {
	return (
		<div className="container mx-auto">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="bg-base-200 rounded-lg p-8 my-8">
								<FileUploader />
							</div>
							<div className="bg-base-200 rounded-lg p-8 my-8">
								<FileViewer />
							</div>
						</>
					}
				/>
				<Route path="/file/:id" element={<PDFViewer />} />
			</Routes>
		</div>
	)
}

export default App
