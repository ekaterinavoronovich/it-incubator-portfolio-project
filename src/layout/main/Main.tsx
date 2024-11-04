import PhotoImg from '../../assets/images/50353683 1.png';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} gap={'20px'}>
          <div>
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
          </div>
          <div>
            <S.Photo src={PhotoImg} alt="photo" />
          </div>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

export default Main;
