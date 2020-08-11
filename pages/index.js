import { useState, useEffect } from "react"

import SideMenu from "../components/sideMenu"
import Carousel from "../components/carousel"
import MovieList from "../components/movieList"

import { getMovies } from "../actions"

const Home = () => {
	const [movies, setMovies] = useState([])
	const [count, setCount] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const resMovies = await getMovies()
			setMovies(resMovies)
		}

		fetchData()
	}, [count])

	return (
		<div>
			<div className="home-page">
				<div className="container mt-5">
					<div className="row">
						<SideMenu />

						<div className="col-lg-9">
							<Carousel />

							<div className="row">
								<MovieList movies={movies} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Home.getInitialProps = async () => {
	const movies = await getMovies()

	return {
		movies,
	}
}

export default Home
