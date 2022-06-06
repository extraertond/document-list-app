import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import actions from "../../redux/actions";
import arrowIcon from "../../assets/icons/arrow.svg";
import "./Document.scss";

const Document: React.FC<{}> = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { documents, currentDocument, currentChecked, hasNext, hasPrev } = useSelector((state: any) => state.documents);

  useEffect(() => {
    if (params.id && documents.length) {
      dispatch(actions.setCurrentDocument(params.id));
    }
  }, [params.id, documents]);

  useEffect(() => {
    if (currentChecked && !currentDocument) {
      navigate("/404");
    }
  }, [currentDocument, currentChecked]);

  return (
    <>
      {currentDocument && (
        <div className="document">
          <div className="row">
            <Link className={`row link ${hasPrev ? "" : "disabled"}`} to={`/document/${currentDocument.id - 1}`}>
              <img className="prev" alt="prev-document" src={arrowIcon}></img>
              <span>{"Previous document"}</span>
            </Link>
            <Link className={`row link ${hasNext ? "" : "disabled"}`} to={`/document/${currentDocument.id + 1}`}>
              <span>{"Next document"}</span>
              <img alt="next-document" src={arrowIcon}></img>
            </Link>
          </div>
          <div className="row-vertical">
            <h1>{currentDocument.title}</h1>
            <p>{currentDocument.text}</p>
          </div>
          <div className="center-row">
            <img alt={`${currentDocument.title}-${currentDocument.type}`} src={currentDocument.image}></img>
          </div>
          <div className="row delete-container">
            <div>{currentDocument.date}</div>
            <button>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Document;
