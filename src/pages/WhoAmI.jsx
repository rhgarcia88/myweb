import styled from 'styled-components';
import { fadeInDown } from '../Animations';
import { useTranslation } from 'react-i18next';

export const WhoAmI = () => {
  const { t } = useTranslation();

  return (
    <WhoAmIWrapper>
      <h2>{t('who_am_i_title')}</h2>
      <p>{t('who_am_i_intro')}</p>
      <p>{t('who_am_i_belief')}</p>
      <p>{t('who_am_i_journey')}</p>
      <img src="leftlcoud.png" alt="Left Cloud"/>
      <img src="rightcloud.png" alt="Right Cloud"/>
    </WhoAmIWrapper>
  );
}

const WhoAmIWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 30% 0 30%;

  h2 {
    font-family: 'Raleway';
    font-size: 50px;
    color: var(--black-color);
  }
  
  p {
    color: var(--black-color);
    text-align: center;
    font-family: 'Raleway';
  }

  img {
    position: absolute;
    width: 100%;
    margin: 0;
    animation: ${fadeInDown} 1s ease-out;
  }
`;
