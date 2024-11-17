import { Icon } from '../../components/icon/Icon';
import { Section } from '../../components/section/Section';
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

        <Fade cascade damping={0.3}>
          <ul>
            {DataIconSkills.map(item => {
              return (
                <li>
                  <Icon
                    key={item.id}
                    iconId={item.iconId}
                    width={'120'}
                    height={'120'}
                    viewBox={'0 0 120 120'}
                  />
                </li>
              );
            })}
          </ul>
        </Fade>
      </Container>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  margin-bottom: 200px;
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
  }
`;
