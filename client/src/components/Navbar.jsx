import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<div className="navbar bg-base-200 rounded-lg mt-4">
			<Link to="/" className="btn btn-ghost normal-case text-xl">
				PDF Viewer App
			</Link>
		</div>
	)
}

export default Navbar
