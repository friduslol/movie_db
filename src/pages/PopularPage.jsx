import { useQuery } from "react-query";
import { fetchPopular } from "../services/MovieAPI";
import MovieCard from "../components/MovieCard";

const PopularPage = () => {
    const { data, isError, isLoading, error } = useQuery("popular", fetchPopular);

    return(
        <div>
            <h1>PopularPage</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            <MovieCard data={data} />
        </div>

    )
}

export default PopularPage;