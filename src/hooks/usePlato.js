import { useCallback, useEffect } from "react";
import { usePlatoDispatch } from "../context/platoCtx";
import { actions } from "../context/platoReducer";
import { usePlatoContext } from "../context/platoCtx";
import { useFilterContext } from "../context/filtroCtx";

import {
  FetchMealByFirstLetter,
  SearchMealByName,
} from "../services/mealService";

const usePlatos = () => {
  const dispatch = usePlatoDispatch();
  const { filters } = useFilterContext();
  const { metadata } = usePlatoContext();

  const fetchAllPlatos = async () => {
    let allPlatos = [];

    for (const index in metadata.iniciales) {
      allPlatos.push(await FetchMealByFirstLetter(metadata.iniciales[index]));
    }

    return allPlatos;
  };

  const fetchFilteredPlatos = async (filter) => {
    let filteredPlatos = [];

    filteredPlatos.push(await SearchMealByName(filter));

    return filteredPlatos;
  };

  const fetchPlatos = useCallback(async () => {
    dispatch({ type: actions.SET_LOADING, payload: true });
    try {
      if (filters.search) {
        const filteredPlatos = await fetchFilteredPlatos(filters.search);
        const platosResponse = [];
        for (let i = 0; i < filteredPlatos.length; i++) {
          if (filteredPlatos[i] != null) {
              platosResponse.push(filteredPlatos[i]);
          }
        }

        if (platosResponse.length > 0) {
          dispatch({ type: actions.SET_PLATOS, payload: platosResponse[0] });
        } else {
          dispatch({ type: actions.SET_PLATOS, payload: [] });
        }
      } else {
        const allPlatos = await fetchAllPlatos();
        const platosResponse = [];
        for (let i = 0; i < allPlatos.length; i++) {
          if (allPlatos[i] != null) {
            for (let j = 0; j < allPlatos[i].length; j++) {
              platosResponse.push(allPlatos[i][j]);
            }
          }
        }

        dispatch({ type: actions.SET_PLATOS, payload: platosResponse });
      }
    } catch (error) {
      console.error("Error recuperando platos: ", error);
      dispatch({ type: actions.SET_PLATOS, payload: [] });
    }

    dispatch({ type: actions.SET_LOADING, payload: false });
  }, [dispatch, filters, metadata]);

  useEffect(() => {
    fetchPlatos();
  }, [fetchPlatos]);
};

export default usePlatos;
