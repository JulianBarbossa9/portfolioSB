import ProjectImg from '../images/projectImg.png';

const projects = [
  {
    id: 1,
    name: 'Urban Courier Management Platform',
    desc: 'Serverless platform for Mensajeros Urbanos handling bookings, couriers, shipments, routing, geocoding, billing, notifications and real-time tracking, exposing 20+ categories of REST endpoints. Built with AWS CDK (TypeScript): 100+ Lambda functions, DynamoDB streams, SQS/SNS, Step Functions, EventBridge, AppSync (GraphQL) and Cognito, with an event-driven architecture using workers and projectors to keep read models updated at scale.',
    img: ProjectImg,
    link: '',
  },
  {
    id: 2,
    name: 'Landscape Conservation Platform',
    desc: 'Platform for Earth Innovation Institute to manage and monitor landscape conservation projects funded through state and foreign investment. Built with Next.js/TypeScript on the frontend and a Laravel REST API on the backend, containerized with Docker and deployed on Azure for high availability, with Jest/Laravel test suites and CI/CD via GitHub Actions.',
    img: ProjectImg,
    link: '',
  },
  {
    id: 3,
    name: 'Agricultural Data Collection Application',
    desc: 'Data collection application for the Ministerio de Agricultura (UPRA) used for regulatory compliance and crop validation across permanent, transitory and forage crops. Built with NestJS on the backend and Angular on the frontend, with strict data-accuracy validation rules covered by Jest unit tests.',
    img: ProjectImg,
    link: '',
  },
  {
    id: 4,
    name: 'Interpreter Scheduling & Recruitment Platform',
    desc: 'Scheduling and recruitment platform for interpreter services at Akorbi, built with React and Node.js. Contributed a GraphQL-based scheduling system that improved UI efficiency and payment-rendering performance, achieving an 80% qualified-candidate match rate.',
    img: ProjectImg,
    link: '',
  },
  {
    id: 5,
    name: 'Patient Management Platform',
    desc: 'Patient management platform for health companies and EPS in Colombia at TicSocial, with a React frontend and a Django backend. Built high-performance REST APIs supporting over 500,000 concurrent users, with Docker-based deployments to speed up medical appointment scheduling.',
    img: ProjectImg,
    link: '',
  },
];

export default projects;
