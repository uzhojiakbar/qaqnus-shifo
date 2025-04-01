import React from 'react';
import { AboutSection, Title } from '../About/Product';
import styled from 'styled-components';
import { useLanguage } from '../../context/LanguageContext';



const Container = styled.div`
  width: 100%;
  /* max-width: 800px; */
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  background-color: #2c2c2c;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Titles = styled.h2`
  text-align: center;
  color:#FFFFFF;
  margin-bottom: 30px;
  font-size: 2rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SectionHalf = styled.div`
  flex: 1;
`;

const SectionFull = styled.div`
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 1.8rem;
    color: #E3E3E3;
    margin-bottom: 15px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #444;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  color: #E3E3E3;
  font-weight: bold;
  transition: background 0.3s ease;
  word-wrap: anywhere;

  &:hover {
    background: #555;
  }
`;

function Ingredients() {
  const {translate} = useLanguage();

  return (
    <AboutSection data-aos="zoom-in" id="ingredients">
      <Title>{translate("Composition")}</Title>
      <Container>
        <Titles>{translate('gemakardin')}</Titles>

        <SectionWrapper>
          <SectionHalf>
            <Section>
              <h3>{translate('Compositions')}</h3>
              <List>
                <ListItem>{translate('Vitamins')}</ListItem>
                <ListItem> {translate('Minerals')}</ListItem>
                <ListItem> {translate('Potassium')}  </ListItem>
                <ListItem>{translate('osi')}</ListItem>
              </List>
            </Section>
          </SectionHalf>
          <SectionHalf>
            <Section>
              <h3>
              {translate('vitaompositions')}
              
              </h3>
              <List>
                <ListItem> {translate('Vitaminb6')} </ListItem>
                <ListItem>{translate('Vitaminb9')} </ListItem>
                <ListItem>{translate('VitaminbC')} </ListItem>
                <ListItem>{translate('Vitaminbe')} </ListItem>
              </List>
            </Section>
          </SectionHalf>
        </SectionWrapper>

        <SectionFull>
          <Section>
            <h3>{translate('effect')}</h3>
            <List>
              <ListItem>{translate('covid_19')} </ListItem>
              <ListItem>{translate('hard')} </ListItem>
              <ListItem>{translate('breath')} </ListItem>
              <ListItem>{translate('Anemiya')} </ListItem>
              <ListItem>{translate('immunity')} </ListItem>
            </List>
          </Section>
        </SectionFull>
      </Container>
    </AboutSection>
  );
}

export default Ingredients;