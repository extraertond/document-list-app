import IDocument from "../models/IDocument";
import actionTypes from "./actionTypes";

const loadDocuments = (documents: IDocument[]) => ({ type: actionTypes.LOAD_DOCUMENTS, payload: documents });

const setCurrentDocument = (id: string) => ({ type: actionTypes.SET_CURRENT_DOCUMENT, payload: id });

const setFormValue = (field: string, value: string) => ({
  type: actionTypes.SET_FORM_VALUE,
  payload: { field, value },
});

const SaveDocument = () => ({ type: actionTypes.SAVE_DOCUMENT });

const DeleteDocument = (id: number) => ({ type: actionTypes.DELETE_DOCUMENT, payload: id });

const setSearchText = (searchText: string) => ({
  type: actionTypes.SET_SEARCH_TEXT,
  payload: searchText,
});

const setSearchType = (searchType: number) => ({
  type: actionTypes.SET_SEARCH_TYPE,
  payload: searchType,
});

const setPage = (page: number) => ({
  type: actionTypes.SET_PAGE,
  payload: page,
});

const actions = {
  loadDocuments,
  setCurrentDocument,
  setFormValue,
  SaveDocument,
  DeleteDocument,
  setSearchText,
  setSearchType,
  setPage,
};

export default actions;
