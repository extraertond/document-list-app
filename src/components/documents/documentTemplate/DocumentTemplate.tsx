import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_URL as homeUrl } from "../../../config/constants";
import useCurrentLoad from "../../../hooks/useCurrentLoad";
import useNotFoundRedirect from "../../../hooks/useNotFoundRedirect";
import actions from "../../../redux/actions";
import JumpLink from "../navigateLink";
import "./DocumentTemplate.scss";

const DocumentTemplate: React.FC<{}> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hasNext, hasPrev, currentDocument: document } = useSelector((state: any) => state.documents);
  useNotFoundRedirect();
  useCurrentLoad();

  const removeElement = () => {
    dispatch(actions.DeleteDocument(document.id));
    navigate(`${homeUrl}?page=0`);
  };

  return (
    <>
      {document && (
        <div className="document">
          <div className="subcontainer">
            <div className="row">
              <JumpLink id={document.id - 1} enabled={hasPrev} direction="prev" />
              <JumpLink id={document.id + 1} enabled={hasNext} direction="next" />
            </div>
            <div className="row-vertical">
              <h1>{document.title}</h1>
              <p>{document.text}</p>
            </div>
            {document.image && (
              <div className="center-row">
                <img alt={`${document.title}-${document.type}`} src={document.image}></img>
              </div>
            )}
            <div className="row delete-container">
              <div>{document.date}</div>
              <button onClick={removeElement}>{t("form.delete")}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentTemplate;
