import { Routes as ReactRoutes, Route } from "react-router-dom";
import Document from "../pages/document";
import DocumentList from "../pages/documentList";
import NotFound from "../pages/notFound";

const Routes: React.FC<{}> = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<DocumentList />} />
      <Route path="/document/:id" element={<Document />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
