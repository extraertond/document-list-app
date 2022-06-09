import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import { HOME_URL as homeUrl } from "../../config/constants";
import RecentlyVisited from "../documents/recentlyVisited";
import "./Header.scss";

const Header: React.FC<{}> = () => {
  return (
    <div className="navbar-container">
      <div className="sections">
        <Link to={`${homeUrl}?page=0`}>
          <img alt="home-logo" src={homeIcon}></img>
        </Link>
        <RecentlyVisited />
      </div>
    </div>
  );
};

export default Header;
