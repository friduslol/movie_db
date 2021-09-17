import { useQuery } from "react-query";
import { getPages } from "../services/GenreDetailsAPI";
import { useHistory } from "react-router-dom";
//useUrlSearchParams is used to persist state after refreshing page
import { useUrlSearchParams } from 'use-url-search-params'
import * as ReactBootstrap from "react-bootstrap";
import { useState, useEffect } from "react";

const GenreDetailsPage = (props) => {
    const historyHook = useHistory();
    const id = props.match.params.id;
    const genre = props.match.params.genre;
    //first argument: default vaule of the url string "page=1"
    //second argumnet, all values parsed from url are strings, specifying that I want a number
    const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number })
    const [page, setPage] = useState(searchParams.page);

    const { data, isError, isLoading, error, isPreviousData } = useQuery(
        [`${id}`, page],
        () => getPages(`${id}`, page),
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30,
            keepPreviousData: true, //displaying/keeping data until new is retrieved
          }
    );

    useEffect(() => {
        //when using browsers back/forward btns, update page
		setSearchParams({ ...searchParams, page })
    }, [page])

    useEffect(() => {
        //when page change, update url
		setPage(searchParams.page)
	}, [searchParams])

    const clickToRender = (id) => {
        historyHook.push(`/movie/${id}/`);
    }

    return(
        <ReactBootstrap.Container >
            <h1>{genre}</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            <ReactBootstrap.Row>
                {data && (
                    data.genredata.map((movie, i) => (
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

            <div className="pagination d-flex justify-content-between align-items-center mt-4">
                <ReactBootstrap.Button onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
                disabled={page === 1}>
                    Previous Page
                </ReactBootstrap.Button>

                <span>Current Page: {page}</span>

                <ReactBootstrap.Button onClick={() => {
                    //between page 1-499, add +1 to fetch more data
                    if (!isPreviousData && data.results.page < 500) {
                        setPage((currentPage) => currentPage + 1);
                    }
                    //on last page disable btn
                }} disabled={page === 500}>
                    Next Page
                </ReactBootstrap.Button>
            </div>
        </ReactBootstrap.Container>
    )
}

export default GenreDetailsPage;