import React from 'react';
import styled from 'styled-components';

const SkillCard = ({ logo, name }) => {
  return (
    <Card>
      <Logo src={logo} alt={`${name} logo`} />
      <SkillName>{name}</SkillName>
    </Card>
  );
};

export default SkillCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 10px;
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 8px;
`;

const SkillName = styled.p`
  font-size: 1em;
  font-family: 'Raleway', sans-serif;
  color: var(--black-color);
  text-align: center;
  margin: 0;
`;
