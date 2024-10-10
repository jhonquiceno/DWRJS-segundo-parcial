export const actions = {
  SET_PLATOS: "SET_PLATOS",
  SET_PLATO: "SET_PLATO",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

export const initialState = {
  platos: [],
  plato: {},
  loading: false,
  error: null,
  metadata: {
    iniciales: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
};

export const platoReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PLATOS:
      return { ...state, platos: action.payload };
    case actions.SET_PLATO:
      return { ...state, plato: action.payload };
    case actions.SET_LOADING:
      return { ...state, loading: action.payload };
    case actions.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
