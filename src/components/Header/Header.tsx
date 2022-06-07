import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import { HOME_URL as homeUrl } from "../../config/constants";
import SearchBar from "../SearchBar";
import "./Header.scss";

const Header: React.FC<{}> = () => {
  return (
    <div className="navbar-container">
      <div className="sections">
        <Link to={homeUrl}>
          <img alt="home-logo" src={homeIcon}></img>
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
