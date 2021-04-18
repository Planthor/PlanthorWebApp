import { createStore } from "redux";
import rootReducer from "../reducer/reducer";

export const store = createStore(rootReducer);
