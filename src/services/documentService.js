import { DOCUMENT_TYPES as types } from "../config/constants";

const mapType = (id) => {
  return types[id].text;
};

const documentService = {
  mapType,
};

export default documentService;
