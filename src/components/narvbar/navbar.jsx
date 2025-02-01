import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import Button from "../generic/button/button";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { motion } from "framer-motion";

const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 10vh;
  background-color: var(--bg-color);
  color: #000;
  user-select: none;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 60px;
  cursor: pointer;
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

    &:hover {
      color: var(--main-color);
    }

    &.active {
      color: var(--main-color);
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

const ManuItem = styled(Menu.Item)`
  &.ant-menu-item-selected {
    background-color: var(--main-color) !important;
    font-weight: bold;
    color: var(--main-color) !important;
  }
`;

const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const MainLogo = () => {
    if (location.pathname !== "/") {
      nav("/");
    }
  };

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

  return (
    <Nav initial="hidden" animate="visible" variants={fadeIn}>
      <Logo onClick={MainLogo} src={logo} />
      <NavLinks>
        <div
          className={`link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => nav("/")}
        >
          Home
        </div>
        <div
          className={`link ${location.pathname === "/pages" ? "active" : ""}`}
          onClick={() => nav("/pages")}
        >
          Pages
        </div>
        <div
          className={`link ${
            location.pathname === "/services" ? "active" : ""
          }`}
          onClick={() => nav("/services")}
        >
          Services
        </div>
        <div
          className={`link ${location.pathname === "/contact" ? "active" : ""}`}
          onClick={() => nav("/contact")}
        >
          Contact Us
        </div>
        <Button>Buy a drug</Button>
      </NavLinks>
      <BurgerIcon onClick={showDrawer} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
        style={{ width: "100%", background: "var(--bg-color)" }}
      >
        <Menu
          style={{
            border: "none",
            width: "100%",
            background: "var(--bg-color)",
          }}
          onClick={closeDrawer}
          selectedKeys={[location.pathname]}
        >
          <ManuItem key="/" onClick={() => nav("/")}>
            Home
          </ManuItem>
          <ManuItem key="/pages" onClick={() => nav("/pages")}>
            Pages
          </ManuItem>
          <ManuItem key="/services" onClick={() => nav("/services")}>
            Services
          </ManuItem>
          <ManuItem key="/contact" onClick={() => nav("/contact")}>
            Contact Us
          </ManuItem>
        </Menu>
      </Drawer>
    </Nav>
  );
};

export default Navbar;
