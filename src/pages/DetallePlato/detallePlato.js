import "./index.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMealById } from "../../services/mealService";

import SearchBox from "../../components/BarraBusqueda";
import BotonHome from "../../components/BotonHome";

const DetallePlato = () => {
  const { idPlato } = useParams();
  const [plato, setPlato] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlato = async () => {
      try {
        const response = await FetchMealById(idPlato);
        setPlato(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPlato();
  }, [idPlato]);

  return (
    <>
      {!loading && plato && (
        <div className="App">
          <div className="Header">
            <BotonHome /> <SearchBox />
          </div>
          <div className="Content">
            <img id="fotoDetalle" src={plato.strMealThumb} alt={plato.strMeal}></img>
            <div className="Texto">
              <div className="Title"> {plato.strMeal}</div>
              <div className="Recipe"> {plato.strInstructions}</div>
            </div>
          </div>
        </div>
      )}
      {loading && <p className="loading">Cargando...</p>}
      {!loading && !plato && <p>404 - No se ha encontrado el plato.</p>}
    </>
  );
};

export default DetallePlato;
