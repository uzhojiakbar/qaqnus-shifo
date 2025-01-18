import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  color: #555;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Medicate. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
