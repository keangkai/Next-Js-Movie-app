import React from "react"
import Modal from "./modal"
import MovieCreateForm from "./movieCreateForm"
import { createMovies } from "../actions"

const sideMenu = (props) => {
	const { categories } = props

	let modal = null

	const handleCreateMovie = (movie) => {
		createMovies(movie).then((movies) => {
			console.log(JSON.stringify(movies))
			modal.closeModal()
		})
	}

	return (
		<div className="col-lg-3">
			<Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
				<MovieCreateForm handleFormSubmit={handleCreateMovie} />
			</Modal>
			<h1 className="my-4">Movie DB</h1>
			<div className="list-group">
				{categories.map((categorie) => (
					<a key={categorie.id} href="#" className="list-group-item">
						{categorie.name}
					</a>
				))}
			</div>
		</div>
	)
}

export default sideMenu
