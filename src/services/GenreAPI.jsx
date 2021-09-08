import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=460acee783def1956a6f8b3629ae4590&language=en-US&sort_by=with_genres,";

const get = async (endpoint) => {
    const response = await axios.get(endpoint);


    return {
        results: response.data,
        genreData: response.data.results
    }
};

export const fetchGenre = async (endpoint) => {
    //eslint-disable-next-line
    const response = await fetch(baseURL + endpoint);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};


//________For fetching all genres__________
export const fetchGenres = async () => {
    //eslint-disable-next-line
    const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=460acee783def1956a6f8b3629ae4590&language=en-US");

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const getPosts = async (prop, page = null) => {
    return get(`${prop}?page=${page}`);
};

//eslint-disable-next-line
export default {
    fetchGenres,
    fetchGenre,
    getPosts
}