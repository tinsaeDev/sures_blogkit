import React from "react";
import { Link } from "react-router-dom";

export const SocialShare = () => {
  return (
    <div className="tag-option mt-5 clearfix">
      <div className="col-lg-12 mb-5">
        <button className="btn btn-small btn-main btn-round-full">
          <Link to="/blogs" className="text-white bold">
            Read more articles
          </Link>
        </button>
      </div>
      <ul className="float-right list-inline">
        <li className="list-inline-item"> Share: </li>
        <li className="list-inline-item">
          <a href="#" target="_blank">
            <i className="fab fa-facebook-f" aria-hidden="true" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" target="_blank">
            <i className="fab fa-twitter" aria-hidden="true" />
          </a>
        </li>
         <li className="list-inline-item">
          <a href="#" target="_blank">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" target="_blank">
          <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
