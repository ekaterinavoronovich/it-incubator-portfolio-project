import React, { FC } from 'react';
import styled from 'styled-components';
import sprite from '../../assets/images/sprite.svg';
import building from '../../assets/images/mdi_office-building.svg';
import { lightTheme } from '../../styles/Theme';
interface worksListProps {
  id: number;
  name: string;
  typeEmployment: string;
  company: string;
  city?: string;
  time: string;
}
export const WorksList = (props: { data: Array<worksListProps> }) => {
  return (
    <ul>
      {props.data.map((item: worksListProps) => {
        return (
          <WorkItem key={item.id}>
            <Job>{item.name}</Job>
            <TypeEmployment>{item.typeEmployment}</TypeEmployment>
            <Company>{item.company}</Company>
            <City>{item.city}</City>
            <Time>{item.time}</Time>
            <Line />
          </WorkItem>
        );
      })}
    </ul>
  );
};
const WorkItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(25px, 1fr));
`;
const Job = styled.p`
  grid-area: 1/1/2/3;
  font-size: 20px;
  color: ${lightTheme.fontColor};
  justify-self: start;
`;
const TypeEmployment = styled.p`
  grid-area: 1/3/2/4;
  font-weight: 600;
  font-size: 9px;
  text-align: center;
  color: #018c0f;
  padding: 6px 21px;
  background-color: #d7ffe0;
  border-radius: 25px;
  justify-self: end;
  height: 25px;
`;
/* content:url(`${sprite}/#building`); */

const Company = styled.p`
  grid-area: 2/1/3/2;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url('../../assets/images/mdi_office-building.svg');
    background-size: cover;
    background-color: #d7ffe0;
    margin-right: 3px;
    justify-self: start;
  }
`;
const City = styled.p`
  grid-area: 2/2/3/3;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url('../../assets/images/carbon_location.svg');
    background-size: cover;
    background-color: #d7ffe0;
    margin-right: 3px;
  }
`;
const Time = styled.p`
  grid-area: 2/3/3/4;
  justify-self: end;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url('../../assets/images/carbon_date.svg');
    background-size: cover;
    //background-color:#d7ffe0;
    margin-right: 3px;
  }
`;
const Line = styled.hr`
  border: none;
  background-color: rgba(102, 102, 102, 0.5);
  height: 2px;
  grid-area: 3/1/4/4;
`;
