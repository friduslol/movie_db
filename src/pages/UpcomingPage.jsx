import { useQuery } from "react-query";
import { fetchUpcoming } from "../services/GenreAPI";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const UpcomingPage = () => {
    const { data, isError, isLoading, error } = useQuery("upcoming", fetchUpcoming);

    const historyHook = useHistory();

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }

    useEffect(() => {
        console.log("top rated data", data);
    }, [data])

    return(
        <div>
            <h1>UpcomingPage</h1>

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

export default UpcomingPage;