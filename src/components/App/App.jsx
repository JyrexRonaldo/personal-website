import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

function App() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <Hero />
        <footer className="mt-auto">Made by Jyrex</footer>
      </div>
    </>
  );
}

export default App;
