import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/search?q=" + query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
