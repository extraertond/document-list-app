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
};

const Document = (state = initialState, { type, payload }: IReducerAction) => {
  switch (type) {
    case actionTypes.LOAD_DOCUMENTS:
      return {
        ...state,
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
