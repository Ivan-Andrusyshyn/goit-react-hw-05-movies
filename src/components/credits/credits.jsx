import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Loader } from "../loader/loader";
import PropTypes from "prop-types";

const Credits = () => {
  const location = useParams();
  const [movie, setMovie] = useState({});
  const Key = "72a7646a40703400682c093b811827fe";
  const BaseUrl = "https://api.themoviedb.org/3/";
  const imageUrl = "https://image.tmdb.org/t/p/w342";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${BaseUrl}movie/${location.movieId}/credits?api_key=${Key}`;
        const { cast } = await fetch(url).then((resp) => resp.json());
        setTimeout(() => {
          setMovie(cast.slice(0, 5));
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location]);
  return (
    <ul className="character_list">
      {movie.length > 0 ? (
        movie.map(({ name, profile_path, character }) => {
          const img = profile_path
            ? `${imageUrl}${profile_path}`
            : "https://picsum.photos/200/300.jpg";
          return (
            <li className="character_item" key={name}>
              <img src={`${img}`} alt="Movie Image" />

              <h2>{name}</h2>
              <p>Character:{character}</p>
            </li>
          );
        })
      ) : (
        <Loader />
      )}
    </ul>
  );
};
Credits.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }),
};
export default Credits;
