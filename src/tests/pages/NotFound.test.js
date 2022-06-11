import { screen } from "@testing-library/react";
import render from "../utils/render";
import en from "../../assets/locales/en/translation.json";
import "@testing-library/jest-dom";

// Component to test
import NotFound from "../../pages/notFound";

describe("Test NotFound page", () => {
  test("render not found text", () => {
    render(<NotFound />);

    screen.getByText(en["not-found"].title);
    screen.getByAltText("not-found");
  });
});
