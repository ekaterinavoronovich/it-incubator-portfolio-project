import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { lightTheme, themeMain } from '../../styles/Theme';
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
          <Icon iconId="gotoTop" width="15" height="15" viewBox="0 0 15 15" fill="#42446E" />
        </StyledBtn>
      )}
    </>
  );
};

const StyledBtn = styled.button`
  background-color: #ffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: grid;
  place-content: center;
`;
