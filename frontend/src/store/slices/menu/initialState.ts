import { ViewsProps } from "types/reduxTypes/menu";

export const getInitialState = (): ViewsProps => ({
  menu: {
    openItem: ["dashboard"],
    drawerOpen: false,
  },
});
