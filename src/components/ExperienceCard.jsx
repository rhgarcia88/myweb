// ExperienceCard.jsx
import React from 'react';
import styled from 'styled-components';

const ExperienceCard = ({ className, position, company, dateStart, dateEnd, description }) => {
  return (
    <Card className={className}>
      <Position>{position}</Position>
      <Company>{company}</Company>
      <Date>{dateStart} - {dateEnd}</Date>
      <Description>{description}</Description>
    </Card>
  );
};

export default ExperienceCard;

const Card = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: left;
`;

const Position = styled.h3`
  font-size: 1.5em;
  color: var(--black-color);
  font-family: 'Raleway';
  margin: 0;
`;

const Company = styled.p`
  font-size: 1.1em;
  color: var(--gray-color);
  font-family: 'Raleway';
  margin: 5px 0;
`;

const Date = styled.p`
  font-size: 0.9em;
  color: var(--light-gray-color);
  font-family: 'Raleway';
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 1em;
  color: var(--black-color);
  font-family: 'Raleway';
  margin-top: 10px;
  line-height: 1.5;
  white-space: pre-line;
`;
