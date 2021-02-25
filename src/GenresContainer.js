import { Component } from "react";
import Genre from './Genre'


class GenresContainer extends Component {

    state = {
        genres: []
    }

    createGenre() {
        return this.state.genres.map((g) => {
            const classname = this.props.selectedGenres.includes(g.id) ? "active" : "inactive"
            return <Genre genre={g} handleGenreSelection={this.props.handleGenreSelection} className={classname} />
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/spotifyAuth')
        .then(r => r.json())
        .then(genres => {
            this.setState({
                genres: genres
            }, () => {console.log(this.state)})
            // const g = new Genre(genre)
            // g.addToDom()
        })
    }
    

    render() {
        return(
            <div>
                {this.createGenre()}
            </div>
        )
    }
}

export default GenresContainer