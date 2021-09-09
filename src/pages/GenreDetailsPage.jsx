import { useQuery } from "react-query";
import { fetchGenre } from "../services/GenreDetailsAPI";
import { useHistory } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const GenreDetailsPage = (props) => {
    const id = props.match.params.id
    // const genre = props.match.params.genre
    const historyHook = useHistory();

    const { data, isError, isLoading, error, } = useQuery(
        [`${id}`],
        () => fetchGenre(`${id}`),
    );

    console.log("single genre", props);

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }
    return(
        <ReactBootstrap.Container >
            {/* <h1>{genre}</h1> */}

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            <ReactBootstrap.Row>
            {data && (
                data.results.map((movie, i) => (
                    <ReactBootstrap.Col key={i}>
                    <ReactBootstrap.Card style={{ width: "18rem ", height: "100%"}}>
                        {movie.poster_path
                            ? <ReactBootstrap.Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title}/>
                            : <p>No image avalible</p>
                        }
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>{movie.title}</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>{movie.overview.slice(0, 40) + "..."}</ReactBootstrap.Card.Text>
                        </ReactBootstrap.Card.Body>
                        <ReactBootstrap.Button variant="primary" onClick={() => clickToRender(movie.id)}>
                                Go to movie
                            </ReactBootstrap.Button>
                    </ReactBootstrap.Card>
                    </ReactBootstrap.Col>
                ))
            )}
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>

    )
}

export default GenreDetailsPage;