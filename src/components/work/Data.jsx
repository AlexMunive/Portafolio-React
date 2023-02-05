import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.png'
import Work3 from '../../assets/work3.png'
import Work4 from '../../assets/work4.png'
import Work5 from '../../assets/work5.png'
import Work6 from '../../assets/work6.png'
import technologyReact from '../../assets/react.png'
import technologyCss from '../../assets/css.png'
import technologyJs from '../../assets/js.png'
import technologyRedux from '../../assets/redux.png'
import technologyBootstrap from '../../assets/Bootstrap.webp'
import technologyHtml from '../../assets/html.png'

export const projectsData = [
  {
    id: 1,
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
    id: 5,
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
    id: 6,
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