import { FlexWrapper } from '../wrapper/FlexWrapper';
import { S } from './cartProject_Styles';

type CartProjectPropsType = {
  src: string;
  title: string;
  text: string;
  itemStack: string;
  link: string;
  linkCode: string;
};
export const CartProject = (props: CartProjectPropsType) => {
  return (
    <S.CartWrapper>
      <S.ImgWrapper>
        <S.ImgCart src={props.src} />
        <S.Button href={props.link}>view project</S.Button>
      </S.ImgWrapper>
      <S.DescriptionWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.text}</S.Description>

        <S.Stack>
          Tech stack:
          <li>{props.itemStack}</li>
        </S.Stack>
        <FlexWrapper justify={'center'} gap={'80px'}>
          <S.Link href={props.link}>Live Preview</S.Link>
          <S.Link href={props.linkCode}>View Code</S.Link>
        </FlexWrapper>
      </S.DescriptionWrapper>
    </S.CartWrapper>
  );
};
