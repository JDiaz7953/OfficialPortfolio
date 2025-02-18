import { Children } from "react";

const TechCard = ({ techName, image}) => {
  return (
    <>
      <div className=" mt-4 flex items-center justify-center bg-zinc-800 rounded-md w-35 h-15 gap-1.5 shadow-md shadow-slate-700 hover:shadow-lg">
        <p className="ml-1 text-lg text-white font-semibold">{techName}</p>
        {image}
       
      </div>
    </>
  );
};

export default TechCard;
