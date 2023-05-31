import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';
import { makeFetch } from 'components/fetch/fetch';
const imageUrl = 'https://image.tmdb.org/t/p/w342';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    makeFetch(setFilms);
  }, []);
  const location = useLocation();
  return (
    <div className="container-search">
      <h1>Trending today</h1>
      <ul className="movie_list">
        {films.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id}>
              <Link
                to={`movies/${id}`}
                state={{ from: location }}
                className="custom-link"
              >
                <div className="movie_list_item">
                  <img src={`${imageUrl}${poster_path}`} alt="" />
                  <p>{original_title}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
