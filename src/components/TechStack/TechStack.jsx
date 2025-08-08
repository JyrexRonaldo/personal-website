import portofolioData from "../../../portofolioData/portofolioData";
import TechStackCard from "../TechStackCard/TechStackCard";

// console.log(portofolioData.techStackData);

const techStackData = portofolioData.techStackData;

const techStackcards = techStackData.map((data, index) => {
  return <TechStackCard key={index} data={data} />;
});

// const techStack

function TeckStack() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-extrabold text-center">Tech Stack</h1>
      <div className="flex gap-15">{techStackcards}</div>
    </div>
  );
}

export default TeckStack;
