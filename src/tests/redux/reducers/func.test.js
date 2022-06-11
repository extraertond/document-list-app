import mockedDocuments from "../../../assets/mocks/documents";
import { PAGE_SIZE } from "../../../config/constants";
import { DOCUMENT_FORM_TEMPLATE, SEARCH_FORM_TEMPLATE } from "../../../config/forms";

// Service to test
import functions from "../../../redux/reducers/func";

describe("Test reducer functions", () => {
  const state = {
    documents: mockedDocuments,
    pageDocuments: [],
    backupDocuments: [],
    nextPage: null,
    currentDocument: null,
    currentChecked: false,
    hasNext: false,
    hasPrev: false,
    searchText: "",
    page: 0,
    form: { ...DOCUMENT_FORM_TEMPLATE },
    searchForm: { ...SEARCH_FORM_TEMPLATE },
    recentlyVisited: [],
  };
  test("calculatePage should set the new state because the targetPage its ok", () => {
    const expectedState = JSON.parse(JSON.stringify(state));

    expectedState.pageDocuments = state.documents.slice(PAGE_SIZE, PAGE_SIZE * 2);
    expectedState.page = 1;

    const response = functions.calculatePage(state, 1);
    expect(response).toEqual(expectedState);
  });

  test("calculatePage should set the new state because the targetPage its not ok", () => {
    const expectedState = JSON.parse(JSON.stringify(state));

    expectedState.pageDocuments = state.documents.slice(0, PAGE_SIZE);
    expectedState.page = 0;
    expectedState.nextPage = 1;

    const response = functions.calculatePage(state, 10);
    expect(response).toEqual(expectedState);
  });

  test("cleanFilters should set the new state because the targetPage its not ok", () => {
    const expectedState = JSON.parse(JSON.stringify(state));

    expectedState.page = 0;
    expectedState.searchForm.text.value = "";
    expectedState.searchForm.type.value = -1;

    const response = functions.cleanFilters(state);
    expect(response).toEqual(expectedState);
  });
});
