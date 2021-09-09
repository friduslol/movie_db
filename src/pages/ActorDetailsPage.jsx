import { useQuery } from "react-query";
import { fetchActor } from "../services/MovieAPI"
import { useEffect } from "react"
import { useHistory } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

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
        <ReactBootstrap.Container>
            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                <div>
                    {data.profile_path
                        ? <ReactBootstrap.Image src={"https://image.tmdb.org/t/p/w500" + data.profile_path} alt={data.name} fluid/>
                        : <p>No image avalible</p>
                    }
                    <h1>{data.name}</h1>
                    <p>{data.biography}</p>
                    <h2>Movies:</h2>

                    {data.combined_credits.cast.map((movie, i) => (
                        <p key={i} className="hover" onClick={() => clickToRender(movie.id)}>{movie.title}</p>
                    ))}
                </div>
            )}
    </ReactBootstrap.Container>

    )
}

export default ActorDetailsPage;