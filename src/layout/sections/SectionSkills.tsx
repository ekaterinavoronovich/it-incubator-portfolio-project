import { Icon } from '../../components/icon/Icon';
import { Section } from '../../components/section/Section';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';
import { Container } from '../../components/container/Container';
import styled from 'styled-components';
import { DataIconSkills } from '../../data/data';
import { Fade } from 'react-awesome-reveal';

export const SectionSkills: React.FC = () => {
  return (
    <StyledSection id={'skills'}>
      <Container>
        <Section
          titleText={'My Tech Stack'}
          subtitleText={'Technologies I’ve been working with recently'}
        />

        <FlexWrapper justify={'center'} align={'center'} wrap={'wrap'} gap={'100px'}>
          <Fade cascade={true}>
            {DataIconSkills.map(item => {
              return (
                <Icon
                  key={item.id}
                  iconId={item.iconId}
                  width={'120'}
                  height={'120'}
                  viewBox={'0 0 120 120'}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  margin-bottom: 200px;
`;
// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

// const Carousel = () => (
//     <AliceCarousel
//         mouseTracking
//         items={items}
//         responsive={responsive}
//         controlsStrategy="alternate"
//     />
// );
