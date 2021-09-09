import { useQuery } from "react-query";
import { fetchMovie } from "../services/MovieAPI";
import { useHistory } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const MovieDetailsPage = (props) => {
    const id = props.match.params.id
    const historyHook = useHistory();

    const { data, isError, isLoading, error, } = useQuery(
        ["movie"],
        () => fetchMovie(`${id}`),
    );

    const clickToRender = (id) => {
        historyHook.push(`/actor/${id}`)
    }

    return(
        <ReactBootstrap.Container>
            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                <div>
                    {data.poster_path
                        ? <ReactBootstrap.Image src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.title} fluid/>
                        : <p>No image avalible</p>
                    }
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                    <h2>Actors:</h2>
                    {data.credits.cast.map((actor, i) => (
                        <p key={i} className="hover" onClick={() => clickToRender(actor.id)}>{actor.name}</p>
                    ))}
                </div>
            )}
        </ReactBootstrap.Container>
    )
}

export default MovieDetailsPage;