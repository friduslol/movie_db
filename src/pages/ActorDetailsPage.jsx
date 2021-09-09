import { useQuery } from "react-query";
import { fetchActor } from "../services/GenreAPI"
import { useEffect } from "react"
import { useHistory } from "react-router-dom";

const ActorDetailsPage = (props) => {
    const id = props.match.params.id
    const historyHook = useHistory();

    const { data, isError, isLoading, error, } = useQuery(
        ["actor"],
        () => fetchActor(`${id}`),
    );

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }
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
                    {data.profile_path
                    ? <img src={"https://image.tmdb.org/t/p/w500" + data.profile_path} alt={data.name}/>
                    : <p>No image avalible</p>}
                    <p>{data.name}</p>
                    {data.combined_credits.cast.map((movie, i) => (
                        <p key={i} onClick={() => clickToRender(movie.id)}>{movie.original_title}</p>
                    ))}
                </div>
            )}

        </div>
    )
}

export default ActorDetailsPage;