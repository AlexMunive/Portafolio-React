import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.png'
import Work3 from '../../assets/work3.png'
import Work4 from '../../assets/work4.png'
import Work5 from '../../assets/work5.png'
import Work6 from '../../assets/work6.png'
import Work7 from '../../assets/work7.png'
import Work8 from '../../assets/work8.png'
import Work9 from '../../assets/work9.png'
import Work10 from '../../assets/work10.png'
import Work11 from '../../assets/work11.png'
import Work12 from '../../assets/work12.png'
import technologyReact from '../../assets/react.png'
import technologyCss from '../../assets/css.png'
import technologyJs from '../../assets/js.png'
import technologyRedux from '../../assets/redux.png'
import technologyBootstrap from '../../assets/Bootstrap.webp'
import technologyHtml from '../../assets/html.png'
import technologyNet from '../../assets/net.png'
import technologyCSharp from '../../assets/csharp.png'
import technologyFirebase from '../../assets/firebase.png'

export const projectsData = [
  {
    id: 1,
    image: Work5,
    title: "Computer wholesaler",
    technology: [
      <img key={technologyReact} className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyRedux} className='icon-redux' src={technologyRedux} alt="redux.png" />, 
    ],
    href: 'https://cute-brioche-582631.netlify.app/',
    github: 'https://github.com/AlexMunive/Proyecto_Final_React',
    category: "e-commerce",
  },  
  {
    id: 2,
    image: Work2,
    title: "App weather",
    technology: [
      <img key={technologyReact}  className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />, 
    ],
    href: 'https://fanciful-lamington-67d58c.netlify.app/',
    github: 'https://github.com/AlexMunive/Entregable_N-2',
    category: "app",
  },
  {
    id: 3,
    image: Work3,
    title: "Rick and Morty",
    technology: [
      <img key={technologyReact} className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
    ],
    href: 'https://chipper-stroopwafel-9cccf4.netlify.app/',
    github: 'https://github.com/AlexMunive/EntregableN3_Oficial',
    category: "web",
  },
  {
    id: 4,
    image: Work8,
    title: "CRUD User",
    technology: [
      <img key={technologyReact} className='icon-react' src={technologyReact} alt="react.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,
    ],
    href: 'https://charming-florentine-28c008.netlify.app/',
    github: 'https://github.com/AlexMunive/EntregableN4_Oficial',
    category: "web",
  },
  {
    id: 5,
    image: Work4,
    title: "Pokedex",
    technology: [
      <img key={technologyReact} className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyRedux} className='icon-redux' src={technologyRedux} alt="redux.png" />, 
    ],
    href: 'https://visionary-narwhal-72a751.netlify.app/',
    github: 'https://github.com/AlexMunive/entregable5_oficial',
    category: "app",
  },
  {
    id: 6,
    image: Work7,
    title: "Portfolio website",
    technology: [     
      <img key={technologyHtml} className='icon-html' src={technologyHtml} alt="html.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyBootstrap} className='icon-bootstrap' src={technologyBootstrap} alt="Bootstrap.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,       
    ],
    href: 'https://porafolio-web-alexander.netlify.app/',
    github: 'https://github.com/AlexMunive/Portafolio-Alexander-Oficial',
    category: "web",
  }, 
  {
    id: 7,
    image: Work6,
    title: "Online store computer",
    technology: [     
      <img key={technologyHtml} className='icon-html' src={technologyHtml} alt="html.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyBootstrap} className='icon-bootstrap' src={technologyBootstrap} alt="Bootstrap.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,       
    ],
    href: 'https://animated-bombolone-bd2fc7.netlify.app/',
    github: 'https://github.com/AlexMunive/E-commerce1',
    category: "e-commerce",
  },
  {
    id: 8,
    image: Work1,
    title: "Web phrase",
    technology: [
      <img key={technologyReact} className='icon-react' src={technologyReact} alt="react.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,
    ],
    href: 'https://clinquant-babka-9da57d.netlify.app/',
    github: 'https://github.com/AlexMunive/EntregableN01_Oficial',
    category: "web",
  },
  {
    id: 9,
    image: Work9,
    title: "Loans",
    technology: [
      <img key={technologyNet} className='icon-net' src={technologyNet} alt="net.png" />,
      <img key={technologyCSharp} className='icon-csharp' src={technologyCSharp} alt="csharp.png" />,
    ],
    href: 'https://www.youtube.com/watch?v=wuv9-CK-UIo',
    github: 'https://github.com/AlexMunive/BancoPrestamo',
    category: "web",
  },
  {
    id: 10,
    image: Work10,
    title: "psychology",
    technology: [
      <img key={technologyReact}  className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyHtml} className='icon-html' src={technologyHtml} alt="html.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyBootstrap} className='icon-bootstrap' src={technologyBootstrap} alt="Bootstrap.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,     
    ],
    href: 'https://psicologia-ivett.netlify.app/',
    github: 'https://github.com/AlexMunive/Proyecto-Psicologia',
    category: "web",
  },
  {
    id: 11,
    image: Work11,
    title: "Elite Shoppy",
    technology: [
      <img key={technologyReact}  className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyHtml} className='icon-html' src={technologyHtml} alt="html.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyBootstrap} className='icon-bootstrap' src={technologyBootstrap} alt="Bootstrap.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,     
      <img key={technologyFirebase} className='icon-firebase' src={technologyFirebase} alt="css.png" />,     
    ],
    href: 'https://proyecto-elite-shoppy.netlify.app/',
    github: 'https://github.com/AlexMunive/Elite_shoppy',
    category: "e-commerce",
  },
  {
    id: 12,
    image: Work11,
    title: "Elite Shoppy",
    technology: [
      <img key={technologyReact}  className='icon-react' src={technologyReact} alt="react.png" />, 
      <img key={technologyHtml} className='icon-html' src={technologyHtml} alt="html.png" />, 
      <img key={technologyJs} className='icon-js' src={technologyJs} alt="js.png" />, 
      <img key={technologyBootstrap} className='icon-bootstrap' src={technologyBootstrap} alt="Bootstrap.png" />,
      <img key={technologyCss} className='icon-css' src={technologyCss} alt="css.png" />,     
      <img key={technologyFirebase} className='icon-firebase' src={technologyFirebase} alt="css.png" />,     
    ],
    href: 'https://proyecto-elite-shoppy.netlify.app/',
    github: 'https://github.com/AlexMunive/Elite_shoppy',
    category: "e-commerce",
  },
    {
    id: 13,
    image: Work12,
    title: "Tasks",
    technology: [
      <img key={technologyReact}  className='icon-react' src={technologyReact} alt="react.png" />,     
    ],
    href: 'https://frolicking-lollipop-ad57ed.netlify.app/',
    github: 'https://github.com/AlexMunive/TODO-APP',
    category: "app",
  },

];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web',
  },
  {
    name: 'app',
  },
  {
    name: 'e-commerce',
  },
]