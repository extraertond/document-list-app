import { useSelector } from "react-redux";
import DocumentCard from "../../components/documents/documentCard";
import IDocument from "../../models/IDocument";
import "./DocumentList.scss";

const DocumentList: React.FC<{}> = () => {
  const { documents } = useSelector((state: any) => state.documents);

  return (
    <div className="list-container">
      {documents.map((document: IDocument) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
};

export default DocumentList;
