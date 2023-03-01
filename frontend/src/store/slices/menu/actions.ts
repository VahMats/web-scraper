import { IAction, SliceReducers } from "store/store";
import { ViewsProps } from "types/reduxTypes/menu";

const actions: SliceReducers<ViewsProps> = {
  setMenuActiveItem(state, action: IAction<string[]>) {
    state.menu.openItem = action.payload;
  },
  setMenuOpenDrawer(state, action: IAction<boolean>) {
    state.menu.drawerOpen = action.payload;
  },
};

export default actions;
