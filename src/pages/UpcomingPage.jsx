import { useQuery } from "react-query";
import { fetchUpcoming } from "../services/MovieAPI";
import MovieCard from "../components/MovieCard";

const UpcomingPage = () => {
    const { data, isError, isLoading, error } = useQuery("upcoming", fetchUpcoming);

    return(
        <div>
            <h1>Upcoming movies</h1>

            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            <MovieCard data={data} />
        </div>

    )
}

export default UpcomingPage;