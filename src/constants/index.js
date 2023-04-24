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
  creart,
  tesla,
  shopify,
  carrent,
  jobit,
  gallery,
  tripguide,
  threejs,
  postman,
  technomark,
  perfectmatch,
  bootstrap,
  armanali,
  kirtanhadwani,
  ronakrajput,
  hotstar,
  reading,
  programming,
  sketching,
  music,
  foodordering,
  expensetracker,
  todo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Reading",
    icon: reading,
  },
  {
    title: "Programming",
    icon: programming,
  },
  {
    title: "Sketching",
    icon: sketching,
  },
  {
    title: "Music",
    icon: music,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Boostrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Php Developer",
    company_name: "CreArt Solution",
    icon: creart,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Developing and Email Sending web applications using Php and other related technologies.",
      "Collaborating with different people on teams including other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "TechnoMark Solution LLP",
    icon: technomark,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and integrated with backback using Node.js and other related technologies.",
      "Collaborating with Backend teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our requirement in backend product, but chirag proved me wrong.",
    name: "Arman Ali",
    designation: "Backend Developer",
    company: "Pecific Group Of Companies",
    image: armanali,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chirag does and working with him was amazing experience for me",
    name: "Kirtan Hadwani",
    designation: "Front-End Developer",
    company: "TechnoMark Solution LLP",
    image: kirtanhadwani,
  },
  {
    testimonial:
      "After Chirag has collaborated with me on our college project website, our efficiency increased by 50%. We can't thank him enough!",
    name: "Ronak Rajput",
    designation: "Software Developer",
    company: "Simform",
    image: ronakrajput,
  },
];

const projects = [
  {
    name: " Perfect Match",
    description:
      "Web-based Matrimonial platform that allows users to search about other profiles  and manage their own profile from various interested people to view, providing a convenient and efficient solution for marriage needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: perfectmatch,
    source_code_link: "https://github.com/Ganpat6070/Team-project",
  },
  {
    name: "Food Ordering App",
    description:
      "Food Ordering React js Web Application Build with Firebase, CSS and React, Interactive interface with batter experience. user can pick up many dishes from menu and order them in desired quantity after adding food into cart user need to fill delievery info form",
    tags: [
      {
        name: "reducer",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: foodordering,
    source_code_link: "https://chirag-360.github.io/Food-Ordering/",
  },
  {
    name: "Desiny + Hotstar",
    description:
      "A Desiny + Hotstar Clone Front End website made with HTML, CSS and JavaScript, Interactive interface with animation and video playback for providing user better overall experience. tools i have used are vs code and figma",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hotstar,
    source_code_link: "https://chirag-360.github.io/Hotstar-Disney-Clone/",
  },
  {
    name: "Gallery",
    description:
      "Web application that let user to filer many type of flowers using react filter. such as SunFlower, Daisy, Rose, Orchid and All, made with react js, html, css and node module. fun project and task i have complited under few minutes for fun",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    source_code_link: "https://chirag-360.github.io/Gallery/",
  },
 
  
  {
    name: "Expense Tracker App",
    description:
      "A Expense Tracker Font End website made with HTML, CSS and React js, Interactive interface with animation and charts for proving user batter experience. An expense tracker app allows you to monitor and categorize your expenses",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://chirag-360.github.io/Expense-Tracker/",
  },
  {
    name: "To Do List",
    description:
      "This  is a to-do list web applications, which made by using ReactJS and TypeScript. This application allows users to easily create, manage, and organize their tasks, making it a valuable tool for personal and professional use.Made With the benefits of TypeScript",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://chirag-360.github.io/To-Do-TS/",
  },
];

export { services, technologies, experiences, testimonials, projects };
