import React from 'react';

import ImgRight from '../../../assets/images/drawing.png';
import { Container } from '../../../components/container/Container';
import { WorksList } from '../../../components/WorksList/WorksList';
import { dataWorksList } from '../../../data/data';
import { dataEducationList } from '../../../data/data';
import { FlexWrapper } from '../../../components/wrapper/FlexWrapper';
import { S } from './sectionAbout_Styles';

export const SectionAbout: React.FC = () => {
  return (
    <S.About id={'about'}>
      <Container>
        <FlexWrapper>
          <S.TextWrapper>
            <S.SectionSubtitle>About Me</S.SectionSubtitle>
            <S.Text>
              The Generator App is an online tool that helps you to export ready-made templates
              ready to work as your future website. It helps you to combine slides, panels and other
              components and export it as a set of static files: HTML/CSS/JS.
            </S.Text>
            <S.SectionSubtitle>Work Experience</S.SectionSubtitle>
            <WorksList data={dataWorksList} />
            <S.SectionSubtitle>Education</S.SectionSubtitle>
            <WorksList data={dataEducationList} />
          </S.TextWrapper>
          <img src={ImgRight} alt="IMG" />
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
