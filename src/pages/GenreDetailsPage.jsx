import { useQuery } from "react-query";
import { getPosts } from "../services/GenreAPI";
import { useEffect, useState } from "react"

const GenreDetailsPage = (props) => {
    const [page, setPage] = useState(1);

    const { data, error, isError, isLoading } = useQuery(
        ["movies", page],
                        //genre id from params props.match.params.id
        () => getPosts(`${props.match.params.id}`, page),
        {
            staleTime: 1000 * 60 * 5, // 5 mins
            cacheTime: 1000 * 60 * 30, // 30 mins
            keepPreviousData: true, // keep previous data
        }
    )

    useEffect(() => {
        console.log("this is movies from genre", data);
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