import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const TarjetaPlato = ({ plato }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <div className="plato" onClick={() => handleClick(plato.idMeal)}>
        <img id="foto" data-testid="foto" src={plato.strMealThumb} alt={plato.strMeal}></img>
      </div>
    </div>
  );
};

export default TarjetaPlato;
