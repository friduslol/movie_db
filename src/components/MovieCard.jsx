import { useHistory } from "react-router-dom";

const MovieCard = (props) => {
    const historyHook = useHistory();

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }

    return(
        <div>
            {props.data && (
                props.data.results.map((movie, i) => (
                    <div onClick={() => clickToRender(movie.id)} key={i}>
                        <p>{movie.original_title}</p>
                        {movie.poster_path
                        ? <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.original_title}/>
                        : <p>No image avalible</p>
                        }
                    </div>
                ))
            )}
        </div>
    )
}

export default MovieCard;