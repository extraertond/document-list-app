import { PAGE_SIZE as pageSize } from "../../config/constants";
import { DOCUMENT_FORM_TEMPLATE as formTemplate, SEARCH_FORM_TEMPLATE as searchForm } from "../../config/forms";
import documentService from "../../services/documentService";
import formService from "../../services/formService";
import actionTypes from "../actionTypes";
import functions from "./func";

let initialState = {
  documents: [],
  pageDocuments: [],
  backupDocuments: [],
  nextPage: null,
  currentDocument: null,
  currentChecked: false,
  hasNext: false,
  hasPrev: false,
  searchText: "",
  page: 0,
  form: { ...formTemplate },
  searchForm: { ...searchForm },
  recentlyVisited: [],
};

const Document = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOAD_DOCUMENTS:
      return {
        ...state,
        currentDocument: null,
        currentChecked: false,
        hasNext: false,
        hasPrev: false,
        documents: payload,
        backupDocuments: payload,
        pageDocuments: payload.slice(0, pageSize),
        page: 0,
        nextPage: payload.length > pageSize ? 1 : null,
      };
    case actionTypes.SET_CURRENT_DOCUMENT:
      return { ...functions.setStateDocument(state, payload) };
    case actionTypes.SET_FORM_VALUE:
      let form = state.form;
      if (payload.field === "type") {
        form = formService.setForbiddenFields(documentService.mapType(payload.value), form);
      }
      form[payload.field].value = payload.value;
      return { ...state, form };
    case actionTypes.SAVE_DOCUMENT:
      return { ...functions.saveStateDocument(state) };
    case actionTypes.DELETE_DOCUMENT:
      state = functions.cleanDeletedDocument(state, payload);
      state = functions.cleanFilters(state);
      return functions.calculatePage(state, 0);
    case actionTypes.SET_PAGE:
      return functions.calculatePage(state, payload);
    case actionTypes.SET_SEARCH_TYPE:
      state.searchForm.type.value = payload;
      state.documents =
        payload === -1 ? state.backupDocuments : state.backupDocuments.filter((doc) => doc.type === payload);
      return functions.calculatePage(state, 0);
    case actionTypes.SET_SEARCH_TEXT:
      state.searchForm.text.value = payload;
      state.documents = state.backupDocuments.filter((doc) => doc.title.toLowerCase().includes(payload.toLowerCase()));
      return functions.calculatePage(state, 0);
    default:
      return state;
  }
};

export default Document;
