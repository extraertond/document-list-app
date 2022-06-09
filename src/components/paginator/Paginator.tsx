import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow.svg";
import actions from "../../redux/actions";
import "./Paginator.scss";

const Paginator: React.FC<{}> = () => {
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();
  const { page, nextPage, documents } = useSelector((state: any) => state.documents);

  useEffect(() => {
    let pageParam = searchParams.get("page");
    if (pageParam && documents.length) {
      dispatch(actions.setPage(pageParam ? parseInt(pageParam) : 0));
    }
  }, [searchParams, documents]);

  return (
    <div className="paginator-container">
      <Link className={`${page === 0 ? "disabled" : ""}`} to={`?page=${page - 1}`}>
        <img className="prev" alt="prev-page" src={arrowIcon}></img>
      </Link>
      <Link className={`${!nextPage ? "disabled" : ""}`} to={`?page=${nextPage}`}>
        <img className="next" alt="next-page" src={arrowIcon}></img>
      </Link>
    </div>
  );
};

export default Paginator;
