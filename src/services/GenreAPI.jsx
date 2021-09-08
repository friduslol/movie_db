
//________For fetching all genres__________
export const fetchGenres = async () => {
    //eslint-disable-next-line
    const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=460acee783def1956a6f8b3629ae4590&language=en-US");

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

//eslint-disable-next-line
export default {
    fetchGenres,
}