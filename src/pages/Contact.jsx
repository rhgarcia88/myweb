import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactTitle>CONTACT ME!</ContactTitle>
      <ContactMethods>
        <ContactMethod href="mailto:hola@garzziadev.com">
          <FaEnvelope size={60} />
          <ContactText>hola@garzziadev.com</ContactText>
        </ContactMethod>
        <ContactMethod href="tel:+34682648923">
          <FaPhone size={60} />
          <ContactText>+34 682 64 89 23</ContactText>
        </ContactMethod>
      </ContactMethods>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  width: 80%;
  margin: 2% 10%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`;

const ContactTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
  color: var(--black-color);
`;

const ContactMethods = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactMethod = styled.a`
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--red-color);
  }
`;

const ContactText = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #333;
  font-family: 'Raleway', sans-serif;
`;
