import React from 'react';
import { S } from './TabMenu_Styles';
import { DataTabs, TabStatusType } from '../../../../data/data';

type TabMenuPropsType = {
  DataTabs: Array<{ status: TabStatusType; title: string; id: number }>;
  changeFilterStatus: (value: TabStatusType) => void;
  currentFilterStatus: string;
};
export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <S.StyledTabMenu>
      <ul>
        {DataTabs.map(item => {
          return (
            <li key={item.id}>
              <S.Link
                as={'button'}
                active={props.currentFilterStatus === item.status}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </S.Link>
            </li>
          );
        })}
      </ul>
    </S.StyledTabMenu>
  );
};
