import { legacy_createStore as createStore, applyMiddleware, combineReducers, Store } from 'redux'
import { HYDRATE, createWrapper, MakeStore } from 'next-redux-wrapper'
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { isDev } from './AppConfigs'
import { userInformationReducer } from 'reducers/userInformation.reducer'

export const RESET_STORE = 'RESET_STORE';

const rootReducer = combineReducers({
  userInformation: userInformationReducer,
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return rootReducer(state, action);
  }
}

export let store: Store;

export const makeStore: MakeStore<any> = () => {
  const newStore = createStore(reducer, isDev ? composeWithDevTools(applyMiddleware()) : undefined);
  store = newStore;
  return newStore;
};

export const wrapper = createWrapper(makeStore);

export type StoreState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<StoreState> = useReduxSelector

export type StoreAction = {
  type: string,
  [name: string]: any
}
