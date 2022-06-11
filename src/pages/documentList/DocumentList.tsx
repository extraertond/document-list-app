import { useSelector } from "react-redux";
import DocumentCard from "../../components/documents/documentCard";
import Paginator from "../../components/paginator";
import SearchBar from "../../components/searchBar";
import IDocument from "../../models/IDocument";
import "./DocumentList.scss";

const DocumentList: React.FC<{}> = () => {
  const { pageDocuments } = useSelector((state: any) => state.documents);
  return (
    <div className="list-container">
      <SearchBar />
      {pageDocuments.map((document: IDocument) => (
        <DocumentCard key={document.id} document={document} />
      ))}
      <Paginator />
    </div>
  );
};

export default DocumentList;
