const projectsData = [
  {
    projectName: "Odin-Book",
    imgUrl: "/project-screenshots/odinbook.png",
    techStack: [{ iconUrl: "/icons/reactjs.svg", name: "React.js", bgColor: "" }],
    description: "Social media site",
    codeUrl: "https://github.com/JyrexRonaldo/odin-book",
    previewUrl: "https://odin-book-12ad134.netlify.app/",
  },
  {
    projectName: "Blog Reader",
    imgUrl: "/project-screenshots/blog.png",
    techStack: [{ iconUrl: "/icons/reactjs.svg", name: "React.js", bgColor: "" }],
    description: "Social media site",
    codeUrl: "https://github.com/JyrexRonaldo/blog-api-users",
    previewUrl: "https://blog-api-users.netlify.app/",
  },
];

const techStackData = [
  {
    title: "Frontend",
    items: [
      { imgUrl: "/icons/html5.svg", description: "HTML" },
      { imgUrl: "/icons/css3.svg", description: "CSS" },
      { imgUrl: "/icons/javascript.svg", description: "JavaScript" },
      { imgUrl: "/icons/reactjs.svg", description: "React.js" },
      { imgUrl: "/icons/vitejs.svg", description: "Vite" },
      { imgUrl: "/icons/tailwindcss.svg", description: "TailwindCSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { imgUrl: "/icons/nodejs.svg", description: "Node.js" },
      { imgUrl: "/icons/express.svg", description: "Express.js" },
      { imgUrl: "/icons/postgresql.svg", description: "PostgreSQL" },
      { imgUrl: "/icons/prisma.svg", description: "Prisma ORM" },
      { imgUrl: "/icons/jwt.svg", description: "JWT" },
    ],
  },
  {
    title: "Tools",
    items: [
      { imgUrl: "/icons/git.svg", description: "Git" },
      { imgUrl: "/icons/github.svg", description: "GitHub" },
    ],
  },
];

// const contactData = [
//   {
//     title: "Email",
//     items: [
//       { imgUrl: "/javascript", description: "JavaScript", url: "" },
//     ],
//   },
//   {
//     title: "CV",
//     items: [
//       { imgUrl: "/javascript", description: "JavaScript", url: "" },
//     ],
//   },
//   {
//     title: "GitHub",
//     items: [
//       { imgUrl: "/javascript", description: "JavaScript", url: "" },
//     ],
//   },
//   {
//     title: "LinkedIn",
//     items: [
//       { imgUrl: "/javascript", description: "JavaScript", url: "" },
//     ],
//   },
// ];

export default {
  projectsData,
  techStackData,
  // contactData
};
