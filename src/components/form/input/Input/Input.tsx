import { useTranslation } from "react-i18next";
import IField from "../../../../models/IField";
import "./Input.scss";

type IProps = {
  field: IField;
  label: string;
  children: JSX.Element;
};

const Input: React.FC<IProps> = ({ field, label, children }: IProps) => {
  const { t } = useTranslation();

  return (
    <div className="vertical-row field">
      <label>{t(label)}</label>
      {children}
      {field.errored && <span className="error-text">{t(field.errorText)}</span>}
    </div>
  );
};

export default Input;
