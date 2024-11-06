// StudyCard.jsx
import React from 'react';
import styled from 'styled-components';

const StudyCard = ({ degree, institution, dateStart, dateEnd, className }) => {
  return (
    <Card className={`study-card ${className}`}>
      <DateWrapper>
        <Date>{dateStart}</Date>
        <span>-</span>
        <Date>{dateEnd}</Date>
      </DateWrapper>
      <Content>
        <Degree>{degree}</Degree>
        <Institution>{institution}</Institution>
      </Content>
    </Card>
  );
};

export default StudyCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 800px;
  background-color: var(--white-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--black-color);
  font-family: 'Raleway';
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 20px;
`;

const Date = styled.p`
  margin: 0;
`;

const Content = styled.div`
  text-align: center;
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.8em;
  color: var(--black-color);
  font-family: 'Raleway';
  margin: 0;
`;

const Institution = styled.p`
  font-size: 1.2em;
  color: var(--red-color);
  font-family: 'Raleway';
  margin-top: 5px;
`;
  