import { useQuery } from "react-query";
import { fetchNowPlaying } from "../services/MovieAPI";
import MovieCard from "../components/MovieCard";

const NowPlayingPage = () => {
    const { data, isError, isLoading, error } = useQuery("playing", fetchNowPlaying);

    return(
        <div>
            <h1>Now playing movies</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            <MovieCard data={data} />
        </div>

    )
}

export default NowPlayingPage;