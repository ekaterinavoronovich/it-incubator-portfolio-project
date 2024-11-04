import React from 'react';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../wrapper/FlexWrapper';
import styled from 'styled-components';
import { lightTheme } from '../../styles/Theme';
export const SocialArea = () => {
  return (
    <FlexWrapper>
      <Link href="#">
        <Icon iconId="github-icon" width="30" height="30" viewBox="0 0 30 30" />
      </Link>
      <Link href="#">
        <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30" />
      </Link>
      <Link href="#">
        <Icon
          iconId="twitter"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill={lightTheme.fontAccentColor}
        />
      </Link>
    </FlexWrapper>
  );
};
const Link = styled.a`
  &:not(:last-child) {
    margin-right: 20px;
    fill: ${lightTheme.fontAccentColor};
  }
`;
