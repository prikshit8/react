
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const SearchComp = () => {
  const [search, setSearch] = useState("");

  const api = useDebounce((val) => {
    console.log(val);
  }, 400);

// _.debounce(fn,delay);

  const handleChange = (e) => {
    api(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <input value={search} onChange={handleChange} />
    </div>
  );
};

export default SearchComp;
