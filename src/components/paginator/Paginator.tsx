import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow.svg";
import useSetPage from "../../hooks/useSetPage";
import "./Paginator.scss";

const Paginator: React.FC<{}> = () => {
  const { page, nextPage } = useSelector((state: any) => state.documents);
  useSetPage();

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
