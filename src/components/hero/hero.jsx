import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../generic/button/button";
import { PlusOutlined } from "@ant-design/icons";
import BottleCocaCola from "../../assets/bottle.png";

const HeroContainer = styled.div`
  display: flex;

  width: 100%;
  height: 90vh;
  max-height: 750px;

  gap: 5px;
  background: var(--bg-color);

  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    min-width: 300px;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const HeroSection2 = styled(motion.section)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 45%;
    left: 20%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
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
    hidden: { opacity: 0, x: 100 }, // Mobile: animate from the right
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <HeroContainer>
      <HeroSection initial="hidden" animate="visible" variants={fadeIn}>
        <Title>Setting Standards In Physiotherapy</Title>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Description>
        <Button>
          Read more
          <PlusOutlined />
        </Button>
      </HeroSection>
      <HeroSection2
        initial="hidden"
        animate="visible"
        variants={isMobile ? fadeRight : fadeLeft}
      >
        <img src={BottleCocaCola} alt="" />
      </HeroSection2>
    </HeroContainer>
  );
};

export default Hero;
