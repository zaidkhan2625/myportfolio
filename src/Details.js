// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/zrk.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/reddit.jpg";
import projectImage2 from "./assets/projects/clear.jpg";
import projectImage3 from "./assets/projects/mealplanner.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mohammad Zaid",
  tagline: "Mern Full Stack Developer",
  img: profile,
  about: `Hello! I'm Mohammad Zaid, a passionate MERN (MongoDB, Express.js, React.js, Node.js , JavaSript) full-stack developer with a keen interest in crafting robust and user-friendly web applications. With a background in computer science , I've honed my skills in both front-end and back-end development to deliver seamless digital experiences.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mohammad-zaid-91b6b416a/",
  github: "https://github.com/zaidkhan2625",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Jr. Softwear Engineer",
    Company: `Drish Technology`,
    Location: "Mumbai",
    Type: "Full Time",
    Duration: "May 2024 -Persent",
  },
  {
    Position: "Full Stack Development",
    Company: `Newton School`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Feb 2023 - Apr 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master Of Computer Application",
    Company: "Maulana Azad National Urdu University",
    Location: "Hyderabad",
    Type: "Regular",
    Duration: "aug 2021 - aug 2023",
  },
  {
    Position: "Bachelor of Computer Application",
    Company: `Allen House Business School`,
    Location: "Kanpur",
    Type: "Regular",
    Duration: "july 2017 - july 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Reddit Clone",
    image: projectImage1,
    description:
      "This is a sample project, which closely resembles the official Reddit platform. In this project, I've implemented features such as user authentication and authorization using React Router DOM. Users are able to post comments, create posts, and like posts, with appropriate permissions enforced to ensure secure access to these functionalities.",
    techstack: "HTML/CSS, JavaScript ,React",
    previewLink: "https://redditclonebymohammadzaid.netlify.app/",
    githubLink:
      "https://github.com/zaidkhan2625/Reddit-React-Clone---React-Project-2---9ced8p02w2tb",
  },
  {
    title: "Clear Trip Clone",
    image: projectImage2,
    description:
      "This is a sample project closely resembling the official Cleartrip platform. Within this project, I've implemented features such as hotel and flight booking functionalities, user authentication, login/logout capabilities, and the ability for users to view their booking history. Additionally, users can utilize a filter option to streamline the booking process for both flights and hotels.",
    techstack: "HTML/CSS, JavaScript , React",
    previewLink: "https://cleartripclonebymohammadzaid.netlify.app/",
    githubLink:
      "https://github.com/zaidkhan2625/ClearTrip-Clone---React-Project-1---wzf4gtbqbaxc",
  },
  {
    title: "Clear Trip Clone",
    image: projectImage3,
    description:
      "This is a sample project for a meal planner designed for gym enthusiasts and health-conscious individuals. It allows users to input details such as body weight, height, age, and health goals, such as body cutting or weight gain. Based on this information, the application provides tailored food details and recipes to help users achieve their health goals.",
    techstack: "HTML/CSS, JavaScript , React",
    previewLink: "https://profound-hotteok-6042de.netlify.app/",
    githubLink: "https://github.com/zaidkhan2625/mealplanner",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "zaidkhan262523@gmail.com",
  phone: "+91 7379679789",
};
