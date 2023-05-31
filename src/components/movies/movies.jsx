import { useEffect, useState } from 'react';
import '../style.css';
import { Loader } from '../loader/loader';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { Form } from './form';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from 'components/fetch/fetch';
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const imageUrl = 'https://image.tmdb.org/t/p/w342';
  useEffect(() => {
    fetchData(query, setLoading, setMovie);
  }, [query]);

  const searchOnSubmit = searchQuery => {
    if (searchQuery === query) {
      return;
    }
    setSearchParams({ query: searchQuery });
    setMovie([]);
  };

  return (
    <div className="container-search">
      <Form value={query} onSubmit={searchOnSubmit} />
      <ToastContainer />
      <ul className="movie_list">
        {loading ? (
          <Loader />
        ) : (
          movie.map(({ id, original_title, poster_path }) => {
            return (
              <li key={id}>
                <Link
                  to={`${id}`}
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
          })
        )}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
