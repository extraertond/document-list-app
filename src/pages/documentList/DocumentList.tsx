import { useSelector } from "react-redux";
import DocumentCard from "../../components/documents/documentCard";
import { useEffect, useState } from "react";
import IDocument from "../../models/IDocument";
import "./DocumentList.scss";

const DocumentList: React.FC<{}> = () => {
  const { documents, searchText } = useSelector((state: any) => state.documents);

  return (
    <div className="list-container">
      {documents.map((document: IDocument) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
};

export default DocumentList;
