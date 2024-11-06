// ProjectsPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';

const projectsData = [
  {
    id: 1,
    name: "Automolina",
    description: `
      Automolina is a class management application developed as an individual freelance project for the driving school "Autoescuela Molina" in Málaga. This custom solution was designed to meet the specific needs of driving schools, facilitating class scheduling, instructor assignment, and student progress tracking.

      As a freelance developer, I handled the entire project lifecycle, from requirements analysis to design, development, and implementation. Automolina allows administrators and instructors to:

      - Schedule and organize both theoretical and practical classes, optimizing resource utilization.
      - Assign instructors to each class based on availability and expertise.
      - Record and monitor each student's progress, providing a detailed overview of their development.
      - Automate reminders and notifications to keep students and instructors informed of their upcoming commitments.

      Automolina has significantly enhanced operational efficiency for Autoescuela Molina, enabling a more agile management approach focused on improving the student experience.
    `,
    technologies: ["React", "MongoDB", "Express", "Node.js", "Git"],
    testimonial: `
     "The program has been as we requested,
        Rafa has made the modifications that we have requested to perfect it,
        The price is unbeatable!
        He has delivered it in the time he said,
        Very good service, i would repeat if i need another program." – Autoescuela Molina, Málaga
    `,
    images: ['/public/projects/molina/vehicles.png', '/public/projects/molina/newClass.png', '/public/projects/molina/thumb.png'],
    thumb: '/public/projects/molina/thumb.png'
  },
  {
    id: 2,
    name: "EventSphere",
    description: `
     Eventsphere is an event management application created as practice for the Full Stack Bootcamp, using direct DOM manipulation.

 This platform allows event organizers to create, manage and promote events, while users can easily browse, register and participate in them. 

The application integrates a backend user authentication system using JSON Web Tokens (jsonwebtoken) and password management with bcrypt for added security.

 In addition, it employs Cloudinary for file management and storage, facilitating the management of event-related images and documents.

Key Functionalities:
- Event Creation and Promotion: Tools to create customized events with complete details.
- Exploration and Discovery: Search and filter functionality to find events by category, date     and location.
- Registration and RSVP: Intuitive registration system for users interested in events.
- Secure Authentication: Backend that handles authentication with JSON Web Tokens and bcrypt for user data security.
- File Management with Cloudinary: Cloudinary integration to store and manage event images and documents.
    `,
    technologies: ["Javascript", "HTML", "CSS", "Node.js", "MongoDB", "JsonWebToken", 'Bcrypt', "Cloudinary"],
    images: ['/public/projects/eventsphere/Eventsphere.png', '/public/projects/eventsphere/Eventsphere2.png'],
    thumb: '/public/projects/eventsphere/Eventsphere.png'
  },
  {
    id: 3,
    name: "Virtual Hardness Testing Laboratory",
    description: `
      This project was developed as a virtual lab simulation for the University of Ávila (UCAV) during my time at Alternativa Comunicación. The application simulates hardness testing on a durometer, a machine used to measure material resistance. This was a challenging project where I had to gain an understanding of the physics involved in hardness testing from scratch, in order to accurately simulate the machine’s operations.
  
      In addition to programming the entire application, I led a team to ensure the project met the client’s requirements. The virtual lab provides an interactive, user-friendly environment for students to understand and experiment with material hardness testing, making complex concepts accessible without requiring physical access to the machine.
  
      Key Responsibilities:
      - Studied and applied principles of material hardness testing to accurately simulate the durometer's functions.
      - Programmed the full application, handling both the backend calculations and frontend interactions.
      - Led the project team, coordinating tasks and ensuring the project adhered to deadlines and quality standards.
    `,
    technologies: ["Unity 3D", "C#", "Blender", "Netlify"],
    images: ['/public/projects/ucav/durometer.png', '/public/projects/ucav/durometer2.png','/public/projects/ucav/durometer3.png'],
    thumb: '/public/projects/ucav/durometer.png',
    youtubeLink: "https://www.youtube.com/embed/qTCxIO_bEg8" 
  },
  {
    id: 4,
    name: "Zardahi",
    description: `
      Zardahi is an adventure and mental agility puzzle game developed by a team of five students over a period of five months. This game challenges players to solve logic-based puzzles within three themed rooms inspired by popular series and movies:
  
      - Game of Thrones
      - Pirates of the Caribbean
      - Star Wars
  
      Each room contains a variety of interactive objects that players can use to solve riddles, requiring reasoning and critical thinking to progress. I was responsible for all aspects of the game’s programming and functionality, from the core mechanics to the immersive shader effects, ensuring each room delivers a unique and engaging experience.
  
      Key Responsibilities:
      - Full programming and implementation of game mechanics using C# and Unity.
      - Development of shader effects to enhance the visual experience.
      - Ensuring smooth and interactive functionality across all themed rooms.
    `,
    technologies: ["C#", "Unity", "Shader Programming"],
    images: ['/public/projects/zardahi/zardahi.png'],
    thumb: '/public/projects/zardahi/zardahi.png',
    youtubeLink: "https://www.youtube.com/embed/D_3NZbdVUZ0"
  },
  {
    id: 5,
    name: "This Website",
    description: `
      This Website is an example too. It was created from scratch in 48h using React and Vite. Check out the code on GitHub!
    `,
    technologies: ["React.js", "Vite", "Styled Components"],
    images: ['/public/projects/this/cv.png'],
    thumb: '/public/projects/this/cv.png',
    codeLink: "https://github.com/"

  }

];
const ProjectsPage = () => {
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
            <ProjectName>{project.name}</ProjectName>
          </SidebarItem>
        ))}
      </Sidebar>

      <MainContent>
        <ProjectTitle>{selectedProject.name}</ProjectTitle>
        <ProjectDescription>{selectedProject.description}</ProjectDescription>
        <ImagesContainer>
          {selectedProject.images.map((image, index) => (
            <ProjectImage key={index} src={image} alt={`${selectedProject.name} ${index + 1}`} />
          ))}
        </ImagesContainer>
        <Technologies>
          <strong>Technologies:</strong> {selectedProject.technologies.join(', ')}
        </Technologies>
        <Testimonial>
          <em>{selectedProject.testimonial}</em>
        </Testimonial>
        {/* Renderiza el iframe de YouTube si el enlace existe */}
        {selectedProject.youtubeLink && (
          <YoutubeContainer>
            <iframe
              width="100%"
              height="315"
              src={selectedProject.youtubeLink}
              title={`${selectedProject.name} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </YoutubeContainer>
        )}
        {selectedProject.codeLink && (

        <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
        <Button>GitHub</Button>
        </a>
        )}
      </MainContent>
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