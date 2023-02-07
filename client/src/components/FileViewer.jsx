import React, { useRef, useState } from "react"

const FileViewer = () => {
	const myRef = useRef()
	const [fileSelectError, setFileSelectError] = useState("")

	const handleFileSelect = (event) => {
		event.preventDefault()

		const file = myRef.current.files[0]
		const fileExtension = file.name.split(".").at(-1)
		console.log(file)
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

	const handleFileUpload = () => {}

	return (
		<div>
			<input
				ref={myRef}
				type="file"
				className="file-input file-input-bordered w-full max-w-xs"
				accept="application/pdf"
				onChange={(event) => handleFileSelect(event)}
			/>
			<button className="btn" onClick={handleFileUpload}>
				Upload
			</button>

			{fileSelectError && (
				<div className="text-md text-red-500">{fileSelectError}</div>
			)}
		</div>
	)
}

export default FileViewer
