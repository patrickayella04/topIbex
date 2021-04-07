import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HamburNavi() {
  return (
    <div className="burger">
      <FontAwesomeIcon icon={faBars} size="2x" />
    </div>
  );
}

export default HamburNavi;
