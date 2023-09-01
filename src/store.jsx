// store.js
import { createStore } from "redux";

const initialState = {
	currentLanguage: "EN-US",
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "TOGGLE_LANGUAGE":
			return {
				...state,
				currentLanguage: state.currentLanguage === "EN-US" ? "PT-BR" : "EN-US",
			};
		default:
			return state;
	}
}

const store = createStore(rootReducer);

export default store;
