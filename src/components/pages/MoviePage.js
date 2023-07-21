import React, { useEffect, useState } from "react";
import { fetcher } from "../../config/Config";
import useSWR from "swr";
import MovieCard from "../movie/MovieCard";

const MoviePage = () => {
  const [movie, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );

  //   const movie = data?.results || [];

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="py-10 rounded-lg">
      <div className="flex page-container">
        <div className="flex flex-1 mb-10">
          <input
            className="w-full p-4 text-white border-none outline-none bg-slate-800"
            type="text"
            placeholder="Type here to search...."
          />
          <button className="p-4 text-white bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 page-container">
        {movie.length > 0 &&
          movie.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
