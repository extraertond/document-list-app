import { createStore } from "redux";

import reducers from "./reducers";

const ConfigureStore = createStore(reducers);

export default ConfigureStore;
