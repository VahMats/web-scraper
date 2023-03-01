import React, { memo, useMemo } from 'react';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { dispatch, useAppSelector } from '../../../store/hooks';
import { viewsMiddleware, viewsSelector } from '../../../store/slices/menu';
import MenuList from '../../MenuList';

interface SidebarProps {
  window?: Window;
}

const Sidebar = ({ window }: SidebarProps) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const drawerWidth = 260;
  const { drawerOpen } = useAppSelector(viewsSelector.menu);

  const container = window !== undefined ? () => window.document.body : undefined;

  const drawerSx = useMemo(
    () => ({
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        // background: theme.palette.secondary.light,
        color: theme.palette.text.primary,
        borderRight: 'none',
        [theme.breakpoints.up('md')]: {
          top: '73px'
        },
        padding: '0 5px'
      }
    }),
    [theme.breakpoints, theme.palette.text.primary]
  );

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={() => dispatch(viewsMiddleware.openMenuDrawer(!drawerOpen))}
        sx={drawerSx}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <MenuList />
      </Drawer>
    </Box>
  );
};

export default memo(Sidebar);
