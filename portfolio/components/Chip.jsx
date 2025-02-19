// eslint-disable-next-line react/prop-types
const Chip = ({ skill }) => {
  return (
    <>
      <div className=" mt-2 inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px] bg-slate-700 text-white p-100">
        {skill}
      </div>
    </>
  );
};

export default Chip;
