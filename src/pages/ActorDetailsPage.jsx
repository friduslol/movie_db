import { useQuery } from "react-query";
import { fetchActor } from "../services/MovieAPI"
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

    return(
        <ReactBootstrap.Container>
            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                <div className="paddingTop">
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12}>
                            {data.profile_path
                                ? <ReactBootstrap.Image src={"https://image.tmdb.org/t/p/w500" + data.profile_path} alt={data.name} fluid/>
                                : <p>No image avalible</p>
                            }
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12}>
                            <h1>{data.name}</h1>
                            <p>{data.biography}</p>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12}>
                            <h2>Movies:</h2>
                            <ul>
                                {data.combined_credits.cast.map((movie, i) => (
                                    <li key={i} className="hover" onClick={() => clickToRender(movie.id)}>{movie.title}</li>
                                ))}
                            </ul>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </div>
            )}
        </ReactBootstrap.Container>
    )
}

export default ActorDetailsPage;