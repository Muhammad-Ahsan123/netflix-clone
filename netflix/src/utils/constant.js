export const API_ENDPOINT = "http://localhost:8080/api/v1/user"

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer e1890ad3f44cda1d5bdf357a37c1659a'
    }
};

export const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=e1890ad3f44cda1d5bdf357a37c1659a"
export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=e1890ad3f44cda1d5bdf357a37c1659a"
export const TOP_RATEDMOVIES = "https://api.themoviedb.org/3/movie/top_rated?api_key=e1890ad3f44cda1d5bdf357a37c1659a"
export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?api_key=e1890ad3f44cda1d5bdf357a37c1659a"
export const SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie"


export const BANNER_URL = "https://image.tmdb.org/t/p/w500"
export const MOVIE_VIDEO = "https://api.themoviedb.org/3/movie/{movie_id}/videos"