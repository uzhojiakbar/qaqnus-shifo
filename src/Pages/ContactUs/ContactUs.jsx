import React from "react";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTrademark,
  FaBarcode,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const ContactContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 30px;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 2.2rem;
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

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactItem = styled.li`
  background: #333;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: #444;
  }
`;

const ContactUs = () => {
  const { translate } = useLanguage();
  return (
    <ContactContainer id="contact">
      <Title data-aos="fade-left">{translate("contact_uss")} </Title>

      <InfoBlock data-aos="zoom-in">
        {/* <FaTrademark size={20}  /> */}
        <InfoText>
          <strong>{translate("Manufacturer")}</strong> QOQONUS SHIFO MChJ
        </InfoText>
      </InfoBlock>

      <InfoBlock data-aos="zoom-in">
        <FaMapMarkerAlt size={20} />
        <InfoText>
          <strong> {translate("location")} </strong> {translate("locationdata")}
        </InfoText>
      </InfoBlock>

      <InfoBlock data-aos="zoom-in">
        <FaPhoneAlt size={20} />
        <InfoText>
          <strong>{translate("phone")}</strong>
        </InfoText>
      </InfoBlock>
      <ContactList>
        <ContactItem data-aos="zoom-in">
          <FaPhoneAlt size={16} /> +998990800300
        </ContactItem>
        <ContactItem data-aos="zoom-in">
          <FaPhoneAlt size={16} /> +998902148091
        </ContactItem>
        <ContactItem data-aos="zoom-in">
          <FaPhoneAlt size={16} /> +998993953247
        </ContactItem>
        <ContactItem data-aos="zoom-in">
          <FaPhoneAlt size={16} /> +998999738091
        </ContactItem>
      </ContactList>

      <InfoBlock data-aos="zoom-in">
        <FaBarcode size={20} />
        <InfoText>
          <strong>{translate("code")}</strong> TI311590883-01:2024
        </InfoText>
      </InfoBlock>
    </ContactContainer>
  );
};

export default ContactUs;
