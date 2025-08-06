function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center gap-20">
        <div>
          <p className="text-3xl">Hi there</p>
          <p className="text-5xl font-extrabold">I'm Jyrex</p>
          <p className="text-4xl">I am a Full Stack Developer</p>
          <div>icons</div>
        </div>
        <div>
          {" "}
          <img src="icons/developing.png" className="w-60" alt="" />
        </div>
      </div>
      <div>
        <p>About</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          iusto! Voluptatum adipisci minima minus, eveniet aliquam expedita
          exercitationem ex voluptates perspiciatis sequi, vero placeat sint
          nihil earum ratione provident possimus!
        </p>
      </div>
    </div>
  );
}

export default Hero;
