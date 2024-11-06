import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--black-color);
  width: 20%;
  padding: 10px 20px;
  border: 0;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-family: 'Raleway';
  color: var(--white-color);
  font-weight: 400;
  font-size: clamp(12px, 1vw, 16px);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 25px -4px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
