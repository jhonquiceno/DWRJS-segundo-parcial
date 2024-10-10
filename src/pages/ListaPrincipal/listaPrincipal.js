import React from "react";
import SearchBox from "../../components/BarraBusqueda";
import TarjetaPlato from "../../components/TarjetaPlato";
import BotonHome from "../../components/BotonHome";

import usePlatos from "../../hooks/usePlato";
import { usePlatoContext } from "../../context/platoCtx";

import "./index.css";

const ListaPrincipal = () => {
  usePlatos();
  const { platos, loading } = usePlatoContext();

  return (
    <div className="App">
      <div className="Header">
        <BotonHome /> <SearchBox />
      </div>
      {loading && <p className="loading">Cargando...</p>}
      <div className="Recetario">
        {!loading &&
          platos.map((plato, index) => (
            <TarjetaPlato key={plato.idMeal} plato={plato}></TarjetaPlato>
          ))}
      </div>
    </div>
  );
};

export default ListaPrincipal;
