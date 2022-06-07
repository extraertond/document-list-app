import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DocumentForm from "../../components/documents/documentForm";
import DocumentTemplate from "../../components/documents/documentTemplate";
import actions from "../../redux/actions";
import "./Document.scss";

type IProps = {
  add?: boolean;
};

const Document: React.FC<IProps> = ({ add = false }: IProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentDocument: document, currentChecked } = useSelector((state: any) => state.documents);
  const edit = false;

  useEffect(() => {
    if (params.id) {
      dispatch(actions.setCurrentDocument(params.id));
    }
  }, [params.id]);

  useEffect(() => {
    if (currentChecked && !document) {
      navigate("/404");
    }
  }, [document, currentChecked]);

  return (
    <>
      {add || edit ? (
        <DocumentForm add={add} document={document} />
      ) : (
        document && <DocumentTemplate document={document} />
      )}
    </>
  );
};

export default Document;
