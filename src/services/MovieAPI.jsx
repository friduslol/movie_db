const url = "https://api.themoviedb.org/3"

export const fetchGenres = async () => {
    //eslint-disable-next-line
    const response = await fetch(url + "/genre/movie/list?api_key=460acee783def1956a6f8b3629ae4590&language=en-US");

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const fetchMovie = async (id) => {
    //eslint-disable-next-line
    const response = await fetch(url + `/movie/${id}?api_key=460acee783def1956a6f8b3629ae4590&language=en-US&append_to_response=credits`);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const fetchActor = async (id) => {
    //eslint-disable-next-line
    const response = await fetch(url + `/person/${id}?api_key=460acee783def1956a6f8b3629ae4590&language=en-US&append_to_response=combined_credits`);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const fetchPopular = async () => {
    //eslint-disable-next-line
    const response = await fetch(url + `/movie/popular?api_key=460acee783def1956a6f8b3629ae4590&language=en-US&page=1`);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const fetchTopRated = async () => {
    //eslint-disable-next-line
    const response = await fetch(url + `/movie/top_rated?api_key=460acee783def1956a6f8b3629ae4590&language=en-US&page=1`);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const fetchNowPlaying = async () => {
    //eslint-disable-next-line
    const response = await fetch(url + `/movie/now_playing?api_key=460acee783def1956a6f8b3629ae4590&language=en-US&page=1`);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

//eslint-disable-next-line
export default {
    fetchGenres,
    fetchMovie,
    fetchActor,
    fetchPopular,
    fetchTopRated,
    fetchNowPlaying
}