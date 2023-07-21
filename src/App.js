/* eslint-disable react/jsx-no-comment-textnodes */
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";
import MovieDetailPage from "./components/pages/MovieDetailPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movies/:moviesId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
