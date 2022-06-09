import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import actions from "../redux/actions";

const useSetPage = () => {
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();

  const { documents } = useSelector((state: any) => state.documents);
  const [setted, setSetted] = useState(false);

  useEffect(() => {
    let pageParam = searchParams.get("page");
    if (pageParam && documents.length) {
      setSetted(true);
      dispatch(actions.setPage(pageParam ? parseInt(pageParam) : 0));
    }
  }, [searchParams, documents]);

  return setted;
};

export default useSetPage;
