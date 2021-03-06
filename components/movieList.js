import React from "react"
import Link from "next/link"

class movieList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
	}

	shorten = (text, maxLength) => {
		if (text && text.length > maxLength) {
			return text.substr(0, maxLength) + "..."
		}
		return text
	}

	renderMovies(movies) {
		const movieElement = movies.map((movie) => {
			return (
				<div key={movie.id} className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100">
						<Link href="/movies/[id]" as={`/movies/${movie.id}`}>
							<a>
								<img className="card-img-top" src={movie.image} alt="image" />
							</a>
						</Link>
						<div className="card-body">
							<h4 className="card-title">
								<Link href="/movies/[id]" as={`/movies/${movie.id}`}>
									<a>{movie.name}</a>
								</Link>
							</h4>
							<p className="card-text">
								{this.shorten(movie.description, 100)}
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{movie.rating}</small>
						</div>
					</div>
				</div>
			)
		})
		return movieElement
	}

	render() {
		const { movies } = this.props
		return <>{this.renderMovies(movies)}</>
	}
}

export default movieList
