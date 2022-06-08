import { DOCUMENT_FORM_TEMPLATE as formTemplate } from "../../config/forms";
import IDocument from "../../models/IDocument";
import IReducerAction from "../../models/IReducerAction";
import actionTypes from "../actionTypes";

let initialState = {
  documents: [],
  currentDocument: null,
  currentChecked: false,
  hasNext: false,
  hasPrev: false,
  searchText: "",
  form: { ...formTemplate },
};

const Document = (state = initialState, { type, payload }: IReducerAction) => {
  switch (type) {
    case actionTypes.LOAD_DOCUMENTS:
      return {
        ...state,
        currentDocument: null,
        currentChecked: false,
        hasNext: false,
        hasPrev: false,
        documents: payload,
      };
    case actionTypes.SET_CURRENT_DOCUMENT:
      const newState = { ...state };

      const currentDocument = state.documents.find((doc: IDocument) => doc.id.toString() === payload);
      let index;
      if (currentDocument) {
        newState.currentDocument = currentDocument;
        index = state.documents.indexOf(currentDocument);
      }
      newState.hasPrev = !!index && index > 0;
      newState.hasNext = index === 0 ? !!state.documents.length : !!index && index < state.documents.length - 1;
      newState.currentChecked = true;
      return newState;
    case actionTypes.SET_FORM_DOCUMENT:
      if (payload.id) {
        const current = state.documents.find((doc: IDocument) => doc.id.toString() === payload);
        // seteo el form con current
      }
      return { ...state };
    case actionTypes.SET_FORM_VALUE:
      console.log(payload);
      const form: any = state.form;
      form[payload.field].value = payload.value;
      console.log(form);
      return { ...state, form };
    case actionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };
    default:
      return state;
  }
};

export default Document;
