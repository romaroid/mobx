import { store } from "rfx-core";

import AppState from "./AppState";
import Currency from "./Currency";
import Fee from "./Fee";

export default store.setup({
	appState: AppState,
	currency: Currency,
	fee: Fee
});
