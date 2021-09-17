import { useQuery } from "react-query";
import { fetchGenres } from "../services/MovieAPI";
import { useHistory } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const GenrePage = () => {
    const historyHook = useHistory();
    const { data, isError, isLoading, error } = useQuery("genre", fetchGenres);

    //pushing to new route, adding genre.name to later access specific genre´s name
    const clickToRender = (genre) => {
        historyHook.push(`/genre/${genre.name}/${genre.id}`)
    }

    return(
        <ReactBootstrap.Container>
            <h1>All genres</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

             <ReactBootstrap.Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Genres</th>
                    </tr>
                </thead>
                {data && (
                    data.genres.map((genre, i) => (
                        <tbody key={i} className="hover">
                            <tr>
                                <td onClick={() => clickToRender(genre)}>{genre.name}</td>
                            </tr>
                        </tbody>
                    ))
                )}
            </ReactBootstrap.Table>
        </ReactBootstrap.Container>
    )
}

export default GenrePage;