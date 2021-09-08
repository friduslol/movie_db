import { useQuery } from "react-query";
import { fetchGenre } from "../services/GenreDetailsAPI";
import { useEffect, useState } from "react"

const GenreDetailsPage = (props) => {
    const [page, setPage] = useState(1);
    const id = props.match.params.id
    const genre = props.match.params.genre


    console.log("genre", genre);

    const { data, isError, isLoading, error, isPreviousData } = useQuery(
        [`${id}`, page],
        () => fetchGenre(`${id}`, page),
        {
            staleTime: 1000 * 60 * 5, // 5 mins
            cacheTime: 1000 * 60 * 30, // 30 mins
            keepPreviousData: true, // keep previous data
        }
    );

    useEffect(() => {
        console.log("this is movies from genre", data);
    }, [data])

    return(
        <div>
            <h1>{genre}</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && data.results.map((movie, i) => (
                <div>
                    <p key={i} >{movie.title}</p>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                </div>
            ))}

        </div>

    )
}

export default GenreDetailsPage;