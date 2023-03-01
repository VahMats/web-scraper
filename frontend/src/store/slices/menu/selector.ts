import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

const selector = (state: RootState) => state.views;

export const menu = createSelector([selector], (state) => state.menu);

export default {
  menu
};
