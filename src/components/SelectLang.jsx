import React, { useState } from "react";
import styled from "styled-components";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: #2c2c2c;
  color: #FCFCFC;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.3s;

  &:hover {
    background: #444;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  background: #2c2c2c;
  border-radius: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background: #444444;
    /* color: #2c2c2c; */
  }
`;


const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (lang) => {
        setLanguage(lang)
        setIsOpen(false)
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                <FaGlobe />
                {language}
            </DropdownButton>
            {isOpen && (
                <DropdownList>
                    <DropdownItem onClick={() => handleSelect("uz")}>O'zbek</DropdownItem>
                    <DropdownItem onClick={() => handleSelect("ru")}>Русский</DropdownItem>
                    <DropdownItem onClick={() => handleSelect("en")}>English</DropdownItem>
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default LanguageSelector;
