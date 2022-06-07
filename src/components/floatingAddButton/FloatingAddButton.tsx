import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ADD_DOCUMENT_URL as addUrl } from "../../config/constants";
import "./FloatingAddButton.scss";

const FloatingAddButton: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== addUrl && (
        <Link to={addUrl}>
          <div className="floating-button">
            <button>{"+"}</button>
          </div>
        </Link>
      )}
    </>
  );
};

export default FloatingAddButton;
