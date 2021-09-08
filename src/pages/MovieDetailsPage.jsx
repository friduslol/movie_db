import { useQuery } from "react-query";
import { fetchMovie } from "../services/GenreAPI"
import { useEffect } from "react"

const MovieDetailsPage = (props) => {
    const id = props.match.params.id

    const { data, isError, isLoading, error, } = useQuery(
        ["movie"],
        () => fetchMovie(`${id}`),
    );

    useEffect(() => {
        console.log("movie data", data);
    }, [data])

    return(
        <div>
             <h1>MovieDetailsPage</h1>
            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                <div>
                     <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.original_title}/>
                    <p>{data.original_title}</p>
                    <p>{data.overview}</p>
                    {data.credits.cast.map((actor, i) => (
                        <p key={i}>{actor.name}</p>
                    ))}
                </div>
            )}

        </div>
    )
}

export default MovieDetailsPage;