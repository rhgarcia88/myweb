import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/ExperienceCard';
import { useTranslation } from 'react-i18next';

const experienceData = [
  {
    position: 'marketing_manager',
    company: 'Grupo Genil | Capital Burger',
    dateStart: 'Sept 2023',
    dateEnd: 'Present',
    descriptionKeys: [
      'data_analyst',
      'process_automation',
      'ai_sql_integration',
      'api_integration_2',
      'content_production',
      'creative_campaigns',
      'modeling_rendering',
      'logistics_management',
      'guest_management',
      'social_media_management',
      'media_buying'
    ]
  },
  {
    position: 'interactive_developer',
    company: 'Alternativa Comunicación',
    dateStart: 'Mar 2023',
    dateEnd: 'Nov 2023',
    descriptionKeys: [
      'environment_digitalization',
      'project_management',
      'inter_department',
      'client_interaction',
      'lead_developer',
      'resource_optimization',
      'confidential_clients'
    ]
  },
  {
    position: 'react_native_developer',
    company: 'Área F5',
    dateStart: 'Mar 2021',
    dateEnd: 'Sept 2021',
    descriptionKeys: [
      'workflow_development',
      'layout_design',
      'functionality_implementation',
      'api_integration',
      'version_control',
      'etc'
    ]
  },
  {
    position: 'it_robotics_monitor',
    company: 'Magic Place',
    dateStart: 'Oct 2019',
    dateEnd: 'May 2020',
    descriptionKeys: [
      'it_monitoring',
      'teaching_technology',
      'software_introduction'
    ]
  }
];

const Experience = () => {
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

    const elements = sectionRef.current.querySelectorAll('.experience-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ExperienceWrapper id="experience" ref={sectionRef}>
      <SectionTitle>{t('experience_title')}</SectionTitle>
      <Timeline />
      <ExperienceGrid>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index}>
            <Connector />
            <ExperienceCard
              className="experience-card"
              position={t(exp.position)}
              company={exp.company}
              dateStart={exp.dateStart}
              dateEnd={exp.dateEnd}
              description={exp.descriptionKeys.map((key) => `- ${t(key)}`).join('\n')}
            />
          </ExperienceItem>
        ))}
      </ExperienceGrid>
    </ExperienceWrapper>
  );
};

export default Experience;

// Estilos
const ExperienceWrapper = styled.section`
  position: relative;
  padding: 60px 20px;
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

const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  position: relative;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Timeline = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--red-color);
  border-radius: 2px;

  @media (max-width: 768px) {
    left: 10px;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Connector = styled.div`
  position: absolute;
  left: -321px;
  width: 320px;
  height: 2px;
  background-color: var(--red-color);

  @media (max-width: 768px) {
    display: none;
  }
`;
