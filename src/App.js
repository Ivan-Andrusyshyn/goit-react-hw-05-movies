import * as React from 'react';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Header from 'components/header';

const Movies = lazy(() => import('components/movies/movies'));
const Home = lazy(() => import('components/home/home'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Credits = lazy(() => import('components/credits/credits'));
const Reviews = lazy(() => import('components/reviews/reviews'));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
export { App };
