import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import actions from "../redux/actions";

const useCurrentLoad = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { documents } = useSelector((state: any) => state.documents);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (params.id && documents.length) {
      setLoaded(true);
      dispatch(actions.setCurrentDocument(params.id));
    }
  }, [params.id, documents]);
  return loaded;
};

export default useCurrentLoad;
