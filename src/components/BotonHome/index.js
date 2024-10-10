import React from "react";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import "./index.css";

const BotonHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <div className="boton" onClick={() => handleClick()}>
      <FaHome className="iconHome" />
    </div>
  );
};

export default BotonHome;
