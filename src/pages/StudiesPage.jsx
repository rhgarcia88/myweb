// Studies.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StudyCard from '../components/StudyCard';

const studiesData = [
  {
    degree: 'Full Stack Web Developer BootCamp',
    institution: 'ThePower',
    dateStart: '2023',
    dateEnd: '2024',
  },
  {
    degree: 'Video game development and interactive experiences',
    institution: 'ESCAV',
    dateStart: '2021',
    dateEnd: '2023',
  },
  {
    degree: 'Multiplatform Application Development',
    institution: 'I.E.S. Zaidín Vergeles',
    dateStart: '2019',
    dateEnd: '2021',
  },
  {
    degree: 'English FCE B2 Level',
    institution: 'Cambridge Assessment English',
    dateStart: '2018',
    dateEnd: '2018',
  },
  {
    degree: 'Bachelor in Technological Sciences',
    institution: 'I.E.S. Alhendín',
    dateStart: '2017',
    dateEnd: '2019',
  },
];

const Studies = () => {
  const sectionRef = useRef(null);

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
      <SectionTitle>Studies</SectionTitle>
      <StudiesGrid>
        {studiesData.map((study, index) => (
          <StudyCard 
            key={index} 
            className="study-card" 
            degree={study.degree} 
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
