import { useEffect, useState } from 'react';
import '../style.css';
import { Loader } from '../loader/loader';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { Form } from './form';
import axios from 'axios';
import PropTypes from 'prop-types';
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const KeyUser = '72a7646a40703400682c093b811827fe';
  const BaseUrl = 'https://api.themoviedb.org/3/';
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!query) return;
        const url = `${BaseUrl}search/movie?query=${query}&include_adult=false&api_key=${KeyUser}`;
        const { results } = await axios(url).then(response => response.data);
        if (results.length === 0) {
          alert(
            'Here is nothing to see, please put another query and try again'
          );
        }
        setTimeout(() => {
          setMovie(results);
        }, 1000);
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchData();
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
      <ul>
        {loading ? (
          <Loader />
        ) : (
          movie.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {original_title}
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
