import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { useLanguage } from "../../context/LanguageContext";

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  background-color: #2c2c2c;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  flex: 1.5;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 30px;
`;

const LanguageDropdown = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .language-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #444;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: #555;
    }

    svg {
      margin-left: 10px;
    }
  }

  .ant-dropdown-menu {
    background-color: #444;
    border-radius: 5px;
  }

  .ant-dropdown-menu-item {
    background-color: #444;
    color: #ffffff;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  height: 50px;
  font-size: 1rem;
  background: #444;
  color: #fff;

  &:focus {
    outline: 2px solid #ffffff;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  height: 150px;
  font-size: 1rem;
  background: #444;
  color: #fff;

  &:focus {
    outline: 2px solid #ffffff;
  }
`;

const Button = styled.a`
  width: 100%;
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

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone1: "",
    phone2: "",
  });
  const { translate, setLanguage } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Xabarni Markdown formatida tayyorlash
    const message = `*Ism:* ${formData.name}\n*📞 Telefon 1:* ${
      formData.phone1
    }\n*Murojaat💬:* ${formData.phone2 || "Yo‘q"}`;

    const token = "7912047402:AAGhnk6BzECdQGINEoRp6GivkB7ZLOq1aR8"; // Bot token
    const chatId = "2017025737"; // Birinchi odam
    const chatId2 = "747112917"; // Ikkinchi odam

    const url1 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}&parse_mode=Markdown`;
    const url2 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId2}&text=${encodeURIComponent(
      message
    )}&parse_mode=Markdown`;

    // Birinchi chat ID ga yuborish
    fetch(url1)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Birinchi chatga yuborishda xatolik");
        }
        // Ikkinchi chat ID ga yuborish
        return fetch(url2);
      })
      .then((response) => {
        if (response.ok) {
          alert("Murojaatingiz yuborildi!");
          setFormData({ name: "", phone1: "", phone2: "" }); // Formani tozalash
        } else {
          alert("Qisman yuborildi.");
        }
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        alert("Xatolik yuz berdi, qayta urinib ko‘ring.");
      });
  };

  const handleMenuClick = (e) => {
    setLanguage(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="uz">O'zbekcha</Menu.Item>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="ru">Русский</Menu.Item>
    </Menu>
  );


  return <Container id="form" >
    <Button target={"_blank"} href={"https://docs.google.com/forms/d/e/1FAIpQLSenuVa9rsOJUXumGDtlBxfgGapLSSSznNHPlGZXo55jpeleVw/viewform?usp=header"} type="submit">{translate("get_product")}</Button>
  </Container>


  return (
    <FormContainer id="form" data-aos="flip-left">
      <Title>{translate("contact_uss")}</Title>

      {/*<form onSubmit={handleSubmit}>*/}
      {/*  <Input*/}
      {/*    type="text"*/}
      {/*    name="name"*/}
      {/*    placeholder={translate("username")}*/}
      {/*    value={formData.name}*/}
      {/*    onChange={handleChange}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <Input*/}
      {/*    type="number"*/}
      {/*    name="phone1"*/}
      {/*    placeholder={translate("number")}*/}
      {/*    value={formData.phone1}*/}
      {/*    onChange={handleChange}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <Textarea*/}
      {/*    type="tel"*/}
      {/*    name="phone2"*/}
      {/*    placeholder={translate("number2")}*/}
      {/*    value={formData.phone2}*/}
      {/*    onChange={handleChange}*/}
      {/*  />*/}
      {/*</form>*/}
        <Button type="submit">{translate("sumbit")}</Button>
    </FormContainer>
  );
};

export default Form;
