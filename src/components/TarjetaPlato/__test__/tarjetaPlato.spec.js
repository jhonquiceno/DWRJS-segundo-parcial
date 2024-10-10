import { fireEvent, render, screen } from "@testing-library/react";
import TarjetaPlato from "../index";
import { MCK_PLATO } from "../../../mocks/mckTarjetaPlato";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom");

describe("MealImage", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  it("GIVEN plato concreto WHEN la carta se renderiza THEN deberia renderizar info correcta", () => {
    render(<TarjetaPlato plato={MCK_PLATO} />);
    expect(screen.getByTestId("foto")).toHaveStyle({
        backgroundImage: "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg"
    })
  });

  it("GIVEN componente renderizado WHEN se hace click THEN navega al detalle", () => {
    render(<TarjetaPlato plato={MCK_PLATO} />);
    fireEvent.click(screen.getByTestId("foto"));
    expect(mockNavigate).toHaveBeenCalledWith("/detail/53071");
  })
});
