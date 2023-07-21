/* eslint-disable react/jsx-no-comment-textnodes */
import { Fragment } from "react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center p-10 mb-5 header gap-x-5">
        <span className="text-primary">Home</span>
        <span className="">Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-10">
        <div className="relative w-full h-full bg-white rounded-lg">
          <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)] "></div>
          <img
            className="object-cover w-full h-full rounded-lg"
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
          />
          <div className="absolute w-full bottom-5 left-5">
            <h2 className="mb-5 text-3xl font-bold ">AvengersL Endgame</h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className="p-2 px-4 border border-white rounded-md">
                adventure
              </span>
              <span className="p-2 px-4 border border-white rounded-md">
                adventure
              </span>
              <span className="p-2 px-4 border border-white rounded-md">
                adventure
              </span>
            </div>
            <button className="p-3 px-4 text-white rounded-lg bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="pb-20 movies-layout page-container ">
        <h2 className="mb-10 text-3xl font-bold capitalize">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl capitalize ">Top Rated</h2>
        <div className="grid grid-cols-4 gap-10 movie-list page-container">
          <div className="p-3 rounded-lg Movies-card bg-slate-800 ">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px]  object-cover  rounded-lg mb-5"
            />
            <h3 className="mb-3 text-2xl font-bold text-white">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
              <span>2017</span>
              <span>2.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
