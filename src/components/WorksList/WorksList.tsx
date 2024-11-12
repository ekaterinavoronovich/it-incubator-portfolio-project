import sprite from '../../assets/images/sprite.svg';
import building from '../../assets/images/mdi_office-building.svg';
import { lightTheme } from '../../styles/Theme';
import { S } from './WorksList_Styles';
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
          <S.WorkItem key={item.id}>
            <S.Job>{item.name}</S.Job>
            <S.TypeEmployment>{item.typeEmployment}</S.TypeEmployment>
            <S.Company>{item.company}</S.Company>
            <S.City>{item.city}</S.City>
            <S.Time>{item.time}</S.Time>
            <S.Line />
          </S.WorkItem>
        );
      })}
    </ul>
  );
};
