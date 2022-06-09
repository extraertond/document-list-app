import React, { FormEventHandler } from "react";
import { useTranslation } from "react-i18next";
import "./Form.scss";

type IProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitLabel?: string;
  children: JSX.Element;
};
const Form: React.FC<IProps> = ({ onSubmit, submitLabel = "form.submit", children }: IProps) => {
  const { t } = useTranslation();
  const submit = (e: any) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="card" onSubmit={submit}>
      {children}
      <button type="submit">{t(submitLabel)}</button>
    </form>
  );
};

export default Form;
