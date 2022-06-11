/* eslint-disable testing-library/no-node-access */
import render from "../utils/render";
import { ADD_DOCUMENT_URL as addUrl } from "../../config/constants";
import "@testing-library/jest-dom";

// Component to test
import FloatingAddButton from "../../components/floatingAddButton";

describe("Test FloatingAddButton component", () => {
  test("render content for floating add button", () => {
    render(<FloatingAddButton />);

    expect(document.querySelector("a").getAttribute("href")).toBe(addUrl);
  });
});
