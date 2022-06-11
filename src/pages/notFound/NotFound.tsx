import { useTranslation } from "react-i18next";
import errorImage from "../../assets/icons/404.png";
import "./NotFound.scss";

const NotFound: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-container">
      <h1 className="text">{t("not-found.title")}</h1>
      <img alt="not-found" src={errorImage}></img>
    </div>
  );
};

export default NotFound;
