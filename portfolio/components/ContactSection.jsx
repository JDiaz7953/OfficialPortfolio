export default function ContactForm() {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold ">Contact me.</h1>
      <div className=" p-4 flex justify-center ">
        <div className=" w-140 h-90 ml-5 justify-center mt-10  bg-slate-800 rounded-md p-6 shadow-lg">
          <h3 className="text-xl text-slate-200 mt-2">Phone: 401-280-3880</h3>
          <h3 className="text-xl text-slate-200 mt-2">
            {" "}
            Email:{" "}
            <a
              className="hover:text-white hover:underline "
              href="mailto:jaidendiaz7953@gmail.com"
            >
              {" "}
              jaidendiaz7953@gmail.com{" "}
            </a>
          </h3>
          <h3 className="text-xl text-slate-200 mt-2">
            {" "}
            Location: Rhode Island
          </h3>
          <h3 className="text-xl text-slate-200 mt-2">
            {" "}
            LinkedIn:{" "}
            <a
              className="hover:text-white hover:underline "
              href="https://www.linkedin.com/in/jaydiaz03/"
            >
              {" "}
              https://www.linkedin.com/in/jaydiaz03/{" "}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
