import { NavBar } from './components/NavBar';
import styled from 'styled-components';
import { Presentation} from './pages/Presentation';
import { WhoAmI } from './pages/WhoAmI';
import TechStack from './pages/TechStack';
import Studies from './pages/StudiesPage';
import Experience from './pages/Experience';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';

function App() {


  return (
    <>
<AppWrapper>
<NavBar/>
    <Presentation/>
   <WhoAmI/>
   <TechStack/>
   <Studies/>
   <Experience/>
   <SectionTitle>Portfolio</SectionTitle>
   <ProjectsPage/>
   <Contact/>
    </AppWrapper>
    </>
  )
}

const AppWrapper = styled.div`
padding-top: 3%;


`;

const SectionTitle = styled.h2`
  color: var(--black-color);
  font-family: 'Raleway';
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
`;

export default App
