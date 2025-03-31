import React from "react";
import styled from "styled-components";
import {FaBarcode} from "react-icons/fa";
import {useLanguage} from "../../context/LanguageContext.jsx";

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  color: #555;
`;


const InfoBlock = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #e3e3e3;
  margin: 5px 0;
  font-family: sans-serif;
`;


const Footer = () => {

    const {translate} = useLanguage();

  return (
    <FooterContainer>
      <p>© (c) All Rights Reserved by <a href={"https://etamin.digital/"}>ETAMIN</a> | 2025</p>
        <InfoBlock data-aos="zoom-in">
            <FaBarcode size={20}/>
            <InfoText>
                <strong>{translate("code")}</strong> TI311590883-01:2024
            </InfoText>
        </InfoBlock>
    </FooterContainer>
  );
};

export default Footer;
