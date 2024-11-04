import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { SocialArea } from '../../components/socialArea/SocialArea';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';
import { DataMenuItems } from '../../data/data';
import { Container } from '../../components/container/Container';
import { S } from './footer_Styles';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <S.AreaContact>
            <FlexWrapper justify="space-between" align="center" gap="35px">
              <a href="tel:+91 12345 09876">+91 12345 09876</a>
              <a href="mailto:info@example.com">info@example.com</a>
            </FlexWrapper>
            <SocialArea />
          </S.AreaContact>
        </FlexWrapper>
        <S.Line />
        <FlexWrapper justify="space-between">
          <Menu menuItems={DataMenuItems} />
          <S.Copyright>
            Designed and built by <span>Pavan MG</span> with<span>Love</span> & <span>Coffee</span>
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
