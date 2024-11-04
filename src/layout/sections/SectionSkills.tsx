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
                  width={'120px'}
                  height={'120px'}
                  viewBox={'0 0 120px 120px'}
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
