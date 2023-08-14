// import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import LogoBogota from '../images/logov1.png';
import ParkingPlus from '../images/parking.png';
import QuoteParking from '../images/utracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: 1,
    name: 'Bogotá Site Recommends',
    desc:"The present project aims to develop a system that suggests tourist or leisure places to visit in a given region based on the user's places of interest and the method employed in the solution of the problem consists of a content-based recommendation algorithm using the One-Hot approach. One-Hot approach.",
    img: LogoBogota,
    link: 'https://github.com/JulianBarbossa9/Bogota-site-recommends-IA'
  },
  {
    id: 2,
    name: 'Parking + ',
    desc:
    'Parking we are in charge of providing in an easy and simple way to the user a better way to promote and find a parking lot in the city of Bogota, seeking to extend throughout the national and international territory.. ',
    img: ParkingPlus,
    link: 'https://gestionjbdg.netlify.app'

    
  },
  {
    id: 3,
    name: 'Quote Parking',
    desc:
      'Parking Quoter was a mini project to complement Parking +, was developed in React and its main function is to give an estimate of the price of parking in the city of Bogota either a car or a motorcycle.',
    img: QuoteParking,
    link: 'https://calcularhoraparqueadero.netlify.app'
    
  },
  {
    id: 4,
    name: "Galaxy",
    desc:
      'A small galaxy made with Three.JS which can expand, change color and add or remove particles. ',
    img: CavinImg,
    link:''
   
  },
  {
    id: 5,
    name: 'Three JS',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula.',
    img: ProjectImg,
    link:''
   
  },
];

export default projects;
