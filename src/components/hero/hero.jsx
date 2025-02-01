import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../generic/button/button";
import { PlusOutlined } from "@ant-design/icons";
import BottleCocaCola from "../../assets/bottle.png";
import { useLanguage } from "../../context/LanguageContext";

const HeroContainer = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
  height: 90vh;
  max-height: 750px;
  gap: 5px;
  background: var(--bg-color);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 150px;
    height: auto;
  }
`;

const HeroSection = styled(motion.section)`
  padding: 50px;
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`;

const HeroSection2 = styled(motion.section)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    img {
      width: 60%;
      max-width: 300px;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const isMobile = window.innerWidth <= 768;

  const {translate} = useLanguage()

  return (
    <HeroContainer id="home">
      <HeroSection initial="hidden" animate="visible" variants={fadeIn}>
        <Title> {translate("heroTitle")}</Title>
        <Description>
          {translate("herodesc")}
        </Description>
        <Button href="#Product">
        {translate("more")}
          <PlusOutlined />
        </Button>
      </HeroSection>
      <HeroSection2
        initial="hidden"
        animate="visible"
        variants={isMobile ? fadeRight : fadeLeft}
      >
        <img src={BottleCocaCola} alt="Bottle" />
      </HeroSection2>
    </HeroContainer>
  );
};

export default Hero;
