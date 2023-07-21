/* eslint-disable react/jsx-no-comment-textnodes */
import { Fragment } from "react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center p-10 mb-5 header gap-x-5">
        <span className="text-primary">Home</span>
        <span className="">Movies</span>
      </header>
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
    </Fragment>
  );
}

export default App;
