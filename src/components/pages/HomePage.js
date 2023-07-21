import React from "react";
import MovieList from "../movie/MovieList";
import Banner from "../banner/Banner";
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="pb-20 movies-layout page-container ">
        <h2 className="mb-10 text-3xl font-bold capitalize">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl capitalize ">Top Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="mb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl capitalize ">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </div>
  );
};

export default HomePage;
