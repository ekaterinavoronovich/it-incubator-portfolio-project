import React from 'react';
import { S } from './Menu_Styles';
import { DataMenu } from '../../data/data';

export const Menu = (props: { menuItems: Array<DataMenu> }) => {
  return (
    <S.StyledMenu>
      <ul>
        {props.menuItems.map((item: DataMenu) => {
          return (
            <S.ListItem key={item.id}>
              <S.NavLink to={item.href} smooth={true} offset={-140}>
                {item.title}
                <S.Mask>
                  <span>{item.title}</span>
                </S.Mask>
                <S.Mask>
                  <span>{item.title}</span>
                </S.Mask>
              </S.NavLink>
            </S.ListItem>
          );
        })}
      </ul>
    </S.StyledMenu>
  );
};
