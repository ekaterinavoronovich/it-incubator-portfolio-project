import React from 'react';
import { Container } from '../../../components/container/Container';
import { S } from './sectionMail_Styles';

export const SectionMail: React.FC = () => {
  return (
    <S.Mailarea id={'contact'}>
      <Container>
        <p>For any questions please mail me:</p>
        <p>
          <a href="mailto:hi@pavanmg.in">hi@pavanmg.in</a>
        </p>
      </Container>
    </S.Mailarea>
  );
};
