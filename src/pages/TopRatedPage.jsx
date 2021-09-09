import { useQuery } from "react-query";
import { fetchTopRated } from "../services/MovieAPI";
import MovieCard from "../components/MovieCard";

const TopRatedPage = () => {
    const { data, isError, isLoading, error } = useQuery("topRated", fetchTopRated);


    return(
        <div>
            <h1>TopRatedPage</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            <MovieCard data={data} />
        </div>

    )
}

export default TopRatedPage;