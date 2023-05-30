import PropTypes from 'prop-types';
import { useState } from 'react';

export const Form = ({ value, onSubmit }) => {
  const [query, setQuery] = useState(value);

  const handleInputChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
  };

  return (
    <form className="form_movies" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        required
        value={query ?? ''}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
