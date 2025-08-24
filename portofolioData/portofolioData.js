const projectsData = [
  {
    projectName: "Odin-Book",
    imgUrl: "/project-screenshots/odinbook.png",
    techStack: [
      { iconUrl: "/icons/reactjs.svg", name: "React.js", bgColor: "react" },
      { iconUrl: "/icons/nodejs.svg", name: "Node.js", bgColor: "node" },
      { iconUrl: "/icons/express.svg", name: "Express.js", bgColor: "express" },
      {
        iconUrl: "/icons/postgresql.svg",
        name: "PostgreSQL",
        bgColor: "postgresql",
      },
      { iconUrl: "/icons/prisma.svg", name: "Prisma ORM", bgColor: "prisma" },
      { iconUrl: "/icons/socketio.svg", name: "Socket.io", bgColor: "socket" },
    ],
    description:
      "Full stack social media web app with authentication, friends and real-time messaging features. Users can create posts, comment and like posts and customize their profiles easily",
    codeUrl: "https://github.com/JyrexRonaldo/odin-book",
    previewUrl: "https://odin-book-12ad134.netlify.app/",
  },
  {
    projectName: "Blog Reader",
    imgUrl: "/project-screenshots/blog.png",
    techStack: [
      { iconUrl: "/icons/reactjs.svg", name: "React.js", bgColor: "react" },
      { iconUrl: "/icons/nodejs.svg", name: "Node.js", bgColor: "node" },
      { iconUrl: "/icons/express.svg", name: "Express.js", bgColor: "express" },
      {
        iconUrl: "/icons/postgresql.svg",
        name: "PostgreSQL",
        bgColor: "postgresql",
      },
      { iconUrl: "/icons/prisma.svg", name: "Prisma ORM", bgColor: "prisma" },
    ],
    description:
      "Full stack web app for reading blogs with user authentication and post commenting features",
    codeUrl: "https://github.com/JyrexRonaldo/blog-api-users",
    previewUrl: "https://blog-api-users.netlify.app/",
  },
  {
    projectName: "Blog Writer",
    imgUrl: "/project-screenshots/blog-writer.png",
    techStack: [
      { iconUrl: "/icons/reactjs.svg", name: "React.js", bgColor: "react" },
      { iconUrl: "/icons/nodejs.svg", name: "Node.js", bgColor: "node" },
      { iconUrl: "/icons/express.svg", name: "Express.js", bgColor: "express" },
      {
        iconUrl: "/icons/postgresql.svg",
        name: "PostgreSQL",
        bgColor: "postgresql",
      },
      { iconUrl: "/icons/prisma.svg", name: "Prisma ORM", bgColor: "prisma" },
    ],
    description:
      "A complement full stack web app for administering the blog application",
    codeUrl: "https://github.com/JyrexRonaldo/blog-api-admin",
    previewUrl: "https://blog-api-admin.netlify.app//",
  },
  {
    projectName: "Where's Waldo (A Photo Tagging App)",
    imgUrl: "/project-screenshots/waldo.png",
    techStack: [
      { iconUrl: "/icons/reactjs.svg", name: "React.js", bgColor: "react" },
      { iconUrl: "/icons/nodejs.svg", name: "Node.js", bgColor: "node" },
      { iconUrl: "/icons/express.svg", name: "Express.js", bgColor: "express" },
      {
        iconUrl: "/icons/postgresql.svg",
        name: "PostgreSQL",
        bgColor: "postgresql",
      },
      { iconUrl: "/icons/prisma.svg", name: "Prisma ORM", bgColor: "prisma" },
    ],
    description:
      "A full stack web app implementation of the popular waldo puzzles",
    codeUrl: "https://github.com/JyrexRonaldo/where-is-waldo",
    previewUrl: "https://where-is-waldo-342.netlify.app/",
  },
  {
    projectName: "Battleship",
    imgUrl: "/project-screenshots/battleship.png",
    techStack: [
      { iconUrl: "/icons/html5.svg", name: "HTML", bgColor: "node" },
      { iconUrl: "/icons/css3.svg", name: "CSS", bgColor: "react" },
      {
        iconUrl: "/icons/javascript.svg",
        name: "Javascript",
        bgColor: "prisma",
      },
      { iconUrl: "/icons/jest.svg", name: "Jest", bgColor: "jest" },
      { iconUrl: "/icons/webpack.svg", name: "webpack", bgColor: "postgresql" },
    ],
    description:
      "A basic implementation of battleship complete with tests suites using jest testing framework and module bundling via webpack.",
    codeUrl: "https://github.com/JyrexRonaldo/battleship",
    previewUrl: "https://jyrexronaldo.github.io/battleship/",
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

export default {
  projectsData,
  techStackData,
  // contactData
};
