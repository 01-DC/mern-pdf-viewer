import axios from "axios"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

const PDFViewer = () => {
	const params = useParams()
	const { id } = params

	const getFileData = async () => {
		try {
			const res = await axios.get(`/api/v1/files/file/${id}`)
			console.log(res)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getFileData()
	}, [])
	return <div>PDFViewer</div>
}

export default PDFViewer
