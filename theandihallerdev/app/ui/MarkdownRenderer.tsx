import { marked } from "marked";

export default function MarkdownRenderer({ filePath }: { filePath: number }) {
  const files = [
    {
      file: `
# Andreas Haller  
### Full Stack Web Developer | Software Developer  

### [LinkedIn](https://www.linkedin.com/in/andreas-haller-schade/?locale=en_US) - [GitHub](https://github.com/TheAndiHaller) - [Website](https://theandihaller.com/)

---

## Summary  
Full Stack web developer with a focus on Back-end, experienced in working with Node.js, React, Redux, and other technologies. I have a diverse background in programming, 3D designing, customer service, education and entrepreneurship. I worked on various technology startups where I served in software development, and teaching roles. Always eager to learn, face new challenges, and share knowledge with others. Now, seeking full-time opportunities to leverage my expertise in backend development and startup experience in a dynamic team environment.

---

## Technologies  
**Languages & Frameworks**: JavaScript, Python, React, Redux, Node.js, Express, Postgres, Sequelize  
**Tools & Additional Skills**: Scrum, Git, Trello, Linux

---

## Experience  

**Co-Founder & Lead Developer - Trackeen**  
*May 2024 - Present*  
- Developed an Arduino-based habit-tracking device that sends data to Google Sheets via the Google API for remote analysis. 
- Managed firmware, API integration, and OTA firmware updates. 
- Optimized the system for accuracy and reliability. \n
#### [Web](https://trackeen.cl/)

**Platform Director & Course Instructor - TribuMaker**  
*Jan 2021 - Jun 2022*  
- Coordinated with instructors the uploading of courses and contents to the platform.
- Provided technical assistance and improved processes with JetEngine.
- Developed and taught courses on Arduino, HTML, JavaScript, IoT, and Robotics with Arduino and ESP8266 boards.

**Owner - AH-3D Impresiones**  
*Oct 2018 - Mar 2022*  
3D printing services enterprise for vehicle spare parts, supports, cabinets, bazaar items, and decorative items in plastic.
- Managed sales, orders, and manufacturing. Assembled and programmed 3D printers.
- Parametric design with Fusion 360.

**Instructor and Developer - Ultrabot**  
*Jan 2018 - Oct 2018*  
- Taught robotics in secondary schools using Arduino, Python, and Raspberry Pi.
- Developed a block-based programming tool to introduce robotics, created with Node.js, Electron, and Angular.

**Freelance Developer**  
*Apr 2017 - Present*  
- Developed Software and firmware for diagnostic equipment.
- Created temperature control systems based on Arduino, using PID controllers, IoT.

**Technical Support Agent - 5CA**  
*Apr 2012 - Feb 2015*  
- Provided technical support in German and Spanish for companies in the video game industry.

---

## Projects  

**Full Stack Web Developer - Henry Fitness - Bootcamp Henry**  
*Aug 2022*  
A group project of a web app that aims to improve the online interaction between a gym and its customers. Technologies used: Express, Sequelize, NodeJS, PostgreSQL, React, Redux, Bootstrap, JWT, NodeMailer, Cloudinary.
**Main Contributions:**  
- Created the database model and access routes.
- Implemented verification with JSON Web Token.
- Integrated NodeMailer for email notifications.  
#### [Deploy](https://hfitness.vercel.app/) - [Repo](https://github.com/CAROLMEJIA/DONDE_ENTRENO)

**Full Stack Web Developer - Countries App - Bootcamp Henry**  
*Jul 2022*  
Developed a countries app with searches, filtering, sorting, and creation features.  
**Technologies**: React, Node.js, Express, PostgreSQL  
#### [Deploy](https://andiscountriesapp.vercel.app/) - [Repo](https://github.com/TheAndiHaller/WorldExplorer)

---

## Education  
- **Full Stack Developer** - Henry Bootcamp, 700 hours of theoretical-practical coursework, 2022  
- **Systems Analyst** (incomplete) - Da Vinci School, Argentina, 2013 - 2015  
- **Technical Bachelor's in Computer Science** - Secondary level, Paraguay, 2006 - 2008  

---

## Languages  
- **Spanish** - Native  
- **English** - C2 Proficient ([EFSET Certification](http://www.efset.org/cert/4MUyYS))  
- **German** - Advanced  

---

## Other Interests  
- Passionate about robotics, including designing, machining, and programming robots and other devices. Worked with my father as an apprentice in his machining shop.
- Enjoys exploring science fiction in books, TV shows, and movies.

---

`,
    },
    {
      file: `
# Andreas Haller  
### Full Stack Web Developer | Software Developer  

### [LinkedIn](https://www.linkedin.com/in/andreas-haller-schade/) - [GitHub](https://github.com/TheAndiHaller) - [Website](https://theandihaller.com/)

---

## Resumen  
Full Stack Web Developer con un enfoque en Back-end, experimentado en trabajar con Node.js, React, Redux y otras tecnologías. Cuento con experiencia en diversas áreas como programación, diseño 3D, servicio al cliente, educación y emprendimiento. Trabajé en diversas startups tecnológicas donde desempeñé roles de desarrollo de software y enseñanza. Siempre dispuesto a aprender, enfrentar nuevos desafíos y compartir conocimientos con otros. Actualmente busco oportunidades de tiempo completo para aprovechar mi experiencia en desarrollo backend y en startups dentro de un entorno de equipo dinámico.

---

## Tecnologías  
**Lenguajes y Frameworks:** JavaScript, Python, React, Redux, Node.js, Express, Postgres, Sequelize
**Herramientas y Habilidades Adicionales:** Scrum, Git, Trello, Linux

---

## Experiencia  

**Co-Founder & Lead Developer - Trackeen**  
*May. 2024 - Actualidad*  
- Desarrollé un dispositivo basado en Arduino para el seguimiento de hábitos, que envía datos a Google Sheets mediante la API de Google para análisis remoto.
- Gestioné el firmware, la integración de API y la actualización de firmware OTA.
- Optimicé el sistema para garantizar precisión y confiabilidad.
#### [Web](https://trackeen.cl/)

**Director de Plataforma & Instructor de Cursos - TribuMaker**  
*Ene. 2021 - Jun. 2022*  
- Coordiné con los instructores la carga de los cursos y contenidos a la plataforma.
- Brindé asistencia técnica y automatizé procesos con JetEngine.
- Desarrollé y dicté cursos sobre programación Arduino, HTML, JavaScript, Internet de las Cosas y Robótica con placas Arduino y ESP8266.

**Propietario - AH-3D Impresiones**  
*Oct. 2018 - Mar. 2022*  
Emprendimiento de servicios de diseño e impresión 3D en plástico de repuestos de vehículos, soportes, gabinetes, artículos de bazar y decorativos
- Me encargué de las ventas, pedidos y fabricación. Ensamblaje y programación de impresoras 3D.
- Diseño paramétrico con Fusion 360.

**Instructor & Desarrollador - Ultrabot**  
*Ene. 2018 - Oct. 2018*  
- Enseñé robótica en escuelas secundarias con Arduino, Python y Raspberry Pi.
- Desarrollé herramientas de programación con bloques para una introducción más amigable a la robótica, creada con NodeJs, Electron y Angular.

**Desarrollador Freelance**  
*Abr. 2017 - Actualidad*  
- Desarrollé software y firmware para equipos de diagnóstico.
- Creé sistemas de control de temperatura basados en Arduino, utilizando PID y IoT.

**Agente de Soporte Técnico - 5CA**  
*Abr. 2012 - Feb. 2015*  
- Dí soporte técnico en alemán y español a empresas del rubro de los videojuegos.

---

## Proyectos  

**Full Stack Web Developer - Henry Fitness - Bootcamp Henry**  
*Ago. 2022*  
Proyecto grupal de una Web App que busca mejorar la interacción online entre un gimnasio y sus clientes.  
**Tecnologías utilizadas**: Express, Sequelize, NodeJS, PostgreSQL, React, Redux, Bootstrap, JWT, NodeMailer, Cloudinary.  
**Mis contribuciones principales fueron**:  
- Creación del modelo de la base de datos y rutas de acceso.
- Implementación de la verificación con JSON Web Token.
- Integración de NodeMailer para notificaciones vía email.  
#### [Deploy](https://hfitness.vercel.app/) - [Repo](https://github.com/CAROLMEJIA/DONDE_ENTRENO)

**Full Stack Web Developer - Countries App - Bootcamp Henry**  
*Jul. 2022*  
Diseñé y desarrollé una app de países con búsquedas, filtrados, ordenamientos y creación.  
**Tecnologías**: React, Node.js, Express, PostgreSQL  
#### [Deploy](https://andiscountriesapp.vercel.app/) - [Repo](https://github.com/TheAndiHaller/WorldExplorer)

---

## Formación  
- **Full Stack Developer** - Henry Bootcamp, 700 horas de cursado teórico-práctico, 2022  
- **Analista de Sistemas** (incompleto) - Escuela Da Vinci, Argentina, 2013 - 2015  
- **Bachiller Técnico en Informática** - Nivel Secundario, Paraguay, 2006 - 2008  

---

## Idiomas  
- **Español** - Nivel nativo  
- **Inglés** - C2 Proficient ([Certificación EFSET](http://www.efset.org/cert/4MUyYS))  
- **Alemán** - Nivel avanzado  

---

## Otros Intereses  
- Apasionado por la robótica, incluyendo el diseño, mecanizado y programación de robots y otros dispositivos. Trabajé como aprendiz junto a mi padre en su taller de mecanizado.
- Disfruto explorando la ciencia ficción en libros, series de televisión y películas.


---


      `,
    },
  ];

  const html = marked.parse(
    files[filePath] ? files[filePath].file : "Not found"
  );

  return (
    <div className="my-8 prose" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
