import React, { forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import { dispatch, useAppSelector } from '../../../store/hooks';
import { viewsMiddleware, viewsSelector } from '../../../store/slices/menu';
// types
import { LinkTarget, NavItemType } from '../../../types';

interface NavItemProps {
  item: NavItemType;
  level: number;
}

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: NavItemProps) => {
  const { openItem } = useAppSelector(viewsSelector.menu);

  const Icon = item?.icon!;
  const itemIcon = item?.icon ? (
    <Icon stroke="1.5" color="primary" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: openItem.findIndex((id: number | string) => id === item?.id) > -1 ? 8 : 6,
        height: openItem.findIndex((id: number | string) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget: LinkTarget = '_self';

  if (item.target) {
    itemTarget = '_blank';
  }

  const itemHandler = (id: string) => {
    dispatch(viewsMiddleware.activateMenuItem([id]));
  };

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url!} target={itemTarget} />)
  };

  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);

    if (currentIndex > -1) {
      dispatch(viewsMiddleware.activateMenuItem([item.id!]));
    }
    // eslint-disable-next-line
  }, []);

  const ListItemButtonSx = useMemo(
    () => ({
      borderRadius: `8px`,
      mb: 0.5,
      alignItems: 'flex-start',
      backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
      py: level > 1 ? 1 : 1.25,
      pl: `${level * 24}px`
    }),
    [level]
  );

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={ListItemButtonSx}
      selected={openItem?.findIndex((id: number | string) => id === item.id) > -1}
      onClick={() => itemHandler(item.id!)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }} color="black">
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={openItem?.findIndex((id: number | string) => id === item.id) > -1 ? 'h5' : 'body1'}
            color="black"
          >
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default NavItem;
