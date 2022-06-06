import errorImage from "../../assets/icons/404.png";
import "./NotFound.scss";

const NotFound: React.FC<{}> = () => {
  return (
    <div className="not-found-container">
      <h1 className="text">Not found</h1>
      <img alt="not-found" src={errorImage}></img>
    </div>
  );
};

export default NotFound;
