import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';

import { useAppSelector } from '../../store/hooks';
import { viewsSelector } from '../../store/slices/menu';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props: { children: ReactNode }) => {
  const theme = useTheme();
  const { children } = props;
  const { drawerOpen } = useAppSelector(viewsSelector.menu);

  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div
          style={{
            marginLeft: drawerOpen ? '260px' : '',
            padding: '10px'
          }}
        >
          <div style={{ transitionDelay: '600ms' }}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
