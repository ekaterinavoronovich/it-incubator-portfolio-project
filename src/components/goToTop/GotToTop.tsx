import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { lightTheme, theme } from '../../styles/Theme';
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
export const GotToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  return (
    <>
      {showBtn && (
        <StyledBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconId="gotoTop"
            width="30px"
            height="30px"
            viewBox="0 0 30px 30px"
            fill={`${theme.color.gradient}`}
          />
        </StyledBtn>
      )}
    </>
  );
};

const StyledBtn = styled.button`
  background-color: ${lightTheme.BackgroundColor};
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
