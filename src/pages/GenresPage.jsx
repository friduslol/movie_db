import { useQuery } from "react-query";
import { fetchGenres } from "../services/GenreAPI";
import { useEffect } from "react"

const GenrePage = () => {
    const { data, isError, isLoading, error } = useQuery("genre", fetchGenres);

    useEffect(() => {
        console.log("this is genre data", data);
    }, [data])

    return(
        <div>
            <h1>Genre Page</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                data.genres.map((genre, i) => (
                    <p key={i}>{genre.name}</p>
                ))
            )}


        </div>

    )
}

export default GenrePage;