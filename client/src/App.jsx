import React from "react"
import Navbar from "./components/Navbar"
import FileViewer from "./components/FileViewer"

const App = () => {
	return (
		<div className="container mx-auto">
			<Navbar />
			<div className="bg-base-200 rounded-lg p-8 my-8">
				<FileViewer />
			</div>
		</div>
	)
}

export default App
