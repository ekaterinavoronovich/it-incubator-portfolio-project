import React from 'react';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../wrapper/FlexWrapper';
import { S } from './SocialArea_Styles';

export const SocialArea = () => {
  return (
    <FlexWrapper>
      <S.Link href="#">
        <Icon iconId="github-icon" width="30" height="30" viewBox="0 0 30 30" />
      </S.Link>
      <S.Link href="#">
        <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30" />
      </S.Link>
      <S.Link href="#">
        <Icon iconId="twitter" width="31" height="31" viewBox="0 0 31 31" />
      </S.Link>
    </FlexWrapper>
  );
};
