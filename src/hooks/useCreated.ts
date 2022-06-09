import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_URL as homeUrl } from "../config/constants";
import actions from "../redux/actions";

const useCreated = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { form } = useSelector((state: any) => state.documents);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if (form.valid.value) {
      setCreated(true);
      navigate(`${homeUrl}?page=0`);
      dispatch(actions.setFormValue("valid", false));
    }
  }, [form.valid.value]);

  return created;
};

export default useCreated;
