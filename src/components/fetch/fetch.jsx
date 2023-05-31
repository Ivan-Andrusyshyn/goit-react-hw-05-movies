import axios from 'axios';
import { toast } from 'react-toastify';

const KeyUser = '72a7646a40703400682c093b811827fe';
const BaseUrl = 'https://api.themoviedb.org/3/';
const notify = () => toast.error('Please try again !');

export const fetchData = async (query, setLoading, setMovie) => {
  try {
    setLoading(true);
    if (!query) return;
    const url = `${BaseUrl}search/movie?query=${query}&include_adult=false&api_key=${KeyUser}`;
    const { results } = await axios(url).then(response => response.data);
    if (results.length === 0) {
      notify();
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
export const makeFetch = async setFilms => {
  const url = `${BaseUrl}trending/movie/day?api_key=${KeyUser}&language=en-US&&page=1`;
  const { results } = await axios(url).then(response => response.data);
  setFilms(results);
};
