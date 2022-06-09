import { DOCUMENT_FORM_TEMPLATE as formTemplate, SEARCH_FORM_TEMPLATE as searchForm } from "./forms";

export const ADD_DOCUMENT_URL = "/add-document";
export const HOME_URL = "/";

export const DOCUMENT_TYPES = [
  { id: 0, text: "simple" },
  { id: 1, text: "custom" },
  { id: 2, text: "advanced" },
];

export const PAGE_SIZE = 5;

export const INITIAL_STATE = {
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
