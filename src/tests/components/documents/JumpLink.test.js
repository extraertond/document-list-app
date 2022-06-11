/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import render from "../../utils/render";
import en from "../../../assets/locales/en/translation.json";
import "@testing-library/jest-dom";

// Component to test
import JumpLink from "../../../components/documents/jumpLink";

describe("Test JumpLink component", () => {
  const jumpProps = {
    id: 1,
    enabled: true,
    direction: "next",
  };
  test("render content for next link enabled", () => {
    render(<JumpLink {...jumpProps} />);

    screen.getByText(en.document.next);
    screen.getByAltText("next-document");

    expect(document.querySelector("a").getAttribute("href")).toBe(`/document/${jumpProps.id}`);
  });

  test("render content for previous link enabled", () => {
    jumpProps.direction = "prev";

    render(<JumpLink {...jumpProps} />);

    screen.getByText(en.document.prev);
    screen.getByAltText("prev-document");
    expect(document.querySelector("a").getAttribute("href")).toBe(`/document/${jumpProps.id}`);
  });

  test("render content for previous link disabled", () => {
    jumpProps.enabled = false;

    const { container } = render(<JumpLink {...jumpProps} />);

    screen.getByText(en.document.prev);
    screen.getByAltText("prev-document");
    expect(document.querySelector("a").getAttribute("href")).toBe(`/document/${jumpProps.id}`);
    expect(container.firstChild.classList.contains("disabled")).toBe(true);
  });
});
