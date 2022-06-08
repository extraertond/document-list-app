import React, { FormEventHandler } from "react";
import { useTranslation } from "react-i18next";
import "./Form.scss";

type IProps = {
  valid: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitLabel?: string;
  children: JSX.Element;
};
const Form: React.FC<IProps> = ({ valid, onSubmit, submitLabel = "form.submit", children }: IProps) => {
  const { t } = useTranslation();
  return (
    <form className="card" onSubmit={onSubmit}>
      {children}
      <button type="submit">{t(submitLabel)}</button>
    </form>
  );
};

export default Form;
