import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  emotion,
  query,
  stock,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  tensorflow,
  pytorch,
  keras,
  numpy,
  pandas,
  scikit,
  opencv,
  scipy,
  matplotlib,
  eccomix,
  robokart,
  taitilgraphics,
  gohil,
  bhavesh,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Experience",
    title: "Work",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & ML Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "keras",
    icon: keras,
  },
  {
    name: "numpy",
    icon: numpy,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "scikit",
    icon: scikit,
  },
  {
    name: "opencv",
    icon: opencv,
  },
  {
    name: "scipy",
    icon: scipy,
  },
  {
    name: "matplotlib",
    icon: matplotlib,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "AI & ML Developer",
    company_name: "Eccomix",
    icon: eccomix,
    iconBg: "#DEDEDE",
    date: "April 2024 - Present",
    points: [
      "Used PyMuPDF to scan and extract the pages of pdf to image for further image processing.",
      "Compared multiple different OPEN SOURCE LLMs and found one that balances speed/CPU utilization.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Robotics Trainer",
    company_name: "Robokart",
    icon: robokart,
    iconBg: "#DEDEDE",
    date: "June 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphics designer / Creative Head",
    company_name: "Taitil Graphics",
    icon: taitilgraphics,
    iconBg: "#DEDEDE",
    date: "Jan 2018 - Present",
    points: [
      "Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and other design tools.",
      "Utilized Autodesk Maya, 3ds Max, and Blender to create high-quality 3D models, animations, and visual effects.",
      "Developed branding materials including logos, brochures, and business cards.",
      "Created visually appealing graphics and layouts for websites, social media, and print materials.",
    ],
  },
  /*{
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "Taitil Chheda’s expertise in machine learning is impressive. His innovative solutions and dedication have consistently driven excellent results. A true asset to any team!",
    name: "Sophia Martinez",
    designation: "CTO",
    company: "Vertex Ventures",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Taitil has been a pleasure. His deep understanding of ML and his creative problem-solving skills have significantly enhanced our projects.",
    name: "Bhavesh Chheda",
    designation: "CEO",
    company: "Taitil Graphics",
    image: bhavesh,
  },
  {
    testimonial:
      "Taitil is a skilled ML developer whose work has greatly benefited our projects. His technical proficiency and dedication are truly commendable.",
    name: "Pranav",
    designation: "Operations Head",
    company: "Robokart",
    image: gohil,
  },
];

const projects = [
  {
    name: "Emotion Recognition",
    description:
      "This project aims to develop a sophisticated emotion recognition system using advanced machine learning techniques. The primary objective is to create a model capable of accurately identifying human emotions from facial expressions. By training on a diverse dataset, the system can recognize a wide range of emotions, including happiness, sadness, anger, surprise, fear, and disgust.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: emotion,
    source_code_link: "https://github.com/Taitilchheda/Emotion-Recognition/",
  },
  {
    name: "Query Genius",
    description:
      "QueryGenius is an advanced Natural Language Processing (NLP) question-answering (Q&A) assistant designed to provide accurate responses to user queries. Leveraging state-of-the-art language models and efficient query processing techniques, QueryGenius offers a seamless and intuitive user experience for accessing information.",
    tags: [
      {
        name: "Hugging Face",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Transformers",
        color: "pink-text-gradient",
      },
    ],
    image: query,
    source_code_link: "https://github.com/Taitilchheda/QueryGenius",
  },
  {
    name: "Stock Market Prediction",
    description:
      "This project aims to predict stock prices using machine learning techniques. It utilizes historical stock data to train a predictive model and forecast future prices.This project leverages Python and popular libraries like pandas, scikit-learn, and matplotlib to fetch historical stock data, preprocess it, build a machine learning model, evaluate its performance, and visualize the results.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: " scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Taitilchheda/Stock-Market-Prediction",
  },
];

export { services, technologies, experiences, testimonials, projects };