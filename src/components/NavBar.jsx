import styled from 'styled-components';
import { Button } from './Button';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <NavWrap>
      <div className="logo-div">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className={`menu-div ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#skills" onClick={handleMenuItemClick}>Skills</a></li>
          <li><a href="#studies" onClick={handleMenuItemClick}>Studies</a></li>
          <li><a href="#experience" onClick={handleMenuItemClick}>Experience</a></li>
          <li><a href="#portfolio" onClick={handleMenuItemClick}>Portfolio</a></li>
        </ul>
      
        <div className="bt-nav">
          <a href="#contact">
        <Button onClick={handleMenuItemClick}>Contact</Button>
        </a>
        </div>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </NavWrap>
  );
};

const NavWrap = styled.div`
  height: 10vh;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white-color);
  z-index: 9999;

  .bt-nav{
    width: 20% !important;
  }

  .bt-nav Button{
    width: 100%;
  }
  .logo-div {
    width: 20%;
    display: flex;
    align-items: center;
    margin-left: 2%;
  }

  .logo-div img {
    width: 100px;
  }

  .menu-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2%;
    gap: 20px;
    width: 60%;
  }

  .nav-list {
    font-family: 'Raleway';
    font-weight: 400;
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  .nav-list li {
    cursor: pointer;
  }

  .nav-list a {
    color: var(--black-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--red-color);
    }
  }

  .hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--black-color);
    margin-right: 10px; /* Ajusta este valor para más separación */
  }

  /* Ajustes responsive */
  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .menu-div {
      position: fixed;
      top: 10vh;
      right: 0;
      height: calc(100vh - 10vh);
      width: 100%;
      background-color: var(--white-color);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    }

    .menu-div.open {
      transform: translateX(0);
    }

    .nav-list {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    .logo-div img {
      width: 80px;
    }

    ${Button} {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;
