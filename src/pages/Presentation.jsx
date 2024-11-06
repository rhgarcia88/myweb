import styled from 'styled-components';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { fadeInDown, fadeInUp } from '../Animations';
import { useTranslation } from 'react-i18next';

export const Presentation = () => {
  const { t, i18n } = useTranslation();
  return (
    <PresentationWrap>
      <h3 className="hi-text">👋🏼{t('hello')}<b>Rafa</b>{t('connect')}</h3>
      <Title>FULL <span className='red-text'>STACK</span><br /><span className='overline'>WEB DEVELOPER</span></Title>
      <div className="basement">
        <h4>based in Granada, Spain</h4>
        <div className="icons">
          <a href="https://www.linkedin.com/in/rafa-garcia-dev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="https://wa.link/82qxsv" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={32} />
          </a>
        </div>
      </div>
      <div className="character-wrap">
        <img src="/character.png" alt="Character" />
        <FadeOverlay />
      </div>
    </PresentationWrap>
  );
};

const Title = styled.h1`
  color: var(--black-color);
  font-family: 'League Gothic';
  text-align: center;
  font-size: clamp(17vw, 1vw, 20vw);
  line-height: 13vw;
  letter-spacing: 1.7vw;
  margin-top: 0;
  margin-bottom: 0;
  animation: ${fadeInUp} 1s ease-out;
`;

const PresentationWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3%;

  .basement {
    color: var(--black-color);
    font-family: 'Raleway';
    display: flex;
    align-items: center;
    width: 78%;
    margin: 0 11%;
    justify-content: space-between; 
    z-index: 3;

    h4 {
      font-size: 1.1vw;
      font-weight: normal;
      margin-left: 1%;
      margin-top: 1%;
    }

    .icons {
      display: flex;
      gap: 15px;

      a {
        color: var(--black-color);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--red-color);
        }
      }
    }
  }

  .character-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    position: absolute;
    margin-top: 20%;
  }

  .character-wrap img {
    width: 50%;
    animation: ${fadeInDown} 1s ease-out;
  }

  h3 {
    color: var(--black-color);
    font-family: 'Raleway';
    text-align: center;
    font-size: 1.4vw;
    font-weight: normal;
    letter-spacing: 0.3vw;
    animation: ${fadeInUp} 1s ease-out;
  }

  .overline {
    color: var(--white-color);
    letter-spacing: 0.2vw;
    text-shadow: 
      -2px -2px 0 var(--black-color),
       2px -2px 0 var(--black-color),
      -2px  2px 0 var(--black-color),
       2px  2px 0 var(--black-color);
  }

  .red-text{
    color:var(--red-color);
  }

  /* Media queries para pantallas pequeñas */
  @media (max-width: 768px) {

    h3 {
      font-size: 3vw;
      letter-spacing: 0.5vw;
      display:none;
    }

    ${Title} {
      margin-top: 15%;
      font-size: 12vw;
      line-height: 10vw;
      letter-spacing: 1.5vw;
    }

    .basement {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      width: 60%;
      margin: 0 20%;

      h4 {
        font-size: 2.5vw;
        margin-top: 10px;
        margin-left: 0;
        width: 20%;
      }

      .icons {
        margin-top: 10px;
      }
    }

    .character-wrap {
      margin-top: 30%;
    }

    .character-wrap img {
      width: 70%;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 4vw;
      letter-spacing: 1vw;
    }

    ${Title} {
      font-size: 15vw;
      line-height: 12vw;
      letter-spacing: 2vw;
    }

    .basement h4 {
      font-size: 3.5vw;
    }

    .character-wrap {
      margin-top: 40%;
    }

    .character-wrap img {
      width: 90%;
    }
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 100px;
  background: linear-gradient(to top, var(--white-color), transparent);
  z-index: 2;
`;
