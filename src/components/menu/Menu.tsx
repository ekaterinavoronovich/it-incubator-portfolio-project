import React from 'react';
import { S } from './Menu_Styles';
export const Menu = (props: { menuItems: Array<{ id: number; title: string; href: string }> }) => {
  return (
    <S.StyledMenu>
      <ul>
        {props.menuItems.map((item: { id: number; title: string; href: string }) => {
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
