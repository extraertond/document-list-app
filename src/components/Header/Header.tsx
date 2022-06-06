import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import SearchBar from "../SearchBar";
import "./Header.scss";

const Header: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="sections">
        <img alt="home-logo" src={homeIcon} onClick={() => navigate("")}></img>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
