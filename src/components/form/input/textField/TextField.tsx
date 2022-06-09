import { useTranslation } from "react-i18next";
import IField from "../../../../models/IField";
import Input from "../Input";
import "./TextField.scss";

type IProps = {
  onChange: any;
  field: IField;
  label: string;
  maxLength?: number | undefined;
  placeholder?: string;
  large?: boolean;
};

const TextField: React.FC<IProps> = ({
  onChange,
  field,
  label,
  maxLength,
  placeholder = "",
  large = false,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <Input field={field} label={label}>
      <>
        {large ? (
          <textarea
            maxLength={maxLength ? maxLength : 250}
            className={`${field.errored ? "errored" : ""}`}
            disabled={field.disabled}
            onChange={(e: any) => {
              onChange(e.target.value);
            }}
            value={field.value}
            placeholder={t(placeholder)}
          ></textarea>
        ) : (
          <input
            maxLength={maxLength ? maxLength : 100}
            className={`${field.errored ? "errored" : ""}`}
            disabled={field.disabled}
            onChange={(e: any) => {
              onChange(e.target.value);
            }}
            value={field.value}
            placeholder={t(placeholder)}
          ></input>
        )}
      </>
    </Input>
  );
};

export default TextField;
