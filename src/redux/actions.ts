import IDocument from "../models/IDocument";
import actionTypes from "./actionTypes";

const loadDocuments = (documents: IDocument[]) => ({ type: actionTypes.LOAD_DOCUMENTS, payload: documents });

const setCurrentDocument = (id: string) => ({ type: actionTypes.SET_CURRENT_DOCUMENT, payload: id });

const setSearchText = (searchText: string) => ({
  type: actionTypes.SET_SEARCH_TEXT,
  payload: searchText,
});

const setSearchType = (searchType: string) => ({
  type: actionTypes.SET_SEARCH_TYPE,
  payload: searchType,
});

const actions = {
  loadDocuments,
  setCurrentDocument,
  setSearchText,
  setSearchType,
};

export default actions;
