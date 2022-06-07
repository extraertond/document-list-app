import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arrowIcon from "../../../assets/icons/arrow.svg";
import "./JumpLink.scss";

type IProps = {
  id: number;
  enabled: boolean;
  direction: "prev" | "next";
};

const JumpLink: React.FC<IProps> = ({ id, enabled, direction }: IProps) => {
  const { t } = useTranslation();

  return (
    <Link
      className={`
        ${enabled ? "" : "disabled "}
        ${direction === "next" ? "reverse " : ""}
        row link
        `}
      to={`/document/${id}`}
    >
      <img className={direction} alt={`${direction}-document`} src={arrowIcon}></img>
      <span>{t(`document.${direction}`)}</span>
    </Link>
  );
};

export default JumpLink;
