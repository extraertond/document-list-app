import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { useState } from "react";
import "./SearchBar.scss";

const SearchBar: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state: any) => state.documents);

  const [search, setSearch] = useState(searchText);

  const changeSearchText = (e: any) => {
    setSearch(e.target.value);
    dispatch(actions.setSearchText(e.target.value));
  };

  return (
    <div className="navbar-container">
      <input type="text" value={search} onChange={changeSearchText} placeholder={"header.find"}></input>
    </div>
  );
};

export default SearchBar;
