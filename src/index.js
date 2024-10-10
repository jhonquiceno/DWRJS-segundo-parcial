import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PlatoProvider } from "./context/platoCtx";
import { FilterProvider } from "./context/filtroCtx";

import ListaPrincipal from "./pages/ListaPrincipal/listaPrincipal";
import DetallePlato from "./pages/DetallePlato/detallePlato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaPrincipal />,
  },
  {
    path: "/detail/:idPlato",
    element: <DetallePlato />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PlatoProvider>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </PlatoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
