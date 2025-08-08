function TechStackCard({ data }) {
  const cardItems = data.items.map((data) => {
    return (
      <div className="flex flex-col items-center w-24  ">
        <img className="w-10" src={data.imgUrl} alt={data.description} />
        <p> {data.description}</p>
      </div>
    );
  });
  return (
    <div className="max-w-96 flex flex-col gap-5">
      <div>
        <p className="font-bold text-xl">{data.title}</p>
      </div>
      <hr />
      <div className="flex  flex-wrap gap-x-10 gap-y-8 justify-between ">{cardItems}</div>
    </div>
  );
}

export default TechStackCard;
