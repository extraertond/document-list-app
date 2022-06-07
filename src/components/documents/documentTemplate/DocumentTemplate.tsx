import { useSelector } from "react-redux";
import IDocument from "../../../models/IDocument";
import JumpLink from "../navigateLink";
import "./DocumentTemplate.scss";

type IProps = {
  document: IDocument;
};
const DocumentTemplate: React.FC<IProps> = ({ document }: IProps) => {
  const { hasNext, hasPrev } = useSelector((state: any) => state.documents);

  return (
    <>
      {document && (
        <div className="document">
          <div className="row">
            <JumpLink id={document.id - 1} enabled={hasPrev} direction="prev" />
            <JumpLink id={document.id + 1} enabled={hasNext} direction="next" />
          </div>
          <div className="row-vertical">
            <h1>{document.title}</h1>
            <p>{document.text}</p>
          </div>
          <div className="center-row">
            <img alt={`${document.title}-${document.type}`} src={document.image}></img>
          </div>
          <div className="row delete-container">
            <div>{document.date}</div>
            <button>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentTemplate;
