import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { useLanguage } from '../../context/LanguageContext';

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

const Button = styled.button`
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

  &:hover {
    background: #ffffff;
  }
  &:active {
    scale: 1.01;
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({ name: '', phone1: '', phone2: '' });
  const { translate, setLanguage } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Ism: ${formData.name}%0A📞 Telefon 1: ${formData.phone1}%0A📞 Telefon 2: ${formData.phone2 || 'Yo‘q'}`;
    const telegramUrl = `https://t.me/share/url?url=${message}`;
    window.open(telegramUrl, '_blank');
    setFormData({ name: '', phone1: '', phone2: '' }); // Formani tozalash
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

  return (
    <FormContainer id="form" data-aos="flip-left">
      <Title>{translate('contact_uss')}</Title>

     

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder={translate('username')}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone1"
          placeholder={translate('number')}
          value={formData.phone1}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone2"
          placeholder={translate('number2')}
          value={formData.phone2}
          onChange={handleChange}
        />
        <Button type="submit">{translate('sumbit')}</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
