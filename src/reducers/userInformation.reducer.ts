import { StoreAction } from "AppStore";

interface UserInformation {
  isInvestor: boolean;
}

const defaultState: UserInformation = {
  isInvestor: false,
}

export let SET_USER_INFORMATION = "SET_USER_INFORMATION";

export const userInformationReducer = (state = defaultState, action: StoreAction): UserInformation => {
  const { type, data } = action;
  if (type === SET_USER_INFORMATION) return data;
  return state;
}