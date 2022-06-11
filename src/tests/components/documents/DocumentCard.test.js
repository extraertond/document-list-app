/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import render from "../../utils/render";
import documentService from "../../../services/documentService";
import "@testing-library/jest-dom";

// Component to test
import DocumentCard from "../../../components/documents/documentCard";

describe("Test DocumentCard component", () => {
  const document = {
    id: 0,
    type: 0,
    title: "document title",
    date: "01/01/2000 00:00:00",
  };
  test("render content for simple type document", () => {
    const { container } = render(<DocumentCard document={document} />);
    screen.getByText(document.title);
    screen.getByText(documentService.mapType(document.type));

    expect(container.querySelector("a").getAttribute("href")).toBe(`/document/${document.id}`);
  });

  test("render content for custom type document", () => {
    document.type = 1;
    const { container } = render(<DocumentCard document={document} />);
    screen.getByText(document.title);
    screen.getByText(documentService.mapType(document.type));

    expect(container.querySelector("a").getAttribute("href")).toBe(`/document/${document.id}`);
  });

  test("render content for simple advanced document", () => {
    document.type = 2;
    const { container } = render(<DocumentCard document={document} />);
    screen.getByText(document.title);
    screen.getByText(documentService.mapType(document.type));

    expect(container.querySelector("a").getAttribute("href")).toBe(`/document/${document.id}`);
  });
});
