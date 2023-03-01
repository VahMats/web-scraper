import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { dispatch, useAppSelector } from '../../../store/hooks';
import { viewsMiddleware, viewsSelector } from '../../../store/slices/menu';

import HeaderStyled from './HeaderStyled';

const Header = () => {
  const theme = useTheme();
  const { drawerOpen } = useAppSelector(viewsSelector.menu);

  return (
    <HeaderStyled theme={theme}>
      <div className="main-component">
        <Box className="main-box">
          <Box component="span" sx={{ flexGrow: 1 }}>
            <h3 style={{ margin: 'auto' }}>Web Scraper</h3>
          </Box>
          <Avatar
            className="avatar"
            variant="rounded"
            onClick={() => dispatch(viewsMiddleware.openMenuDrawer(!drawerOpen))}
          >
            <MenuIcon />
          </Avatar>
        </Box>
      </div>
    </HeaderStyled>
  );
};

export default Header;
