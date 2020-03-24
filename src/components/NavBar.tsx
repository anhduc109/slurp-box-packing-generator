import React from "react";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-row">
        <img
          className="logo"
          alt="slurp logo"
          src="https://www.slurp.coffee/wp-content/uploads/2018/03/slurp_logotype_rgb_black_standard_42px.png"
        />
        <div className="nav-bar-menu">
          <div className="menu-item bold">Subscribe</div>
          <div className="menu-item">Coffee</div>
          <div className="menu-item">Teas</div>
          <div className="menu-item">Equipment</div>
          <div className="menu-item">Gifts</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
