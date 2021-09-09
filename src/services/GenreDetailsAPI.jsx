import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/discover/";

const url = "movie?api_key=460acee783def1956a6f8b3629ae4590&with_genres="

const get = async (endpoint) => {
    const response = await axios.get(url + endpoint);

    console.log("response", response.headers);
    

    return {
        results: response.data,
        genredata: response.data.results
    }
};


export const getFetch = async (endpoint) => {
    //eslint-disable-next-line
    const response = await fetch(baseURL + url + endpoint);

    console.log("url", endpoint);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const getPosts = async (prop, page = null) => {
    const endpoint = `${prop}&page=${page}`;
    return get(endpoint)
};

//eslint-disable-next-line
export default {
    getFetch,
    getPosts,
}

// export const fetchGenre = async (id) => {
//     //eslint-disable-next-line
//     const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=460acee783def1956a6f8b3629ae4590&with_genres=${id}`);

//     if(!response.ok) {
//         throw new Error("Request went wrong!")
//     }

//     return response.json();
// };

//eslint-disable-next-line
