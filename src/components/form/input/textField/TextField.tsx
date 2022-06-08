import IField from "../../../../models/IField";
import Input from "../Input";
import "./TextField.scss";

type IProps = {
  onChange: any;
  field: IField;
  label: string;
  placeholder?: string | undefined;
  large?: boolean;
};

const TextField: React.FC<IProps> = ({ onChange, field, label, placeholder, large = false }: IProps) => {
  const TextInput = (props: any) => {
    if (large) {
      return <textarea {...props}></textarea>;
    } else {
      return <input {...props}></input>;
    }
  };

  return (
    <Input field={field} label={label}>
      <>
        {large ? (
          <textarea
            onChange={(e: any) => {
              onChange(e.target.value);
            }}
            value={field.value}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            onChange={(e: any) => {
              onChange(e.target.value);
            }}
            value={field.value}
            placeholder={placeholder}
          ></input>
        )}
      </>
    </Input>
  );
};

export default TextField;
