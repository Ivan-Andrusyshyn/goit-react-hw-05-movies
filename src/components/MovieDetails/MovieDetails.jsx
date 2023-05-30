import "./style.css";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../loader/loader";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LinksDetails from "./linksDetails";
import DetailsPage from "./detailsPage";
const MovieDetails = () => {
  const location = useParams();
  const [movie, setMovie] = useState({});
  const Key = "72a7646a40703400682c093b811827fe";
  const BaseUrl = "https://api.themoviedb.org/3/";
  const imageUrl = "https://image.tmdb.org/t/p/w342";
  const { state } = useLocation();
  const refBack = useRef(state?.from ?? "/movies");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${BaseUrl}movie/${location.movieId}?api_key=${Key}`;
        const { data } = await axios.get(url);
        setTimeout(() => {
          setMovie(data);
        }, 500);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location]);
  const { original_title, poster_path, genres, overview, vote_average } = movie;

  const Genres = () => {
    if (genres) {
      return genres.map(({ name }) => {
        return <p key={name}>{name}</p>;
      });
    }
  };
  const Vote = () => {
    return Math.floor(Number(vote_average * 10)) + "%";
  };
  return (
    <>
      <Link to={refBack.current}>Back</Link>
      <div className="container_details">
        {!original_title ? (
          <Loader />
        ) : (
          <>
            <DetailsPage
              title={original_title}
              img={`${imageUrl}${poster_path}`}
              genres={Genres}
              vote={Vote}
              overview={overview}
            />
            <LinksDetails />
          </>
        )}
      </div>
    </>
  );
};
MovieDetails.propTypes = {
  location: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }),
};
export default MovieDetails;
