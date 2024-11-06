import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StudyCard from '../components/StudyCard';
import { useTranslation } from 'react-i18next';

const studiesData = [
  {
    degree: 'full_stack_developer',
    institution: 'ThePower',
    dateStart: '2023',
    dateEnd: '2024',
  },
  {
    degree: 'video_game_dev',
    institution: 'ESCAV',
    dateStart: '2021',
    dateEnd: '2023',
  },
  {
    degree: 'multiplatform_dev',
    institution: 'I.E.S. Zaidín Vergeles',
    dateStart: '2019',
    dateEnd: '2021',
  },
  {
    degree: 'english_fce',
    institution: 'Cambridge Assessment English',
    dateStart: '2018',
    dateEnd: '2018',
  },
  {
    degree: 'bachelor_tech_sciences',
    institution: 'I.E.S. Alhendín',
    dateStart: '2017',
    dateEnd: '2019',
  },
];

const Studies = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.study-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <StudiesWrapper id="studies" ref={sectionRef}>
      <SectionTitle>{t('studies_title')}</SectionTitle>
      <StudiesGrid>
        {studiesData.map((study, index) => (
          <StudyCard 
            key={index} 
            className="study-card" 
            degree={t(study.degree)} 
            institution={study.institution} 
            dateStart={study.dateStart} 
            dateEnd={study.dateEnd} 
          />
        ))}
      </StudiesGrid>
    </StudiesWrapper>
  );
};

export default Studies;

const StudiesWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: var(--black-color);
  font-family: 'Raleway';
  font-size: 50px;
  margin-bottom: 30px;
`;

const StudiesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
