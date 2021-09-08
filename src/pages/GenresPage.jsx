import { useQuery } from "react-query";
import { fetchGenres } from "../services/GenreAPI";
import { useHistory } from "react-router-dom";

const GenrePage = () => {
    const { data, isError, isLoading, error } = useQuery("genre", fetchGenres);
    const historyHook = useHistory();

    const clickToRender = (genre) => {
        historyHook.push(`/genre/${genre.id}`)
    }

    return(
        <div>
            <h1>Genres Page</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}


            {data && (
                data.genres.map((genre, i) => (
                    <p onClick={() => clickToRender(genre)} key={i}>{genre.name}</p>
                ))
            )}

        </div>

    )
}

export default GenrePage;