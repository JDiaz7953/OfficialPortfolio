const RelevantCourseWorkSection = () => {
  return (
    <>
      <section className="">
        <h1 className="text-3xl text-white font-bold ">Relevant Coursework</h1>
        <div className="flex border-1 border-slate-800 rounded-lg p-7 mt-4">
          <ul>
            <li className="text-white font-semibold text-xl mt-4 ">
              Data Stuctures and Abstractions
              <ul className="ml-10 mt-1 text-base">
                <li className="list-disc mt-3">
                  Implemented core data structures—such as linked lists, trees,
                  and graphs—to solve computational problems.
                </li>
                <li className="list-disc mt-3">
                  Analyzed algorithm efficiency and used abstraction techniques
                  to manage and manipulate data.
                </li>
              </ul>
            </li>

            <li className="text-white font-semibold text-xl mt-4 ">
              Software Engineering
              <ul className="ml-10 mt-1 text-base">
                <li className="list-disc mt-3 ">
                  Participated in team projects to plan, design, and develop
                  software using industry-standard practices and methodologies
                </li>
                <li className="list-disc mt-3">
                  Gained hands-on experience with version control, testing, and
                  documentation by collaboratively developing a mobile
                  application with my team.
                </li>
              </ul>
            </li>
            <li className="text-white font-semibold text-xl mt-4 ">
              Database Management System
              <ul className="ml-10 mt-1 text-base">
                <li className="list-disc mt-3">
                  Designed and modeled relational databases, applying
                  normalization and integrity constraints.
                </li>
                <li className="list-disc mt-3">
                  Developed and executed SQL queries and integrated data
                  handling techniques for specific tasks.
                </li>
              </ul>
            </li>
            <li className="text-white font-semibold text-xl mt-4 ">
              Computer Programming
              <ul className="ml-10 mt-1 text-base">
                <li className="list-disc mt-3">
                  Built foundational coding skills by writing programs that
                  solve practical problems, often starting with introductory
                  exercises covering core programming concepts.
                </li>
                <li className="list-disc mt-3">
                  Focused on debugging, algorithm development, and iterative
                  improvements to reinforce core programming concepts.t
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default RelevantCourseWorkSection;
