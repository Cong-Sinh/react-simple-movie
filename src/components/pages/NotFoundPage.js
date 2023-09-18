import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[60px] mb-5">Oops! Page not found</h1>
        <NavLink
          to={"/"}
          className="block px-[15px] py-[10px] rounded bg-primary  font-medium"
        >
          Back to home
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundPage;
