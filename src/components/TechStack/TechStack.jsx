import portofolioData from "../../../portofolioData/portofolioData";
import TechStackCard from "../TechStackCard/TechStackCard";

function TeckStack() {
  // console.log(portofolioData.techStackData);

  const techStackData = portofolioData.techStackData;

  const techStackcards = techStackData.map((data, index) => {
    return <TechStackCard key={index} data={data} />;
  });

  // const techStack

  return (
    <div
      id="tech-stack"
      className="flex flex-col items-center gap-6 scroll-mt-15 mx-5"
    >
      <h1 className="text-6xl font-extrabold text-center">Tech Stack</h1>
      <div className="flex flex-wrap justify-center gap-15">{techStackcards}</div>
    </div>
  );
}

export default TeckStack;
