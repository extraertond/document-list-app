import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollButton from "./components/common/scrollButton";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import actions from "./redux/actions";
import mockedDocuments from "./assets/mocks/documents";
import "./App.scss";
import IDocument from "./models/IDocument";

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadDocuments(mockedDocuments as IDocument[]));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes></Routes>
      </BrowserRouter>
      <ScrollButton />
    </>
  );
};

export default App;
