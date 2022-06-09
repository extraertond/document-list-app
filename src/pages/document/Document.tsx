import DocumentForm from "../../components/documents/documentForm";
import DocumentTemplate from "../../components/documents/documentTemplate";

type IProps = {
  add?: boolean;
};

const Document: React.FC<IProps> = ({ add = false }: IProps) => {
  return <>{add ? <DocumentForm /> : <DocumentTemplate />}</>;
};

export default Document;
