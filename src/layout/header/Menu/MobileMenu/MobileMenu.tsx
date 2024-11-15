import React, { useState } from 'react';
import { S } from '../../Header_Styles';
import { Menu } from '../../../../components/menu/Menu';
import { DataMenu } from '../../../../data/data';

export const MobileMenu: React.FC<{ menuItems: Array<DataMenu>; theme: string }> = ({
  menuItems,
  theme,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const ToggleMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={ToggleMenuHandler} theme={theme}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <Menu menuItems={menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
