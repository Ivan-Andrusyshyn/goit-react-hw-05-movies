import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../style.css";

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const makeFetch = async () => {
      const Key = "72a7646a40703400682c093b811827fe";
      const BaseUrl = "https://api.themoviedb.org/3/";
      const url = `${BaseUrl}trending/movie/day?api_key=${Key}&language=en-US&&page=1`;
      const { results } = await axios(url).then((response) => response.data);
      setFilms([...results]);
    };
    makeFetch();
  }, []);
  const location = useLocation();
  return (
    <div>
      <h1>Trending today</h1>
      <ul className="home_list">
        {films.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
