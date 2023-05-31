import PropTypes from 'prop-types';
const DetailsPage = ({ title, img, genres, vote, overview }) => {
  return (
    <div className="details_page">
      <img src={img} alt="Movie Image" />
      <div>
        <h2>{title}</h2>
        <p>User Score:{vote()}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <div className="genres_wrapp">{genres()}</div>
      </div>
    </div>
  );
};
DetailsPage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  genres: PropTypes.func.isRequired,
  vote: PropTypes.func.isRequired,
  overview: PropTypes.string.isRequired,
};
export default DetailsPage;
