function TechStackCard({ data }) {
  const cardItems = data.items.map((data, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center w-24  hover:scale-110 ease-out duration-500 transition-all"
      >
        <img className="w-10" src={data.imgUrl} alt={data.description} />
        <p> {data.description}</p>
      </div>
    );
  });
  return (
    <div className=" flex flex-col gap-5 bg-gray-700/60 rounded-lg p-5">
      <div>
        <p className="font-bold text-xl">{data.title}</p>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-x-3 gap-y-8 justify-between ">
        {cardItems}
      </div>
    </div>
  );
}

export default TechStackCard;
