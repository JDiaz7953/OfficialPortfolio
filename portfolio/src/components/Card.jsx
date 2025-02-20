// eslint-disable-next-line react/prop-types
const Card = ({ text, title, chip1, chip2, chip3, chip4, url, img }) => {
  return (
    <div className="border rounded-xl p-4 border-slate-800 w-80 h-120  ">
      <img src={img} alt="" />
      <div className="">
        <h5 className="text-lg text-white font-bold mt-4">{title}</h5>
        <p className="text-sm text-slate-400 mt-2 ">{text}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {chip1}
          {chip2}
          {chip3}
          {chip4}
        </div>
      </div>
      <div className="flex  flex-col-reverse justify-start mt-4 relative">
        <a href={url} className="btn btn-primary">
          <div className="items-center rounded-md border font-semibold transition-colors w-20  bg-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-1 py-1 text-[10px] absolute top-20% cursor-pointer hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github size-3"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <p className="text-sm">Source</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
