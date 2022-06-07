import { Routes as ReactRoutes, Route } from "react-router-dom";
import DocumentList from "../pages/documentList";
import Document from "../pages/document";
import NotFound from "../pages/notFound";

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
