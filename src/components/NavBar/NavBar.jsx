function NavBar() {
  return (
    <div className=" flex justify-center gap-15 text-2xl py-4 *:border-b-2 *:border-amber-300/0 *:hover:border-white">
      <a href="#projects"><button type="button">Projects</button></a>
      <a href="#tech-stack"><button type="button">Tech Stack</button></a>
      <a href="#contact"><button type="button">Contact</button></a>
    </div>
  );
}

export default NavBar;
