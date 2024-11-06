import styled from 'styled-components';
import SkillCard from '../components/SkillCard';

const skills = [
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/javascript.svg', name: 'JavaScript' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg', name: 'React' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/nodejs.svg', name: 'Node.js' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/mongodb.svg', name: 'MongoDB' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png', name: 'Vite' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/git.svg', name: 'Git' },
];

const otherSkills = [
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg', name: 'React Native' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/social%20icons/java.svg', name: 'Java' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/mysql.svg', name: 'MySQL' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c%23.svg', name: 'C#' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/unity-69.svg', name: 'Unity' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/html.svg', name: 'HTML' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/css.svg', name: 'CSS' },
  { logo: 'https://images.ctfassets.net/un655fb9wln6/11sTQC2LhhAtJyb7ptQvEl/6c2dbec03b3a2830a24e09e913ad46cc/Make-app-icon.png', name: 'Make' },
];

const learningSkills = [
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/typescript.svg', name: 'Typescript' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', name: 'Next.js' },
  { logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/cloud/docker.svg', name: 'Docker' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', name: 'Kubernetes' },


];

const TechStack = () => {
  return (
    <TechStackWrapper  id="skills">

      <SectionTitle>Skills</SectionTitle>


      <SectionSubTitle>Main Tech Stack</SectionSubTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index} logo={skill.logo} name={skill.name} />
        ))}
      </SkillsGrid>

   
      <SectionSubTitle>Other Skills</SectionSubTitle>
      <SkillsGrid>
        {otherSkills.map((skill, index) => (
          <SkillCard key={index} logo={skill.logo} name={skill.name} />
        ))}
      </SkillsGrid>
      <SectionSubTitle>Learning Next</SectionSubTitle>
      <SkillsGrid>
        {learningSkills.map((skill, index) => (
          <SkillCard key={index} logo={skill.logo} name={skill.name} />
        ))}
      </SkillsGrid>
    </TechStackWrapper>
  );
};

export default TechStack;

const TechStackWrapper = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: var(--black-color);
  font-family: 'Raleway';
  font-size: 50px;

`;

const SectionSubTitle = styled.h3`
  color: var(--black-color);
  font-family: 'Raleway';
  font-size: 20px;
  margin-top: 30px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 800px; 
  margin: auto; 
  align-items: center;
`;

