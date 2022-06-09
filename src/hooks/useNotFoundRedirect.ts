import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useNotFoundRedirect = () => {
  const navigate = useNavigate();
  const { currentDocument: document, currentChecked } = useSelector((state: any) => state.documents);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (currentChecked && !document) {
      setRedirected(true);
      navigate("/404");
    }
  }, [document, currentChecked]);

  return redirected;
};

export default useNotFoundRedirect;
