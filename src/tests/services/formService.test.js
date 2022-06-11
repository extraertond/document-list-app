import { DOCUMENT_TYPES as types } from "../../config/constants";
import { DOCUMENT_FORM_TEMPLATE as form } from "../../config/forms";

// Service to test
import formService from "../../services/formService";

describe("Test form service", () => {
  test("setForbiddenFields for simple type should return the form with image and text disabled", () => {
    const expectedForm = JSON.parse(JSON.stringify(form));
    expectedForm.image.disabled = true;
    expectedForm.text.disabled = true;
    const response = formService.setForbiddenFields("simple", form);
    expect(response).toEqual(expectedForm);
  });

  test("checkEmptyField with filled field should return the form with the field without errors", () => {
    form.image.value = "http://www.image.com/image.jpg";
    const response = formService.checkEmptyField("image", form);
    expect(response.image.errored).toEqual(false);
    expect(response.image.errorText).toEqual("");
  });

  test("checkEmptyField with empty field should return the form with the empty error for the field", () => {
    form.image.value = "";
    const response = formService.checkEmptyField("image", form);
    expect(response.image.errored).toEqual(true);
    expect(response.image.errorText).toEqual("form.error.mandatory");
  });
});
