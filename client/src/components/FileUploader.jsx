import React, { useRef, useState } from "react"
import axios from "axios"

const FileUploader = () => {
	const myRef = useRef()
	const [fileSelectError, setFileSelectError] = useState("")
	const [loading, setLoading] = useState(false)

	const handleFileSelect = (event) => {
		event.preventDefault()

		const file = myRef.current.files[0]
		const fileExtension = file.name.split(".").at(-1)
		// console.log(file)
		if (fileExtension !== "pdf") {
			myRef.current.value = ""
			setFileSelectError("File type should be pdf only")
			return
		}
		if (file.size > 6291456) {
			myRef.current.value = ""
			setFileSelectError("File size should be less than 6MB")
			return
		}
		setFileSelectError("")
	}

	const handleFileUpload = async () => {
		try {
			setLoading(true)
			const file = myRef.current.files[0]

			function getBase64(file) {
				const reader = new FileReader()
				return new Promise((resolve) => {
					reader.onload = (ev) => {
						resolve(ev.target.result)
					}
					reader.readAsDataURL(file)
				})
			}

			const base64 = await getBase64(file)

			const res = await axios.post("/api/v1/files/upload", {
				fileName: file.name,
				fileType: file.type,
				fileSize: file.size.toString(),
				fileData: base64,
			})

			// console.log(res)
			myRef.current.value = ""
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<input
				ref={myRef}
				type="file"
				className="file-input file-input-bordered w-full max-w-xs"
				accept="application/pdf"
				onChange={(event) => handleFileSelect(event)}
			/>
			{loading ? (
				<div
					className="radial-progress text-primary animate-spin"
					style={{
						"--value": 50,
						"--size": "3rem",
						"--thickness": "8px",
					}}></div>
			) : (
				<button
					className="btn btn-primary"
					onClick={handleFileUpload}
					disabled={fileSelectError.length > 0}>
					Upload
				</button>
			)}

			{fileSelectError && (
				<div className="text-md text-red-500">{fileSelectError}</div>
			)}
		</div>
	)
}

export default FileUploader
