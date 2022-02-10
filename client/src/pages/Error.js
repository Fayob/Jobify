import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFound} alt="not found" />
        <h1>Ooops, You're in the wrong directory</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/"> Back Home </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
