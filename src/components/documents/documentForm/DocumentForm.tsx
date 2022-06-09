import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { DOCUMENT_TYPES as types } from "../../../config/constants";
import useCreated from "../../../hooks/useCreated";
import actions from "../../../redux/actions";
import formService from "../../../services/formService";
import Form from "../../form";
import SelectField from "../../form/input/selectField";
import TextField from "../../form/input/textField";
import "./DocumentForm.scss";

const DocumentForm: React.FC<{}> = () => {
  const { form } = useSelector((state: any) => state.documents);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useCreated();

  const changeValue = (field: string, value: any) => {
    dispatch(actions.setFormValue(field, value));
  };

  const checkedUrl = useMemo(() => formService.checkUrl(form.image.value), [form.image.value]);

  return (
    <Form onSubmit={() => dispatch(actions.SaveDocument())}>
      <div className="vertical-row form">
        <SelectField
          onChange={(value: string) => changeValue("type", value)}
          field={form.type}
          label={"form.type"}
          options={types}
        />
        <TextField
          onChange={(value: string) => changeValue("title", value)}
          field={form.title}
          label={"form.title"}
          placeholder={"form.title-placeholder"}
          maxLength={15}
        />
        <TextField
          onChange={(value: string) => changeValue("text", value)}
          field={form.text}
          label={"form.text"}
          placeholder={"form.text-placeholder"}
          large
        />
        <TextField
          onChange={(value: string) => changeValue("image", value)}
          field={form.image}
          label={"form.image"}
          placeholder={"form.image-placeholder"}
        />
        {checkedUrl && (
          <div className="row-vertical">
            <div className="preview-title">{t("form.preview-image")}</div>
            <img className="checked-image" alt="new-document" src={form.image.value}></img>
          </div>
        )}
      </div>
    </Form>
  );
};

export default DocumentForm;
