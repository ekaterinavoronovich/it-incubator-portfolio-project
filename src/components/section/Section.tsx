import styled from 'styled-components';

export type SectionPropsType = {
  titleText: string;
  subtitleText: string;
};

export const Section = (props: SectionPropsType) => {
  return (
    <StyledTitleSection>
      <TitleSection>{props.titleText}</TitleSection>
      <Subtitle>{props.subtitleText}</Subtitle>
    </StyledTitleSection>
  );
};
const StyledTitleSection = styled.div`
  text-align: center;
`;
const TitleSection = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;

  color: ${props => props.theme.fontAccentColor};
  margin-bottom: 50px;
`;
const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;

  color: ${props => props.theme.fontColor};
  margin-bottom: 110px;
`;
