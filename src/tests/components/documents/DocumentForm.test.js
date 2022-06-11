import { screen } from "@testing-library/react";
import render from "../../utils/render";
import en from "../../../assets/locales/en/translation.json";
import "@testing-library/jest-dom";

// Component to test
import DocumentForm from "../../../components/documents/documentForm";

describe("Test DocumentForm component", () => {
  test("render inputs with placeholders for empty form", () => {
    render(<DocumentForm />);

    screen.getByPlaceholderText(en.form["title-placeholder"]);
    screen.getByPlaceholderText(en.form["text-placeholder"]);
    screen.getByPlaceholderText(en.form["image-placeholder"]);
  });
});
