import styled from 'styled-components';
import { Button } from './Button';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import 'country-flag-icons/react/3x2';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const currentLanguage = i18n.language;

  return (
    <NavWrap>
      <div className="logo-div">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className={`menu-div ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#skills" onClick={handleMenuItemClick}>{t('skills')}</a></li>
          <li><a href="#studies" onClick={handleMenuItemClick}>{t('studies')}</a></li>
          <li><a href="#experience" onClick={handleMenuItemClick}>{t('experience')}</a></li>
          <li><a href="#portfolio" onClick={handleMenuItemClick}>{t('Portfolio')}</a></li>
        </ul>
        <div className="bt-nav">
          <a href="#contact">
            <Button onClick={handleMenuItemClick}>{t('contact')}</Button>
          </a>
        </div>

        {/* Desplegable de idioma solo en modo PC */}
        {!menuOpen && (
          <LanguageSelector onClick={() => setLanguageMenuOpen(!languageMenuOpen)}>
            <img
              src={`https://flagcdn.com/w20/${currentLanguage === 'en' ? 'gb' : 'es'}.png`}
              alt={currentLanguage === 'en' ? 'English' : 'Español'}
              className="language-flag"
            />
            {languageMenuOpen && (
              <LanguageDropdown>
                <DropdownItem onClick={() => changeLanguage('en')}>
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="English"
                    style={{ filter: currentLanguage === 'en' ? 'none' : 'grayscale(100%)' }}
                  /> English
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage('es')}>
                  <img
                    src="https://flagcdn.com/w20/es.png"
                    alt="Español"
                    style={{ filter: currentLanguage === 'es' ? 'none' : 'grayscale(100%)' }}
                  /> Español
                </DropdownItem>
              </LanguageDropdown>
            )}
          </LanguageSelector>
        )}
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú de selección de idioma en modo hamburguesa (móvil) */}
      {menuOpen && (
        <HamburgerLanguageSelector>
          <LanguageIcon
            src="https://flagcdn.com/w20/gb.png"
            alt="English"
            onClick={() => changeLanguage('en')}
            selected={currentLanguage === 'en'}
          />
          <LanguageIcon
            src="https://flagcdn.com/w20/es.png"
            alt="Español"
            onClick={() => changeLanguage('es')}
            selected={currentLanguage === 'es'}
          />
        </HamburgerLanguageSelector>
      )}
    </NavWrap>
  );
};

// Estilos
const NavWrap = styled.div`
  height: 10vh;
  width: 98%;
  padding: 0 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white-color);
  z-index: 9999;

  .bt-nav {
    width: 20% !important;
  }

  .bt-nav Button {
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
    margin-right: 10px;
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

const LanguageSelector = styled.div`
  position: relative;
  cursor: pointer;

  img.language-flag {
    width: 24px;
    height: auto;
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: var(--white-color);
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 999;

  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: 'Raleway';
  color: var(--black-color);
  
  &:hover {
    background-color: var(--light-gray);
  }

  .dropdown-flag {
    width: 24px;
    height: auto;
  }
`;

const HamburgerLanguageSelector = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }
`;

const LanguageIcon = styled.img`
  width: 24px;
  height: auto;
  cursor: pointer;
  filter: ${(props) => (props.selected ? 'none' : 'grayscale(100%)')};
  transition: filter 0.3s ease;
`;

export default NavBar;
