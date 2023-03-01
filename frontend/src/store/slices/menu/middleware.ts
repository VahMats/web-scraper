import { AppDispatch } from "store/store";

import slice from "./slice";

const { setMenuActiveItem, setMenuOpenDrawer } = slice.actions;

const activateMenuItem = (value: string[]) => (dispatch: AppDispatch) => {
  dispatch(setMenuActiveItem(value));
};

const openMenuDrawer = (value: boolean) => (dispatch: AppDispatch) => {
  dispatch(setMenuOpenDrawer(value));
};

export default { activateMenuItem, openMenuDrawer };
