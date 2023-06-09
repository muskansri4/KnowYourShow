import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeComponent.scss";

const HomeMenu = () => {
  return (
    <>
      <div className="mainMenu_div">
        <button type="button" className="btn btn-outline-info btn-sm">
          {" "}
          <NavLink exact activeClassName="active_class" to={"/"}>
            Know your Show
          </NavLink>
        </button>
        {" "}
        {/* <button type="button" class="btn btn-outline-info btn-sm">
          {" "}
          <NavLink exact activeClassName="active_class" to={"/b"}>
            ProjectTwoComponent
          </NavLink>
        </button> */}
      </div>
    </>
  );
};
export default HomeMenu;
