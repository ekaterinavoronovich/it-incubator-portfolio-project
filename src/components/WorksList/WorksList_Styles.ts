import styled from 'styled-components';
import edImg from '../../assets/images/mdi_office-building.svg';
import LocationImg from '../../assets/images/carbon_location.svg';
import StageIMg from '../../assets/images/carbon_date.svg';

const WorkItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(25px, 1fr));
`;
const Job = styled.p`
  grid-area: 1/1/2/3;
  font-size: 20px;
  color: ${props => props.theme.fontColor};
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

const Company = styled.p`
  grid-area: 2/1/3/2;
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url('${edImg}');
    background-size: cover;
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
    background-image: url('${LocationImg}');
    background-size: cover;
    margin-right: 3px;
  }
`;
const Time = styled.p`
  grid-area: 2/3/3/4;
  justify-self: end;
  &::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 12px;
    background-image: url('${StageIMg}');
    background-size: cover;
    margin-right: 3px;
  }
`;
const Line = styled.hr`
  border: none;
  background-color: rgba(102, 102, 102, 0.5);
  height: 2px;
  grid-area: 3/1/4/4;
`;
export const S = {
  Line,
  Time,
  City,
  Company,
  TypeEmployment,
  Job,
  WorkItem,
};
