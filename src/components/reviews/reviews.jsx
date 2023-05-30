import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
const Reviews = () => {
  const location = useParams();
  const [movie, setMovie] = useState({});
  const Key = '72a7646a40703400682c093b811827fe';
  const BaseUrl = 'https://api.themoviedb.org/3/';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${BaseUrl}movie/${location.movieId}/reviews?api_key=${Key}`;
        const { results } = await fetch(url).then(resp => resp.json());
        setTimeout(() => {
          setMovie(results);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location]);
  return (
    <ul className="character_list">
      {movie.length === 0 ? (
        <div>Sorry, but we can not found any information </div>
      ) : (
        ''
      )}
      {movie.length > 0
        ? movie.map(({ id, author, content }) => {
            return (
              <li className="character_item" key={id}>
                <h2>Author:{author}</h2>
                <p>{content}</p>
              </li>
            );
          })
        : ''}
    </ul>
  );
};
Reviews.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }),
};
export default Reviews;
