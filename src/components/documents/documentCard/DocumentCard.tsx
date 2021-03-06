import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import IDocument from "../../../models/IDocument";
import documentService from "../../../services/documentService";

type IProps = {
  document: IDocument;
};

const DocumentCard: React.FC<IProps> = ({ document }: IProps) => {
  const { t } = useTranslation();

  return (
    <div className="row card">
      <div className="row">
        {document.image && <img alt={`${document.title}-${document.type}`} src={document.image}></img>}
        <div className="row-vertical">
          <div className="title">{document.title}</div>
          <div className="subtitle">{documentService.mapType(document.type)}</div>
        </div>
      </div>
      <div className="row">
        <Link to={`/document/${document.id}`}>
          <button>{t("document.details")}</button>
        </Link>
      </div>
    </div>
  );
};

export default DocumentCard;
