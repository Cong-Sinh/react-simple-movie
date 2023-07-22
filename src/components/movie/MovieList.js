import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import { fetcher, tmdbAPI } from "../../config/Config";
import useSWR from "swr";
// https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027
const MovieList = ({ type = "now_playing" }) => {
  const [movie, setMovies] = useState([]);
  // `https://api.themoviedb.org/3/movie/${type}?api_key=95f2419536f533cdaa1dadf83c606027`,
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  // console.log(data);

  // const movie = data?.results || [];

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  // console.log(movie);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movie.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
