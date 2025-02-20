// Timeline.jsx

import { useState, useEffect } from "react";

const experianceTimelineData = [
  {
    date: "May 2024 - August 2024",
    company: "Citizens",
    role: "Corperate Security & Resiliance Intern",
    details: [
      "Monitored and triaged an average of 30-40 security alerts per day using SIEM tools. reducing incident response times by 25%.",
      "Collected, reviewed, and analyzed data to ensure compliance with SLAs, policies, and regulatory requirements, creating actionable reports and insights.",
    ],
  }
];
const educationTimelineData = [
  {
    date: "Sep 2021 - Present",
    company: "University of Rhode Island",
    role: "BS in Computer Science",
    details: [
      "Currently pursuing a bachelors in Computer Science ",
      "Currently pursuing a Minor in Cyber Security",
    ],
  },
];

const Timeline = () => {
  const [active, setActive] = useState(null);
  const [career, setCareer] = useState(experianceTimelineData);

  useEffect(() => {
    if (active === "work") {
      setCareer(experianceTimelineData);
    } else if (active === "experiance") {
      setCareer(educationTimelineData);
    }
  }, [active]); // Only run this effect when 'active' changes

  const baseButton = "w-80 text-slate-400 px-4 to rounded-lg cursor-pointer";
  const activeButton =
    "w-80 text-slate-400 px-4 to rounded-lg text-white bg-slate-900 cursor-pointer";

  return (
    <>
      <div>
        <div
          className={
            "w-[vw100] h-9 bg-slate-700  p-1 rounded-lg flex gap-1  justify-center mb-3"
          }
        >
          <button
            onClick={() => setActive("work")}
            className={active === "work" ? `${activeButton}` : `${baseButton}`}
          >
            Work
          </button>
          <button
            onClick={() => setActive("experiance")}
            className={
              active === "experiance" ? `${activeButton}` : `${baseButton}`
            }
          >
            Education
          </button>
        </div>
        <div className="border-1 border-slate-800 rounded-lg p-7">
          <div className="relative border-l  border-gray-200 dark:border-gray-700 ml-4">
            {career.map((item, index) => (
              <div key={index} className="mb-10 ml-6">
                {/* Dot on the left */}
                <span className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />

                <div className="flex flex-col gap-1">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.company}
                  </h3>
                  <h4 className="text-md font-normal text-gray-700 dark:text-gray-300">
                    {item.role}
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-0">
                    {item.details.map((detail, i) => (
                      <li className="mt-2 flex" key={i}> - {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
