import { IGlobalState } from './state';

export const selectAllCurrencyState = (state: IGlobalState) => state.currency;
export const selectCurrentCurecy = (state: IGlobalState) => state.currency.currentCurrency;