import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/navlogo.png";
import {useLocation, useNavigate} from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSelector from "../SelectLang";




const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 10vh;
  background-color: var(--bg-color);
  color: #000;
  user-select: none;
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 60px;
  cursor: pointer;
`;


const Button = styled.a`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #77704c;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: #2c2c2c;
  transition: background 0.3s;
  
  text-decoration: none;
  text-align: center;

  &:hover {
    background: #ffffff;
  }
  &:active {
    scale: 1.01;
  }
`;


const NavLinks = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.2s;
  .link {
    transition: all 0.2s;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
    font-weight: 600;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: var(--main-color);
    }

    &.active {
      color: var(--main-color);
      border-bottom: 2px solid var(--main-color);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerIcon = styled(MenuOutlined)`
  font-size: 24px;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(Menu)`
  border: none;
  width: 100%;
  background: var(--bg-color);
  .ant-menu-item-selected {
    background-color: transparent !important;
    font-weight: bold;
    color: var(--main-color) !important;
    border-bottom: 2px solid var(--main-color);
  }
`;
const Labels = styled.label`
  color: black;
  `

const Navbar = () => {
  const { translate } = useLanguage()

  const nav = useNavigate()
  
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const isActive = (hash) => location.hash === hash;
 


  return (
    <Nav initial="hidden" animate="visible" variants={fadeIn}>
      <Logo onClick={()=>nav("#home")} src={logo} />
      <NavLinks>
        <a
          href="#home"
          className={`link ${location.pathname === "/" && !location.hash ? "active" : ""}`}
        >
          {translate('navbardata')}
        </a>
        <a href="#Product" className={`link ${isActive("#Product") ? "active" : ""}`}>
          {translate('product')}
        </a>
        <a href="#ingredients" className={`link ${isActive("#ingredients") ? "active" : ""}`}>

          {translate('Ingredients')}
        </a>
        <a href="#contact" className={`link ${isActive("#contact") ? "active" : ""}`}>
          {translate('contact')}
        </a>

        <LanguageSelector />

        <Button target={"_blank"} href={"https://docs.google.com/forms/d/e/1FAIpQLSenuVa9rsOJUXumGDtlBxfgGapLSSSznNHPlGZXo55jpeleVw/viewform?usp=header"} type="submit">{translate("get_product")}</Button>
      </NavLinks>
      <BurgerIcon onClick={showDrawer} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
        style={{ width: "100%", background: "var(--bg-color)" }}
      >
        <MobileMenu selectedKeys={[location.hash]} onClick={closeDrawer}>
          <Menu.Item
            key="#home"
            className={location.pathname === "/" && !location.hash ? "ant-menu-item-selected" : ""}
          >
            <a href="#home">Home</a>
          </Menu.Item>
          <Menu.Item key="#Product" className={isActive("#Product") ? "ant-menu-item-selected" : ""}>
            <a href="#Product">Product</a>
          </Menu.Item>
          <Menu.Item key="#ingredients" className={isActive("#ingredients") ? "ant-menu-item-selected" : ""}>
            <a href="#ingredients">Ingredients</a>
          </Menu.Item>
          <Menu.Item key="#contact" className={isActive("#contact") ? "ant-menu-item-selected" : ""}>
            <a href="#contact">Contact Us</a>
          </Menu.Item>
        </MobileMenu>
        <Button href={'#form'} mobile={100}>Bug a Drug</Button>
        <LanguageSelector />

      </Drawer>
    </Nav>
  );
};

export default Navbar;
