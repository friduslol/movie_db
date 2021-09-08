import { useQuery } from "react-query";
import { fetchGenres } from "../services/GenreAPI";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const GenrePage = () => {
    const { data, isError, isLoading, error } = useQuery("genre", fetchGenres);
    const historyHook = useHistory();

    useEffect(() => {
        console.log("this is genre data", data);
    }, [data])

    const clickToRender = (id) => {
        historyHook.push(`/genre/${id}`)
    }

    return(
        <div>
            <h1>Genre Page</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                data.genres.map((genre, i) => (
                    <p onClick={() => clickToRender(genre.id)} key={i}>{genre.name}</p>
                ))
            )}


        </div>

    )
}

export default GenrePage;