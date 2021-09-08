import { useQuery } from "react-query";
import { fetchGenre } from "../services/GenreAPI";
import { useEffect } from "react"

const GenreDetailsPage = () => {
    const { data, isError, isLoading, error } = useQuery("genre", fetchGenre);

    useEffect(() => {
        console.log("this is genre data", data);
    }, [data])

    return(
        <div>
            <h1>Genre Page</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

        </div>

    )
}

export default GenreDetailsPage;