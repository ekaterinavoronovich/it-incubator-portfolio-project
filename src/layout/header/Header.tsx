import React from 'react';

import { Logo } from '../../components/logo/Logo';
import { SocialArea } from '../../components/socialArea/SocialArea';
import { Container } from '../../components/container/Container';
import { DataMenuItems } from '../../data/data';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';
import { MobileMenu } from './Menu/MobileMenu/MobileMenu';
import { DesktopMenu } from './Menu/DesktopMenu/DesktopMenu';
import { S } from './Header_Styles';
import { ThemeProviderProps } from 'styled-components';

export const Header: React.FC<{ theme: string }> = ({ theme }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 992;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
          <Logo />
          <S.Wrapper>
            {width < breakpoint ? (
              <MobileMenu menuItems={DataMenuItems} theme={theme} />
            ) : (
              <DesktopMenu menuItems={DataMenuItems} />
            )}
            <SocialArea />
          </S.Wrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
