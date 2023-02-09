import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const FileViewer = () => {
	const [files, setFiles] = useState([])

	const getAllFiles = async () => {
		try {
			const res = await axios.get("api/v1/files")
			console.log(res.data)
			setFiles(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getAllFiles()
	}, [])

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{files.map((f, i) => (
				<div key={i} className="card w-96 bg-base-100 shadow-xl">
					<figure className="px-10 pt-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6">
							<path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
							<path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
						</svg>
					</figure>
					<div className="card-body items-center text-center">
						<h2 className="card-title">{f.fileName}</h2>
						<p>{`File size: ${(Number(f.fileSize) / 1024).toFixed(
							2
						)} kB`}</p>
						<div className="card-actions">
							<Link
								to={`/file/${f.fileData}`}
								className="btn btn-accent">
								View PDF
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default FileViewer
