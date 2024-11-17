import PhotoImg from '../../assets/images/50353683 1.png';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';
import ImgAroundFoto from '../../assets/images/Abstract.svg';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { within } from '@testing-library/react';

const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <S.Wrapper>
          {/* <FlexWrapper align={'center'} justify={'space-between'} gap={'20px'}> */}
          <S.TextWrapper>
            <span>Hi 👋,</span>
            <p>
              My name is
              <br />
              <span>Pavan MG</span>
              <S.MainTitle>
                <Typewriter
                  options={{
                    strings: ['I build things for web'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <p>I build things for web</p>
              </S.MainTitle>
            </p>
          </S.TextWrapper>
          <Tilt>
            <S.PhotoWrapper>
              <img src={ImgAroundFoto} alt="" />
              <S.Photo src={PhotoImg} alt="photo" />
            </S.PhotoWrapper>
          </Tilt>
          {/* </FlexWrapper>  */}
        </S.Wrapper>
      </Container>
    </S.Main>
  );
};

export default Main;
