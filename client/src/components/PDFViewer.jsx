import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Document, Page } from "react-pdf/dist/esm/entry.vite"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

const PDFViewer = () => {
	const params = useParams()
	const { id } = params

	const [loading, setLoading] = useState(true)
	const [pdfFile, setPdfFile] = useState()
	const [numPages, setNumPages] = useState(null)
	const [pageNumber, setPageNumber] = useState(1)
	const [pageScale, setPageScale] = useState(1.0)

	const getFileData = async () => {
		try {
			const res = await axios.get(`/api/v1/files/file/${id}`)
			setPdfFile(res.data)
			// console.log(res.data)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages)
	}

	useEffect(() => {
		getFileData()
	}, [])

	return (
		<div>
			{loading ? (
				<div
					className="radial-progress text-primary animate-spin"
					style={{
						"--value": 50,
						"--size": "3rem",
						"--thickness": "8px",
					}}></div>
			) : (
				<div className="flex flex-col gap-4 justify-center items-center">
					<p className="text-xl font-bold">{pdfFile.fileName}</p>
					<div className="max-h-[80vh] max-w-[90vw] overflow-auto">
						<Document
							file={pdfFile.fileBase64}
							loading={
								<div
									className="radial-progress text-primary animate-spin"
									style={{
										"--value": 50,
										"--size": "3rem",
										"--thickness": "8px",
									}}></div>
							}
							onLoadSuccess={onDocumentLoadSuccess}>
							<Page
								size="A4"
								pageNumber={pageNumber}
								scale={pageScale}
							/>
						</Document>
					</div>
					<div className="flex justify-around items-center gap-4">
						<button
							className="btn btn-secondary"
							disabled={pageScale < 1.2}
							onClick={() => setPageScale((prev) => prev - 0.2)}>
							Zoom Out
						</button>
						<button
							className="btn btn-secondary"
							disabled={pageNumber <= 1}
							onClick={() => setPageNumber((prev) => prev - 1)}>
							Previous
						</button>
						<p>
							Page {pageNumber || (numPages ? 1 : "--")} of{" "}
							{numPages || "--"}
						</p>
						<button
							className="btn btn-secondary"
							disabled={pageNumber >= numPages}
							onClick={() => setPageNumber((prev) => prev + 1)}>
							Next
						</button>
						<button
							className="btn btn-secondary"
							disabled={pageScale > 9.8}
							onClick={() => setPageScale((prev) => prev + 0.2)}>
							Zoom In
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default PDFViewer
