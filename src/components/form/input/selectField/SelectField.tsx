import IField from "../../../../models/IField";
import Input from "../Input";
import "./SelectField.scss";

type IProps = {
  onChange: any;
  field: IField;
  label: string;
  placeholder?: string | undefined;
  options: Array<any>;
};

const SelectField: React.FC<IProps> = ({ onChange, field, label, placeholder, options }: IProps) => {
  return (
    <Input field={field} label={label}>
      <select onChange={onChange} placeholder={placeholder}>
        {options.map((option) => (
          <option value={option.id}>{option.text}</option>
        ))}
      </select>
    </Input>
  );
};

export default SelectField;
