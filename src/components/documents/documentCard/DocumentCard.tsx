import { Link } from "react-router-dom";
import IDocument from "../../../models/IDocument";
import "./DocumentCard.scss";

type Props = {
  document: IDocument;
};

const DocumentCard: React.FC<Props> = ({ document }: Props) => {
  return (
    <div className="row card">
      <div className="row">
        {document.image && <img alt={`${document.title}-${document.type}`} src={document.image}></img>}
        <div className="row-vertical">
          <div className="title">{document.title}</div>
          <div className="subtitle">{document.type}</div>
        </div>
      </div>
      <div className="row">
        <Link to={`/document/${document.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DocumentCard;
