import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config/Config";
const MovieDetailPage = () => {
  const { movieId } = useParams();

  // const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  return (
    <div>
      <>
        <div
          className="w-full h-screen"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        ></div>
      </>
    </div>
  );
};

export default MovieDetailPage;
