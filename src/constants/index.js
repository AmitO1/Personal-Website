import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";


export const HERO_CONTENT = `I am a passionate software engineer currently in my third year at Tel Aviv University. I love writing code and exploring various areas of the tech world. Right now, I'm particularly interested in artificial intelligence and its applications in the modern world. I'm eager to learn how to leverage AI to enhance existing technologies and drive innovation. `;

export const ABOUT_TEXT = `A third-year computer science student seeking
opportunities to apply and expand my knowledge in software
development, data analysis, and other areas within the field of
computer science. Looking for an internship or a part-time
position that will help me develop practical skills and gain
valuable industry experience.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "TeamMate System Implementation",
    company: "Kreston -IL",
    description: `Implementation and configuration of TeamMate system for the Bank Of Israel used for an audit and risk management process by the client characterization, training the employee in the relevent department how to work with the system and make configuration according to their needs.`,
    technologies: [""],
  },
  {
    year: "2019 - 2022",
    role: "Military School Instructor",
    company: " IDF, Ministery Of Defense",
    description: `Tutored students aged 15-18 in mathematics, English,
and physics.
Implemented and maintained a data knowledge
system called Tuqqi to track and evaluate students
progress over their four-year training program.
Developed instructional materials and lessons plans to
enhance student learning.`,
    technologies: [""],
  },

];

export const PROJECTS = [
  {
    title: "Symnmf C Moudle And K-Means Comparison",
    image: project1,
    description:
      "Implemented the Symmetric Nonnegative Matrix Factorization (SymNMF) and K-means clustering algorithms in C. Developed a Python package to integrate the C code for seamless use in Python environments. Conducted a comparison of clustering results between the two models, showcasing their effectiveness and performance differences.",
    technologies: ["C", "Python"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Designed and developed a responsive personal portfolio website using React.js, HTML, and CSS. Deployed the project online using Vercel, ensuring seamless accessibility. Highlighted experience, projects, and skills in a visually appealing layout.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Ana Frank 2, Ramat Gan, Israel ",
  phoneNo: "+972 054-2047575",
  email: "amitomer1912@gmail.com",
};
