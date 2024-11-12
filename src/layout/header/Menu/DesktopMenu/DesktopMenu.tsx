import React from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { S } from '../../Header_Styles';
import { DataMenu } from '../../../../data/data';

export const DesktopMenu: React.FC<{ menuItems: Array<DataMenu> }> = (props: {
  menuItems: Array<DataMenu>;
}) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};
