import SideMenu from "../components/sideMenu"
import Carousel from "../components/carousel"
import MovieList from "../components/movieList"

import { getMovies, getCategories } from "../actions"

const Home = (props) => {
	return (
		<div>
			<div className="home-page">
				<div className="container mt-5">
					<div className="row">
						<SideMenu categories={props.categories} />
						<div className="col-lg-9">
							<Carousel images={props.images} />
							<div className="row">
								<MovieList movies={props.movies || []} />
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
	const categories = await getCategories()
	const images = movies.map((movie) => ({
		id: `image=${movie.id}`,
		url: movie.cover,
		title: movie.name,
	}))

	return {
		movies,
		images,
		categories,
	}
}

export default Home
