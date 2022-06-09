import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";
import mockedDocuments from "../assets/mocks/documents";
import IDocument from "../models/IDocument";

const useDocsLoad = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    dispatch(actions.loadDocuments(mockedDocuments as IDocument[]));
  }, []);
  return loaded;
};

export default useDocsLoad;
