import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DOCUMENT_TYPES as types } from "../../../config/constants";
import { DOCUMENT_FORM_TEMPLATE } from "../../../config/forms";
import actions from "../../../redux/actions";
import Form from "../../form";
import SelectField from "../../form/input/selectField";
import TextField from "../../form/input/textField";
import "./DocumentForm.scss";

type IProps = {
  add: boolean;
};

const DocumentForm: React.FC<IProps> = ({ add }: IProps) => {
  const form = { ...DOCUMENT_FORM_TEMPLATE };
  const dispatch = useDispatch();

  const changeValue = (field: string, value: any) => {
    console.log(field, value);
    dispatch(actions.setFormValue(field, value));
  };

  return (
    <Form valid={form.valid} onSubmit={() => console.log("submit")}>
      <div className="vertical-row">
        <SelectField
          onChange={(value: string) => changeValue("type", value)}
          field={form.type}
          label={"form.type"}
          placeholder={"form.type-placeholder"}
          options={types}
        />
        <TextField
          onChange={(value: string) => changeValue("title", value)}
          field={form.title}
          label={"form.title"}
          placeholder={"form.title-placeholder"}
        />
        <TextField
          onChange={(value: string) => changeValue("image", value)}
          field={form.image}
          label={"form.image"}
          placeholder={"form.image-placeholder"}
        />
        <TextField
          onChange={(value: string) => changeValue("text", value)}
          field={form.text}
          label={"form.text"}
          placeholder={"form.text-placeholder"}
          large
        />
      </div>
    </Form>
  );
};

export default DocumentForm;
