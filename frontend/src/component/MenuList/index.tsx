import React, { memo } from 'react';

import menuItem from '../../menu-items';

import NavGroup from './NavGroup';

const MenuList = () => {
  const navItems = menuItem.items.map((item) => <NavGroup key={item.id} item={item} />);

  return <div>{navItems}</div>;
};

export default memo(MenuList);
