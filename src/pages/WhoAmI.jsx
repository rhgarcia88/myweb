import styled from 'styled-components';
import { fadeInDown } from '../Animations';

export const WhoAmI = () =>  {

  return(
    <WhoAmIWrapper>
    
    <h2>Who Am I?</h2>
    <p>
        Hi! I'm Rafa García, a passionate Full Stack Web Developer based in Granada, Spain. With a strong foundation in both frontend and backend technologies, I specialize in building efficient, user-centric applications that bring ideas to life. From crafting seamless user interfaces to designing robust backend systems, I enjoy the full process of turning code into solutions.
      </p>
      <p>
        I believe in the power of simplicity and functionality, always aiming to create digital experiences that are not only visually appealing but also highly practical. With each project, I strive to write clean, maintainable code and constantly seek opportunities to expand my skill set.
      </p>
      <p>
        In my journey as a developer, I've come to realize that learning is endless and collaboration is key. I’m committed to staying updated with the latest tech trends and actively participate in the developer community to share insights and keep growing. Let's connect and explore how we can bring innovative ideas into the digital world together!
      </p>
      <img src="leftlcoud.png"/>
      <img src="rightcloud.png"/>
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

h2{
  font-family: 'Raleway';
  font-size: 50px;
  color:  var(--black-color);
}
p{
  color: var(--black-color);
  text-align: center;
  font-family: 'Raleway';
}

img{
  position: absolute;
  width: 100%;
  margin: 0;
  animation: ${fadeInDown} 1s ease-out;
}


`;