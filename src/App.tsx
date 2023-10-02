import React, { useEffect, useState } from 'react';
import './App.css';
import { useSpring, animated , config } from 'react-spring';
import FadeInScroll from './FadeInScroll';

interface PersonalInfo {
  name: string;
  description: string;

  // ...otros campos
}





interface ExperienceItem {
  title: string;
  description: string;
  // ...otros campos
}


const experience: ExperienceItem[] = [
  {
    title: 'Tour, Inc.',
    description: 'Led front-end development and oversaw backend operations. Managed requests for seamless user interactions. Optimized performance for immersive digital journeys. Prioritized user-centric design for intuitive interfaces. Applied innovation and creativity for standout solutions.',
  },
  {  
    title: 'Zehlendorf. S.A.C',
    description: 'Led e-commerce project development overseeing frontend and backend. Independently executed web solution covering all aspects of development. Managed entire project lifecycle for seamless integration. Created platform tailored for tire and alloy wheel industry. Successfully demonstrated proficiency in ecommerce development.',
  },
  {
    title: 'Anaco Center', 
    description: 'Held key position making significant contributions. Conceptualized administrative software addressing organizational needs. Demonstrated strong development skills crafting tailored solution. Managed entire project lifecycle through implementation. Delivered software improving operational efficiency and effectiveness.',
  },
  {
    title: 'Freelance Software Developer',
    description: 'Operated as freelancer delivering tailored solutions. Possessed Google Play license showcasing app development commitment. Conducted marketing analysis to optimize app visibility. Developed management software expanding service range. Provided customized solutions addressing client needs. Built strong track record demonstrating expertise.',
  }
]


const personalInfo: PersonalInfo = {
  name: 'Harold Thomas Castañeda',
  description: "In the dynamic world of software development, I've spent the last decade immersing myself, consistently delivering successful projects for a diverse range of clients. My expertise revolves around web and mobile app development, where I employ the latest technologies, including HTML5, CSS3, JavaScript, Python, Flutter, Angular, PHP, Ruby, TypeScript, and more. My mission is simple but powerful: to provide clients with innovative and efficient solutions, empowering them to achieve their goals. Let's embark on this journey together and create something truly extraordinary.",
  
};




function App() {

  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/haroldresume.pdf'; // Reemplaza con la ruta real de tu CV
    link.download = 'harold-resume.pdf'; // Nombre del archivo descargado
    link.click();
  };

  const descargarPort = () => {
    const link = document.createElement('a');
    link.href = '/assets/portfolio_harold .pdf'; // Reemplaza con la ruta real de tu CV
    link.download = 'harold-portfolio.pdf'; // Nombre del archivo descargado
    link.click();
  };




  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define la animación de FadeIn basada en el valor de scroll
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses, // curva suave
    // Activa la animación cuando el scroll alcanza cierta posición (ajusta este valor según sea necesario)
    immediate: scrollY < 100,
  });

  const titleFade = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  })
  
  // Animación de escalado en hover de secciones
  const scale = useSpring({
    from: { scale: 3 },
    to: { scale: 1.00 }
  })

  const fadeInAndScaleUp = useSpring({
   from: { opacity: 0, transform: 'scale(0.8)' },
   to: { opacity: 1, transform: 'scale(1)' },
   config: config.molasses // curva suave
  })



  const fadeInAndSlideFromLeft = useSpring({
   from: { opacity: 0, transform: 'translateX(-100px)' },
   to: { opacity: 1, transform: 'translateX(0)' },
   config: config.molasses // curva suave
  })



const fadeInAndSlideFromRight = useSpring({
 from: { opacity: 0, transform: 'translateX(100px)' },
 to: { opacity: 1, transform: 'translateX(0)' },
 config: config.molasses // curva suave
})



const fadeInAndSlideFromBottom = useSpring({
 from: { opacity: 0, transform: 'translateY(100px)' },
 to: { opacity: 1, transform: 'translateY(0)' },
 config: config.molasses // curva suave
})

  // Animación de svg al lado del nombre
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration: 1 }
    }



  }


  return (


    <FadeInScroll>
    <div className="App">

     

   
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet"/>

        <div>
        <animated.img className="size-img1"  style={fadeInAndSlideFromLeft} src="/assets/elemento1.png" alt="Tu Foto de Perfil" />
    
        <button className='downloadcv' onClick={descargarCV}> Download Resume</button>
   
        </div>
          <div>

          <div className="menu">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
        <animated.h2 className="name" style={fadeInAndSlideFromLeft} >Harold Castañeda</animated.h2>
         <animated.h1 style={fadeInAndSlideFromLeft} className="Elementostech" id="developer-title">Full Stack Software <br /> Developer</animated.h1>
         <animated.img className="size-img3"  style={fadeInAndSlideFromRight} src="/assets/sho-png.png" alt="Tu Foto de Perfil" />
         </div>

         <animated.img className="size-img2"  style={fadeInAndSlideFromRight} src="/assets/elemento2.png" alt="Tu Foto de Perfil" />


        </header>
        <main className="sections-container">
          <section className="about-me" id="about">
            <h2>About me</h2>
            <animated.p style={fadeIn} className="onlycursive">{personalInfo.description}</animated.p>
          </section>
           
          
          



<section className="about-me" id="technologies">

              <animated.h2 style={fadeIn}>Technologies</animated.h2>

              <div className="technology-list">

              <div className="technology-item">
                <h3>JavaScript</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '95%' }}>95%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>React</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>Node.js</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>Python</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>Typescript</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '93%' }}>93%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>PHP</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '86%' }}>86%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>MySQL</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '78%' }}>78%</div>
                </div>
              </div>

              <div className="technology-item">
                <h3>MongoDB</h3>
                <div className="technology-progress">
                  <div className="progress-bar" style={{ width: '82%' }}>82%</div>
                </div>
              </div>
              </div>


</section>




          <section className="about-me" id="experience">
            <h2>Work Experiences</h2>
             {experience.map((item, index) => (

                            <>

                              <animated.li style={fadeIn}>{item.title}</animated.li>
                              
                              <animated.p style={fadeIn}>{item.description}</animated.p>
                              
                            </>

                    ))}
          </section>

          <section className="about-me" id="projects">
            <h2>Portfolio</h2>
            <button className='dowloadporftolio' onClick={descargarPort}> Download Portfolio</button>
          </section>
        </main>
        <footer>

 
  <div className="social-links" id="contact">
        <a href="mailto:haroldthomasc@gmail.com" target="_blank" rel="noopener noreferrer">
        <img className='socialmedia' src="/assets/gmail.png" alt="Correo Electrónico" />
      </a>

    <a href="https://walink.co/fd7988" target="_blank" rel="noopener noreferrer">
      <img className='socialmedia'  src="/assets/whatsapp.png" alt="WhatsApp" />
    </a>
    <a href="https://www.facebook.com/DevieTech/" target="_blank" rel="noopener noreferrer">
      <img className='socialmedia'  src="/assets/facebook.png" alt="Facebook" />
    </a>
  </div>
 
</footer>

 
    </div>
    </FadeInScroll>
  );
}

export default App;
