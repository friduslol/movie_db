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
                <div className="paddingTop">
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12}>
                            {data.poster_path
                                ? <ReactBootstrap.Image src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.title} fluid/>
                                : <p>No image avalible</p>
                            }
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12}>
                            <h1>{data.title}</h1>
                            <p>{"Release date: " + data.release_date}</p>
                            <p>{"Runtime: " + data.runtime}</p>
                            <p>{"Plot: " + data.overview}</p>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12}>
                            <h2>Actors:</h2>
                            <ul>
                                {data.credits.cast.map((actor, i) => (
                                    <li key={i} className="hover" onClick={() => clickToRender(actor.id)}>{actor.name}</li>
                                ))}
                            </ul>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </div>
            )}
        </ReactBootstrap.Container>
    )
}

export default MovieDetailsPage;