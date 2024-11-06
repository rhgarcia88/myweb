import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      name: 'automolina',
      description: t('automolina_description'),
      technologies: ["React", "MongoDB", "Express", "Node.js", "Git"],
      testimonial: t('automolina_testimonial'),
      images: ['/public/projects/molina/vehicles.png', '/public/projects/molina/newClass.png', '/public/projects/molina/thumb.png'],
      thumb: '/public/projects/molina/thumb.png',
    },
    {
      id: 2,
      name: 'eventsphere',
      description: t('eventsphere_description'),
      technologies: ["Javascript", "HTML", "CSS", "Node.js", "MongoDB", "JsonWebToken", 'Bcrypt', "Cloudinary"],
      images: ['/public/projects/eventsphere/Eventsphere.png', '/public/projects/eventsphere/Eventsphere2.png'],
      thumb: '/public/projects/eventsphere/Eventsphere.png',
    },
    {
      id: 3,
      name: 'hardness_lab',
      description: t('hardness_lab_description'),
      technologies: ["Unity 3D", "C#", "Blender", "Netlify"],
      images: ['/public/projects/ucav/durometer.png', '/public/projects/ucav/durometer2.png','/public/projects/ucav/durometer3.png'],
      thumb: '/public/projects/ucav/durometer.png',
      youtubeLink: "https://www.youtube.com/embed/qTCxIO_bEg8",
    },
    {
      id: 4,
      name: 'zardahi',
      description: t('zardahi_description'),
      technologies: ["C#", "Unity", "Shader Programming"],
      images: ['/public/projects/zardahi/zardahi.png'],
      thumb: '/public/projects/zardahi/zardahi.png',
      youtubeLink: "https://www.youtube.com/embed/D_3NZbdVUZ0",
    },
    {
      id: 5,
      name: 'this_website',
      description: t('this_website_description'),
      technologies: ["React.js", "Vite", "Styled Components"],
      images: ['/public/projects/this/cv.png'],
      thumb: '/public/projects/this/cv.png',
      codeLink: "https://github.com/rhgarcia88/myweb",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projectsData[0]); // Selecciona el primer proyecto al inicio

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <ProjectsWrapper id="portfolio">
      <Sidebar>
        {projectsData.map((project) => (
          <SidebarItem
            key={project.id}
            onClick={() => handleProjectClick(project)}
            isSelected={selectedProject.id === project.id}
            thumb={project.thumb}
          >
            <ProjectName>{t(project.name)}</ProjectName>
          </SidebarItem>
        ))}
      </Sidebar>

      {selectedProject && (
        <MainContent>
          <ProjectTitle>{t(selectedProject.name)}</ProjectTitle>
          <ProjectDescription>{selectedProject.description}</ProjectDescription>
          <ImagesContainer>
            {selectedProject.images.map((image, index) => (
              <ProjectImage key={index} src={image} alt={`${t(selectedProject.name)} ${index + 1}`} />
            ))}
          </ImagesContainer>
          <Technologies>
            <strong>{t('technologies')}:</strong> {selectedProject.technologies.join(', ')}
          </Technologies>
          <Testimonial>
            <em>{selectedProject.testimonial}</em>
          </Testimonial>
          {selectedProject.youtubeLink && (
            <YoutubeContainer>
              <iframe
                width="100%"
                height="315"
                src={selectedProject.youtubeLink}
                title={`${t(selectedProject.name)} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </YoutubeContainer>
          )}
          {selectedProject.codeLink && (
            <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
              <Button>{t('github_button')}</Button>
            </a>
          )}
        </MainContent>
      )}
    </ProjectsWrapper>
  );
};

// Estilos adicionales
const YoutubeContainer = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    border: none;
    width: 100%;
    height: 315px;
    border-radius: 8px;
  }
`;

// Estilos
const ProjectsWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #121212;
  font-family: 'Raleway';
  width: 80%;
  margin: 0 10%;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    height: 200vh;
  }
`;

const Sidebar = styled.div`
  width: 25%;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  background-image: url(${(props) => props.thumb});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 10px;
  height: 100px;
  transition: background-color 0.3s ease, filter 0.3s ease;
  filter: ${(props) => (props.isSelected ? "none" : "grayscale(100%)")};
  position: relative;

  &:hover {
    filter: ${(props) => (props.isSelected ? "none" : "grayscale(50%)")};
  }
`;

const ProjectName = styled.p`
  color: #ffffff;
  font-size: 1.1em;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 10px;
  margin: 0;
  text-align: center;
  position: absolute;
  bottom: 10px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  color: #ffffff;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2em;
  color: var(--red-color);
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
  white-space: pre-line;
  overflow-wrap: break-word;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Technologies = styled.p`
  margin-top: 20px;
  font-size: 1em;
  color: var(--red-color);
`;

const Testimonial = styled.blockquote`
  margin-top: 20px;
  font-size: 1em;
  font-style: italic;
  color: #cccccc;
`;

export default ProjectsPage;
