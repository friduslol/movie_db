import { useHistory } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const MovieCard = (props) => {
    const historyHook = useHistory();

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }

    console.log("data", props.data);

    return(
        <ReactBootstrap.Container >
            <ReactBootstrap.Row>
            {props.data && (
                props.data.results.map((movie, i) => (
                    <ReactBootstrap.Col>
                    <ReactBootstrap.Card style={{ width: "18rem "}} key={i}>
                        {movie.poster_path
                            ? <ReactBootstrap.Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title}/>
                            : <p>No image avalible</p>
                        }
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>{movie.title}</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>{movie.overview}</ReactBootstrap.Card.Text>
                            <ReactBootstrap.Button variant="primary" onClick={() => clickToRender(movie.id)}>
                                Go to movie
                            </ReactBootstrap.Button>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>
                    </ReactBootstrap.Col>
                ))
            )}
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
    )
}

export default MovieCard;