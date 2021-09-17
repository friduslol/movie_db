import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/discover/";

//seems to be a bug, if I keep the entire url string in my base url, a random "/" gets added at the end
//breaking it down like this is the only solution I found
const url = "movie?api_key=460acee783def1956a6f8b3629ae4590&with_genres=";

const get = async (endpoint) => {
  const response = await axios.get(url + endpoint);

  return {
    results: response.data,
    genredata: response.data.results,
  };
};

//error handling
export const getFetch = async (endpoint) => {
  //eslint-disable-next-line
  const response = await fetch(baseURL + url + endpoint);

  if (!response.ok) {
    throw new Error("Request went wrong!");
  }

  return response.json();
};

export const getPages = async (prop, page = null) => {
  const endpoint = `${prop}&page=${page}`;
  return get(endpoint);
};

//eslint-disable-next-line
export default {
  getFetch,
  getPages,
};

