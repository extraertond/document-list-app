import { fireEvent, screen } from "@testing-library/react";
import render from "../utils/render";
import en from "../../assets/locales/en/translation.json";
import "@testing-library/jest-dom";

// Component to test
import Form from "../../components/form";

describe("Test Form component", () => {
  test("render form and check submit action", () => {
    const exampleText = "Child Example";
    const mockHandler = jest.fn();
    render(
      <Form onSubmit={mockHandler}>
        <div>{exampleText}</div>
      </Form>
    );

    screen.getByText(exampleText);
    const button = screen.getByText(en.form.submit);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
