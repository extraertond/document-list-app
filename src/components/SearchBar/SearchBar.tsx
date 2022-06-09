import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { DOCUMENT_TYPES as types } from "../../config/constants";
import actions from "../../redux/actions";
import SelectField from "../form/input/selectField";
import TextField from "../form/input/textField";
import "./SearchBar.scss";

const SearchBar: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { searchForm } = useSelector((state: any) => state.documents);

  const changeSearchType = (e: string) => {
    dispatch(actions.setSearchType(parseInt(e)));
  };

  const changeSearchText = (e: string) => {
    dispatch(actions.setSearchText(e));
  };

  return (
    <div className="search-container">
      <SelectField
        label={t("form.filter-type")}
        options={types}
        onChange={(e: string) => changeSearchType(e)}
        field={searchForm.text}
        defaultOption={{ id: -1, text: "All" }}
      />
      <TextField label={t("form.filter-text")} onChange={(e: string) => changeSearchText(e)} field={searchForm.text} />
    </div>
  );
};

export default SearchBar;
