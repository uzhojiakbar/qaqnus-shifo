import React from "react";
import { ButtonContainer } from "./style";
import styled from "styled-components";
const Link = styled.a`
  text-decoration: none;
`
const Button = ({ href,mobile, children, onClick = () => { } }) => {
  return <Link href={href}><ButtonContainer mobile={mobile} onClick={onClick}>{children}</ButtonContainer></Link>;
};

    export default Button;
