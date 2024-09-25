'use client';
import { useLanguage } from '@/app/ui/LanguageContext';

export default function Home() {
  const introEn = "Hi! My name is Andreas Haller";
  const introEs = "Hola! Mi nombre es Andreas Haller";

  const bioEn = "I am a software developer with a passion for creating innovative and user-friendly solutions. I have a diverse background in programming, machining, customer service, education and entrepreneurship that has given me a broad range of skills and experiences. Now, as a graduate of a full stack web dev bootcamp, I am focused on taking my programming skills to the next level and landing my first job in a tech company. My diverse background has given me a unique perspective that allows me to approach challenges with creativity and innovation, and I am excited to bring this mindset to the world of software engineering.";
  const bioEs = "Soy un desarrollador de software apasionado por crear soluciones innovadoras y fáciles de usar. Tengo una trayectoria diversa en programación, mecanizado, servicio al cliente, educación y emprendimiento, lo que me ha proporcionado una amplia variedad de habilidades y experiencias. Ahora, como graduado de un bootcamp de desarrollo web Full Stack, estoy enfocado en llevar mis habilidades de programación al siguiente nivel y conseguir mi primer trabajo en una empresa tecnológica. Mi trayectoria diversa me ha brindado una perspectiva única que me permite abordar los desafíos con creatividad e innovación, y estoy emocionado de llevar esta mentalidad al mundo de la ingeniería de software.";




  const { language } = useLanguage();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[680px] mx-auto">
        <h1>{language === "En" ? introEn : introEs}</h1>
        <p>{language === "En" ? bioEn : bioEs}</p>
        <h1>Currently working on <a className='font-bold' href='https://trackeen.cl/' target='_blank' rel='noopener'>Trackeen</a></h1>
        <p>Trackeen is a web app that helps you keep track of your personal projects and goals. It is a work in progress and I am excited to share it with you soon!</p> 
        <h1>More Projects:</h1>
        <h1>Latest posts:</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>bye</p>
      </footer>
    </div>
  );
}
