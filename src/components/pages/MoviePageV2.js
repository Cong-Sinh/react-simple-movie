import React, { useEffect, useState } from "react";
import { fetcher, tmdbAPI } from "../../config/Config";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "../movie/MovieCard";
import useDebounce from "../../hook/useDebounce";
import ReactPaginate from "react-paginate";
import useSWRInfiniite from "swr/infinite";
import { v4 } from "uuid";
import Button from "../button/Button";

const itemsPerPage = 20;
const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error, size, setSize } = useSWRInfiniite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );

  const movie = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  const loading = !data && !error;
  console.log(movie);

  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);

  // if (!data) return null;
  // const { page, total_pages } = data;

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 rounded-lg">
      <div className="flex page-container">
        <div className="flex flex-1 mb-10">
          <input
            className="w-full p-4 text-white border-none outline-none bg-slate-800"
            type="text"
            placeholder="Type here to search...."
            onChange={handleFilterChange}
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
      {loading && (
        <div className="grid grid-cols-4 gap-10 page-container">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10 page-container">
        {!loading &&
          movie.length > 0 &&
          movie.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10 text-center">
        <Button
          onClick={() => (isReachingEnd ? {} : setSize(size + 1))}
          disabled={isReachingEnd}
          className={`${isReachingEnd ? "bg-slate-300" : ""} `}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default MoviePage;
