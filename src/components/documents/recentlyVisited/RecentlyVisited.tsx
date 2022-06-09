import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import IDocument from "../../../models/IDocument";
import "./RecentlyVisited.scss";

const RecentlyVisited: React.FC<{}> = () => {
  const { t } = useTranslation();
  const { recentlyVisited } = useSelector((state: any) => state.documents);

  return (
    <div className="recently-container">
      {!!recentlyVisited.length && (
        <>
          <div className="title">{t("recently.recently-visited")}</div>
          <div>
            {recentlyVisited.map((doc: IDocument) => (
              <Link className="link" to={`/document/${doc.id}`}>
                {doc.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentlyVisited;
