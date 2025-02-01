import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Cards from "../../components/cards/Card";
import { useLanguage } from "../../context/LanguageContext";

export const AboutSection = styled(motion.section)`
  padding: 50px;
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;

  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

function Product() {

  const { translate } = useLanguage()

  return (
    <AboutSection >
      <Title id="Product" data-aos="zoom-in" data-aos-duration="400">
        {translate('abouttitle')}
      </Title>
      <Cards />
    </AboutSection>
  )
}

export default Product