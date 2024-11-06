// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "contact": "Contact",
      "skills": "Skills",
      "studies": "Studies",
      "experience": "Experience",
      "hello": "Hi! My name is ",
      "connect": ", let's connect",
      "who_am_i_title": "Who Am I?",
      "who_am_i_intro": "Hi! I'm Rafa García, a passionate Full Stack Web Developer based in Granada, Spain. With a strong foundation in both frontend and backend technologies, I specialize in building efficient, user-centric applications that bring ideas to life. From crafting seamless user interfaces to designing robust backend systems, I enjoy the full process of turning code into solutions.",
      "who_am_i_belief": "I believe in the power of simplicity and functionality, always aiming to create digital experiences that are not only visually appealing but also highly practical. With each project, I strive to write clean, maintainable code and constantly seek opportunities to expand my skill set.",
      "who_am_i_journey": "In my journey as a developer, I've come to realize that learning is endless and collaboration is key. I’m committed to staying updated with the latest tech trends and actively participate in the developer community to share insights and keep growing. Let's connect and explore how we can bring innovative ideas into the digital world together!",
      "studies_title": "Studies",
      "full_stack_developer": "Full Stack Web Developer BootCamp",
      "video_game_dev": "Video Game Development and Interactive Experiences",
      "multiplatform_dev": "Multiplatform Application Development",
      "english_fce": "English FCE B2 Level",
      "bachelor_tech_sciences": "Bachelor in Technological Sciences",
      "experience_title": "Experience",
      
      "automolina": "Automolina",
      "automolina_description": "Automolina is a class management application developed as an individual freelance project for the driving school \"Autoescuela Molina\" in Málaga. This custom solution was designed to meet the specific needs of driving schools, facilitating class scheduling, instructor assignment, and student progress tracking. As a freelance developer, I handled the entire project lifecycle, from requirements analysis to design, development, and implementation. Automolina has significantly enhanced operational efficiency for Autoescuela Molina, enabling a more agile management approach focused on improving the student experience.",
      "automolina_testimonial": "\"The program has been as we requested, Rafa has made the modifications that we have requested to perfect it, The price is unbeatable! He has delivered it in the time he said, Very good service, I would repeat if I need another program.\" – Autoescuela Molina, Málaga",
      "eventsphere": "EventSphere",
      "eventsphere_description": "Eventsphere is an event management application created as practice for the Full Stack Bootcamp, using direct DOM manipulation. The application integrates a backend user authentication system using JSON Web Tokens (jsonwebtoken) and password management with bcrypt for added security. In addition, it employs Cloudinary for file management and storage, facilitating the management of event-related images and documents.",
      "hardness_lab": "Virtual Hardness Testing Laboratory",
      "hardness_lab_description": "This project was developed as a virtual lab simulation for the University of Ávila (UCAV) during my time at Alternativa Comunicación. The application simulates hardness testing on a durometer, a machine used to measure material resistance. I led the project team, coordinating tasks and ensuring the project adhered to deadlines and quality standards.",
      "zardahi": "Zardahi",
      "zardahi_description": "Zardahi is an adventure and mental agility puzzle game developed by a team of five students over five months. This game challenges players to solve logic-based puzzles within three themed rooms inspired by popular series and movies: Game of Thrones, Pirates of the Caribbean, and Star Wars. I was responsible for all aspects of the game’s programming and functionality.",
      "this_website": "This Website",
      "this_website_description": "This Website is an example too. It was created from scratch in 48h using React and Vite. Check out the code on GitHub!",
      "technologies": "Technologies",
      "github_button": "GitHub",

      "marketing_manager": "Marketing Manager & Automation Engineer",
      "interactive_developer": "Interactive Experiences Developer",
      "react_native_developer": "React Native Developer",
      "it_robotics_monitor": "IT and Robotics Monitor",

      "data_analyst": "Data analyst for statistical insights in a restaurant group, serving over 8 restaurants.",
      "process_automation": "Development of complex process automations to optimize internal workflows using tools like Make (Integromat) and Zapier.",
      "ai_sql_integration": "Integration of AI-powered solutions and SQL databases within automated workflows to enhance decision-making and efficiency.",
      "api_integration_2": "API module integration (mySQL, GPT-4, etc) for seamless data flow and operational coherence.",
      "content_production": "Design and production of online content and printed materials for restaurants (vinyls, menus, placemats, etc).",
      "creative_campaigns": "Creation and execution of creative marketing campaigns across multiple channels.",
      "modeling_rendering": "3D Modeling and Rendering for advertising campaigns and digital content using Unreal Engine 5 and Blender.",
      "logistics_management": "Logistics management for restaurant materials to ensure smooth operations.",
      "guest_management": "Guest management for brand collaborations and special events.",
      "social_media_management": "Social media management for customer engagement and brand growth.",
      "media_buying": "Media buying and campaign management on platforms like Meta, Google, and TikTok Ads.",
      
      "environment_digitalization": "Digitalization of real environments for online tool development.",
      "project_management": "Project management and team leadership.",
      "inter_department": "Mediation and communication between project departments.",
      "client_interaction": "Direct client interaction.",
      "lead_developer": "Lead developer for final projects in Unity and C#.",
      "resource_optimization": "Optimization of resources and maximum exploitation of existing assets.",
      "confidential_clients": "Projects for high-profile clients (confidential).",
      
      "workflow_development": "Complete workflow development of apps in React Native.",
      "layout_design": "Layout design.",
      "functionality_implementation": "Functionality implementation.",
      "api_integration": "REST APIs integration.",
      "version_control": "Version control.",
      "etc": "Etc.",
      
      "it_monitoring": "IT and robotics monitoring at C.E.I.P. Sagrado Corazón De Jesús during extracurricular activities.",
      "teaching_technology": "Teaching technology basics and computer skills.",
      "software_introduction": "Introduction to software such as Adobe Photoshop, Scratch, and Arduino."
    }
  },
  es: {
    translation: {
      "contact": "Contacto",
      "skills": "Habilidades",
      "studies": "Estudios",
      "experience": "Experiencia",
      "hello": "¡Hola! Soy ",
      "connect": " ¿Conectamos?",
      "who_am_i_title": "¿Quién soy?",
      "who_am_i_intro": "¡Hola! Soy Rafa García, un apasionado Desarrollador Web Full Stack con sede en Granada, España. Con una base sólida en tecnologías tanto de frontend como de backend, me especializo en crear aplicaciones eficientes y centradas en el usuario que dan vida a las ideas.",
      "who_am_i_belief": "Creo en el poder de la simplicidad y la funcionalidad, siempre buscando crear experiencias digitales que sean no solo visualmente atractivas, sino también altamente prácticas.",
      "who_am_i_journey": "En mi camino como desarrollador, he llegado a comprender que el aprendizaje es interminable y la colaboración es clave. Estoy comprometido a mantenerme actualizado con las últimas tendencias tecnológicas.",
      "studies_title": "Estudios",
      "full_stack_developer": "BootCamp de Desarrollador Web Full Stack",
      "video_game_dev": "Desarrollo de Videojuegos y Experiencias Interactivas",
      "multiplatform_dev": "Grado Superior Desarrollo de Aplicaciones Multiplataforma",
      "english_fce": "B2 Inglés FCE",
      "bachelor_tech_sciences": "Bachillerato en Ciencias Tecnológicas",

      "automolina": "Automolina",
      "automolina_description": "Automolina es una aplicación de gestión de clases desarrollada como proyecto freelance individual para la autoescuela \"Autoescuela Molina\" en Málaga. Esta solución personalizada fue diseñada para satisfacer las necesidades específicas de las autoescuelas, facilitando la programación de clases, la asignación de instructores y el seguimiento del progreso de los estudiantes.",
      "automolina_testimonial": "\"El programa ha sido tal como lo solicitamos, Rafa ha realizado las modificaciones que le pedimos para perfeccionarlo, ¡El precio es inmejorable! Lo ha entregado en el tiempo que dijo, Muy buen servicio, repetiría si necesitara otro programa.\" – Autoescuela Molina, Málaga",
      "eventsphere": "EventSphere",
      "eventsphere_description": "Eventsphere es una aplicación de gestión de eventos creada como práctica para el Bootcamp de Full Stack, usando manipulación directa del DOM. La aplicación integra un sistema de autenticación de usuarios en el backend utilizando JSON Web Tokens (jsonwebtoken) y gestión de contraseñas con bcrypt.",
      "hardness_lab": "Laboratorio Virtual de Pruebas de Dureza",
      "hardness_lab_description": "Este proyecto fue desarrollado como un laboratorio virtual para la Universidad de Ávila (UCAV) durante mi tiempo en Alternativa Comunicación. La aplicación simula pruebas de dureza en un durómetro. Dirigí el equipo de proyecto, coordinando tareas y asegurando que el proyecto cumpliera con los plazos y estándares de calidad.",
      "zardahi": "Zardahi",
      "zardahi_description": "Zardahi es un juego de aventura y agilidad mental desarrollado por un equipo de cinco estudiantes durante cinco meses. Este juego desafía a los jugadores a resolver acertijos basados en lógica en tres salas temáticas inspiradas en series y películas populares: Juego de Tronos, Piratas del Caribe y Star Wars.",
      "this_website": "Este Sitio Web",
      "this_website_description": "Este sitio web también es un ejemplo. Fue creado desde cero en 48h usando React y Vite. ¡Consulta el código en GitHub!",
      "technologies": "Tecnologías",
      "github_button": "GitHub",
      "experience_title": "Experiencia",
      
      "marketing_manager": "Marketing Manager & Ingeniero en Automatización",
      "interactive_developer": "Desarrollador de Experiencias Interactivas",
      "react_native_developer": "Desarrollador de React Native",
      "it_robotics_monitor": "Monitor de TI y Robótica",

      "data_analyst": "Analista de datos para obtener información estadística en un grupo de restaurantes que atiende a más de 8 locales.",
      "process_automation": "Desarrollo de automatizaciones de procesos complejos para optimizar flujos de trabajo internos utilizando herramientas como Make (Integromat) y Zapier.",
      "ai_sql_integration": "Integración de soluciones impulsadas por IA y bases de datos SQL en flujos de trabajo automatizados para mejorar la toma de decisiones y la eficiencia.",
      "api_integration_2": "Integración de módulos API (mySQL, GPT-4, etc) para un flujo de datos y coherencia operativa sin problemas.",
      "content_production": "Diseño y producción de contenido en línea y materiales impresos para restaurantes (vinilos, menús, manteles, etc).",
      "creative_campaigns": "Creación y ejecución de campañas de marketing creativas en múltiples canales.",
      "modeling_rendering": "Modelado y Renderizado 3D para campañas publicitarias y contenido digital utilizando Unreal Engine 5 y Blender.",
      "logistics_management": "Gestión de logística para materiales de restaurante para asegurar operaciones fluidas.",
      "guest_management": "Gestión de invitados para colaboraciones de marca y eventos especiales.",
      "social_media_management": "Gestión de redes sociales para la participación del cliente y el crecimiento de la marca.",
      "media_buying": "Compra de medios y gestión de campañas en plataformas como Meta, Google y TikTok Ads.",
      
      "environment_digitalization": "Digitalización de entornos reales para el desarrollo de herramientas en línea.",
      "project_management": "Gestión de proyectos y liderazgo de equipos.",
      "inter_department": "Mediación y comunicación entre departamentos de proyectos.",
      "client_interaction": "Interacción directa con clientes.",
      "lead_developer": "Desarrollador principal para proyectos finales en Unity y C#.",
      "resource_optimization": "Optimización de recursos y máxima explotación de activos existentes.",
      "confidential_clients": "Proyectos para clientes de alto perfil (confidencial).",
      
      "workflow_development": "Desarrollo completo del flujo de trabajo de aplicaciones en React Native.",
      "layout_design": "Diseño de maquetación.",
      "functionality_implementation": "Implementación de funcionalidad.",
      "api_integration": "Integración de APIs REST.",
      "version_control": "Control de versiones.",
      "etc": "Etc.",

      "it_monitoring": "Supervisión de TI y robótica en el C.E.I.P. Sagrado Corazón de Jesús durante actividades extraescolares.",
      "teaching_technology": "Enseñanza de fundamentos de tecnología y habilidades informáticas.",
      "software_introduction": "Introducción a software como Adobe Photoshop, Scratch y Arduino."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // idioma inicial
    fallbackLng: "en", // si no encuentra una traducción, usa inglés
    interpolation: {
      escapeValue: false // react ya escapa los valores por defecto
    }
  });

export default i18n;
