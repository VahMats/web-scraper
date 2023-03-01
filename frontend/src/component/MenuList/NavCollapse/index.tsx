import React, { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';

// eslint-disable-next-line import/no-cycle
import { NavGroupProps } from '../NavGroup';
// project imports
import NavItem from '../NavItem';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

interface NavCollapseProps {
  menu: NavGroupProps['item'];
  level: number;
}

const NavCollapse = ({ menu, level }: NavCollapseProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon!;
  const menuIcon = menu.icon ? (
    <Icon strokeWidth={1.5} style={{ marginTop: 'auto', marginBottom: 'auto' }} color="primary" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `5px`,
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}>{menuIcon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="black" sx={{ my: 'auto' }}>
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography variant="caption" display="block" gutterBottom>
                {menu.caption}
              </Typography>
            )
          }
        />
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {open && (
          <List
            component="div"
            disablePadding
            sx={{
              position: 'relative',
              '&:after': {
                content: "''",
                position: 'absolute',
                left: '32px',
                top: 0,
                height: '100%',
                width: '1px',
                opacity: theme.palette.mode === 'dark' ? 0.2 : 1
              }
            }}
          >
            {menus}
          </List>
        )}
      </Collapse>
    </>
  );
};

export default NavCollapse;
