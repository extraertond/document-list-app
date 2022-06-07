import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "../../pageRoutes";
import Header from "../../components/Header";
import FloatingAddButton from "../../components/floatingAddButton";
import mockedDocuments from "../../assets/mocks/documents";
import IDocument from "../../models/IDocument";
import actions from "../../redux/actions";
import "./MainLayout.scss";

const MainLayout: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadDocuments(mockedDocuments as IDocument[]));
  }, []);

  return (
    <Router>
      <Header></Header>
      <PageRoutes></PageRoutes>
      <FloatingAddButton />
    </Router>
  );
};

export default MainLayout;
