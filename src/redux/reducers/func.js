import { PAGE_SIZE as pageSize, DOCUMENT_TYPES as docTypes } from "../../config/constants";
import formService from "../../services/formService";

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

const cleanDeletedDocument = (state, id) => {
  state.documents = state.documents.filter((doc) => doc.id !== id).map((doc, index) => ({ ...doc, id: index }));
  state.backupDocuments = state.backupDocuments
    .filter((doc) => doc.id !== id)
    .map((doc, index) => ({ ...doc, id: index }));
  state.recentlyVisited = state.recentlyVisited.filter((d) => d.id !== id);

  return state;
};

const setStateDocument = (state, id) => {
  state = functions.cleanFilters(state);
  state.pageDocuments = state.backupDocuments;
  state.documents = state.backupDocuments;
  const currentDocument = state.documents.find((doc) => doc.id.toString() === id);
  let index;
  if (currentDocument) {
    state.currentDocument = currentDocument;
    index = state.documents.indexOf(currentDocument);
    state = functions.setRecently(state, currentDocument);
  }
  state.hasPrev = !!index && index > 0;
  state.hasNext = index === 0 ? !!state.documents.length : !!index && index < state.documents.length - 1;
  state.currentChecked = true;

  return state;
};

const saveStateDocument = (state) => {
  const formDocument = formService.checkForm(docTypes[parseInt(state.form.type.value)]?.text, state.form);
  if (formDocument.valid.value) {
    const lastDoc = state.documents[state.documents.length - 1];
    const newId = lastDoc ? lastDoc.id + 1 : 0;
    const newDoc = formService.extractDocument(newId, state.form);
    state.documents = [...state.documents, newDoc];
    state.backupDocuments = [...state.backupDocuments, newDoc];
    state.form = formService.clearForm(state.form);
    return state;
  }
  state.form = formDocument;

  return state;
};

const functions = {
  calculatePage,
  cleanFilters,
  setRecently,
  cleanDeletedDocument,
  setStateDocument,
  saveStateDocument,
};

export default functions;
