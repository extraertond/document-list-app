import { PAGE_SIZE as pageSize, DOCUMENT_TYPES as docTypes } from "../../config/constants";
import { DOCUMENT_FORM_TEMPLATE as formTemplate, SEARCH_FORM_TEMPLATE as searchForm } from "../../config/forms";
import documentService from "../../services/documentService";
import formService from "../../services/formService";
import actionTypes from "../actionTypes";

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
      const currentDocument = state.documents.find((doc) => doc.id.toString() === payload);
      let index;
      if (currentDocument) {
        state.currentDocument = currentDocument;
        index = state.documents.indexOf(currentDocument);
        state = setRecently(state, currentDocument);
      }
      state.hasPrev = !!index && index > 0;
      state.hasNext = index === 0 ? !!state.documents.length : !!index && index < state.documents.length - 1;
      state.currentChecked = true;
      return { ...state };
    case actionTypes.SET_FORM_VALUE:
      let form = state.form;
      if (payload.field === "type") {
        form = formService.setForbiddenFields(documentService.mapType(payload.value), form);
      }
      form[payload.field].value = payload.value;
      return { ...state, form };
    case actionTypes.SAVE_DOCUMENT:
      const formDocument = formService.checkForm(docTypes[parseInt(state.form.type.value)]?.text, state.form);
      if (formDocument.valid.value) {
        const lastDoc = state.documents[state.documents.length - 1];
        const newId = lastDoc ? lastDoc.id + 1 : 0;
        const newDoc = formService.extractDocument(newId, state.form);
        return {
          ...state,
          documents: [...state.documents, newDoc],
          backupDocuments: [...state.backupDocuments, newDoc],
          form: formService.clearForm(state.form),
        };
      }
      return { ...state, form: formDocument };
    case actionTypes.DELETE_DOCUMENT:
      state.documents = state.documents
        .filter((doc) => doc.id !== payload)
        .map((doc, index) => ({ ...doc, id: index }));
      state.backupDocuments = state.backupDocuments
        .filter((doc) => doc.id !== payload)
        .map((doc, index) => ({ ...doc, id: index }));
      state.recentlyVisited = state.recentlyVisited.filter((d) => d.id !== payload);
      state = cleanFilters(state);
      return calculatePage(state, 0);
    case actionTypes.SET_PAGE:
      return calculatePage(state, payload);
    case actionTypes.SET_SEARCH_TYPE:
      state.searchForm.type.value = payload;
      state.documents =
        payload === -1 ? state.backupDocuments : state.backupDocuments.filter((doc) => doc.type === payload);
      return calculatePage(state, 0);
    case actionTypes.SET_SEARCH_TEXT:
      state.searchForm.text.value = payload;
      state.documents = state.backupDocuments.filter((doc) => doc.title.toLowerCase().includes(payload.toLowerCase()));
      return calculatePage(state, 0);
    default:
      return state;
  }
};

const calculatePage = (state, targetPage) => {
  if (targetPage > 0 && pageSize * targetPage < state.documents.length) {
    let nextIndex = pageSize * targetPage;
    state.pageDocuments = state.documents.slice(nextIndex, nextIndex + pageSize);
    state.page = targetPage;
  } else {
    state.page = 0;
    state.pageDocuments = state.documents.slice(0, pageSize);
  }
  state.nextPage = pageSize * (state.page + 1) < state.documents.length ? state.page + 1 : null;
  return { ...state };
};

const cleanFilters = (state) => {
  state.page = 0;
  state.searchForm.text.value = "";
  state.searchForm.type.value = -1;
  return state;
};

const setRecently = (state, doc) => {
  if (state.recentlyVisited.find((d) => d.id === doc.id)) {
    return state;
  }
  if (state.recentlyVisited.length > 2) {
    state.recentlyVisited[0] = state.recentlyVisited[1];
    state.recentlyVisited[1] = state.recentlyVisited[2];
    state.recentlyVisited[2] = doc;
  } else {
    state.recentlyVisited.push(doc);
  }
  return state;
};

export default Document;
