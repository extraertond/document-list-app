import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "../../pages/pageRoutes";
import Header from "../../components/header";
import FloatingAddButton from "../../components/floatingAddButton";
import useDocsLoad from "../../hooks/useDocsLoad";
import "./MainLayout.scss";

const MainLayout: React.FC<{}> = () => {
  useDocsLoad();

  return (
    <Router>
      <Header></Header>
      <PageRoutes></PageRoutes>
      <FloatingAddButton />
    </Router>
  );
};

export default MainLayout;
