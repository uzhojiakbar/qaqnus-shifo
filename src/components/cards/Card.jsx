import React from "react";
import styled from "styled-components";
import Bottle from ".././../assets/bottle.png";
import { useLanguage } from "../../context/LanguageContext";

const Container = styled.div`
  /* border: 1px solid white; */
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Cards = styled.div`
  /* border: 1px solid white; */
  padding: 10px;
  background: #333131;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  &:hover {
    background: #424242;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  margin-right: 20px;
  font-weight: 500;
  line-height: 1.5rem;
`;

const Img = styled.img`
  width: 200px;
  @media (max-width: 600px) {
    width: 160px;
  }
`;
function Card() {
  const { translate } = useLanguage();
  return (
    <>
      <Container>
        <Cards data-aos="fade-right">
          <Img src={Bottle} />
          <div>
            <Title>{translate("passkakingtitle")}</Title>
            <Description>{translate("passkaking")}</Description>
          </div>
        </Cards>
        <Cards data-aos="fade-left">
          <Img src={Bottle} />
          <div>
            <Title>{translate("sphere")}</Title>
            <Description>{translate("covid")}</Description>
          </div>
        </Cards>
        <Cards data-aos="fade-right" data-aos-duration="700">
          <Img src={Bottle} />
          <div>
            <Title>{translate("method")}</Title>
            <Description>{translate("methodD")}</Description>
          </div>
        </Cards>

        <Cards data-aos="fade-left" data-aos-duration="700">
          <Img src={Bottle} />
          <div>
            <Title>{translate("save")}</Title>
            <Description>{translate("saveD")}</Description>
          </div>
        </Cards>
      </Container>
    </>
  );
}

export default Card;
