import Movie from "./Movie"
import "./MovieList.css";

const MovieList = ({movieData}) => {
    
const movieNodes = movieData.map((movie) => {
    return <Movie
    key = {movie.id}
    movieObj = {movie}/>
    
})


    return (

        <>
          <ul>{movieNodes}</ul>
        </>
    )

}



export default MovieList