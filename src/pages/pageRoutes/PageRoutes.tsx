import { Routes as ReactRoutes, Route } from "react-router-dom";
import DocumentList from "../documentList";
import Document from "../document";
import NotFound from "../notFound";

const PageRoutes: React.FC<{}> = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<DocumentList />} />
      <Route path="/document/:id" element={<Document />} />
      <Route path="/add-document" element={<Document add={true} />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default PageRoutes;
