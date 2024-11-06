// Experience.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/ExperienceCard';

const experienceData = [
  {
    position: 'Marketing Manager & Automation Engineer',
    company: 'Grupo Genil | Capital Burger',
    dateStart: 'Sept 2023',
    dateEnd: 'Present',
    description: `
      - Data analyst for statistical insights in a restaurant group, serving over 8 restaurants.
      - Development of complex process automations to optimize internal workflows using tools like Make (Integromat) and Zapier.
      - Integration of AI-powered solutions and SQL databases within automated workflows to enhance decision-making and efficiency.
      - API module integration (mySQL, GPT-4, etc) for seamless data flow and operational coherence.
      - Design and production of online content and printed materials for restaurants (vinyls, menus, placemats, etc).
      - Creation and execution of creative marketing campaigns across multiple channels.
      - 3D Modeling and Rendering for advertising campaigns and digital content using Unreal Engine 5 and Blender.
      - Logistics management for restaurant materials to ensure smooth operations.
      - Guest management for brand collaborations and special events.
      - Social media management for customer engagement and brand growth.
      - Media buying and campaign management on platforms like Meta, Google, and TikTok Ads.
      - Oversight and management of delivery services (Glovo, Just Eat, Watson, Delitbee, Uber Eats), ensuring alignment with brand standards.
    `,
  },
  {
    position: 'Interactive Experiences Developer',
    company: 'Alternativa Comunicación',
    dateStart: 'Mar 2023',
    dateEnd: 'Nov 2023',
    description: `
      - Digitalization of real environments for online tool development.
      - Project management and team leadership.
      - Mediation and communication between project departments.
      - Direct client interaction.
      - Lead developer for final projects in Unity and C#.
      - Optimization of resources and maximum exploitation of existing assets.
      - Projects for high-profile clients (confidential).
    `,
  },
  {
    position: 'React Native Developer',
    company: 'Área F5',
    dateStart: 'Mar 2021',
    dateEnd: 'Sept 2021',
    description: `
      - Complete workflow development of apps in React Native.
      - Layout design.
      - Functionality implementation.
      - REST APIs integration.
      - Version control.
      - Etc.
    `,
  },
  {
    position: 'IT and Robotics Monitor',
    company: 'Magic Place',
    dateStart: 'Oct 2019',
    dateEnd: 'May 2020',
    description: `
      - IT and robotics monitoring at C.E.I.P. Sagrado Corazón De Jesús during extracurricular activities.
      - Teaching technology basics and computer skills.
      - Introduction to software such as Adobe Photoshop, Scratch, and Arduino.
    `,
  },
];

const Experience = () => {
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

    const elements = sectionRef.current.querySelectorAll('.experience-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ExperienceWrapper id="experience" ref={sectionRef}>
      <SectionTitle>Experience</SectionTitle>
      <Timeline />
      <ExperienceGrid>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index}>
            <Connector />
            <ExperienceCard
              className="experience-card"
              position={exp.position}
              company={exp.company}
              dateStart={exp.dateStart}
              dateEnd={exp.dateEnd}
              description={exp.description}
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
    padding-left: 20px; /* Reduce el padding en pantallas más pequeñas */
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
    left: 10px; /* Ajusta la posición en pantallas más pequeñas */
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