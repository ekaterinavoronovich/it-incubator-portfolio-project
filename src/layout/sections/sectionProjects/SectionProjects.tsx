import { Section } from '../../../components/section/Section';
import { FlexWrapper } from '../../../components/wrapper/FlexWrapper';
import { CartProject } from '../../../components/cartProject/CartProject';
import { Container } from '../../../components/container/Container';
import { DataProjects, TabStatusType } from '../../../data/data';
import { TabMenu } from './TabMenu/TabMenu';
import { DataTabs } from '../../../data/data';
import { useState } from 'react';

export const SectionProjects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
  let FilteredData = DataProjects;
  if (currentFilterStatus === 'landing') {
    FilteredData = DataProjects.filter(item => item.type === 'landing');
  }
  if (currentFilterStatus === 'spa') {
    FilteredData = DataProjects.filter(item => item.type === 'spa');
  }
  if (currentFilterStatus === 'react') {
    FilteredData = DataProjects.filter(item => item.type === 'react');
  }
  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <section id="projects">
      <Section titleText={'Projects'} subtitleText={'Things I’ve built so far'} />
      <Container>
        <TabMenu
          changeFilterStatus={changeFilterStatus}
          DataTabs={DataTabs}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify={'center'} wrap={'wrap'} gap={'37px'}>
          {FilteredData.map(item => {
            return (
              <CartProject
                src={item.src}
                title={item.title}
                text={item.text}
                itemStack={`${item.itemStack},`}
                link={item.link}
                linkCode={item.linkCode}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </section>
  );
};
