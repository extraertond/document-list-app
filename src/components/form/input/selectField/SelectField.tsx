import { useTranslation } from "react-i18next";
import IField from "../../../../models/IField";
import Input from "../Input";

type IProps = {
  onChange: any;
  field: IField;
  label: string;
  placeholder?: string | undefined;
  options: Array<any>;
  defaultOption?: { id: number; text: string } | undefined;
};

const SelectField: React.FC<IProps> = ({ onChange, field, label, options, defaultOption }: IProps) => {
  const { t } = useTranslation();

  return (
    <Input field={field} label={label}>
      <select
        className={`${field.errored ? "errored" : ""}`}
        disabled={field.disabled}
        defaultValue="-1"
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled={!defaultOption} value={defaultOption ? defaultOption.id : "-1"}>
          {defaultOption ? defaultOption.text : t("form.select-default")}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.text}
          </option>
        ))}
      </select>
    </Input>
  );
};

export default SelectField;
