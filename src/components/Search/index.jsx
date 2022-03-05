import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchActionTypes,
  useSearchContext,
} from "../../contexts/useSearchContext";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const { dispatch } = useSearchContext();

  const updateSearchValue = (value) => {
    setSearchValue(value);

    dispatch({
      type: SearchActionTypes.MODIFY_SEARCH,
      search: value,
    });
  };

  return (
    <input
      className={`w-full md:w-60 text-input transition duration-700 outline-none 
                    rounded-sm px-1 py-2 
                    bg-gray-300 focus:ring-2 focus:ring-gray-900 ::placeholder-text-gray-700`}
      type="text"
      value={searchValue}
      onChange={(e) => updateSearchValue(e.target.value)}
      placeholder="Search by topic"
    />
  );
};

export default Search;
