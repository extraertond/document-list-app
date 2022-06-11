import { DOCUMENT_TYPES as types } from "../../config/constants";

// Service to test
import documentService from "../../services/documentService";

describe("Test document service", () => {
  test("mapType should return the text of the corresponding id type", () => {
    types.forEach((type) => {
      const response = documentService.mapType(type.id);
      expect(response).toBe(type.text);
    });
  });
});
