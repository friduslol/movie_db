import { useQuery } from "react-query";
import { fetchGenre } from "../services/GenreDetailsAPI";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

const GenreDetailsPage = (props) => {
    const id = props.match.params.id
    // const genre = props.match.params.genre
    const historyHook = useHistory();

    const { data, isError, isLoading, error, } = useQuery(
        [`${id}`],
        () => fetchGenre(`${id}`),
    );

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }
    return(
        <div>
            {/* <h1>{genre}</h1> */}

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                data.results.map((movie, i) => (
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

export default GenreDetailsPage;