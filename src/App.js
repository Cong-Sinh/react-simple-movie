/* eslint-disable react/jsx-no-comment-textnodes */
import { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
// import HomePage from "./components/pages/HomePage";
// import MoviePage from "./components/pages/MoviePage";
// import MovieDetailPage from "./components/pages/MovieDetailPage";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const MovieDetailPage = lazy(() =>
  import("./components/pages/MovieDetailPage")
);
// const MoviePage = lazy(() => import("./components/pages/MoviePage"));
const MoviePageV2 = lazy(() => import("./components/pages/MoviePageV2"));

const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            {/* <Route path="/movie" element={<MoviePage></MoviePage>}></Route> */}
            <Route path="/movie" element={<MoviePageV2></MoviePageV2>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
