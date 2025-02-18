// Timeline.jsx

import { useState, useEffect } from "react";


const experianceTimelineData = [
  {
    date: "Jan 2023 - Present",
    company: "Citizens",
    role: "Software Engineer",
    details: [
      "Implemented new features using React and Node.js",
      "Collaborated with the design team to create a consistent UI",
    ],
  },
  {
    date: "Jun 2021 - Dec 2022",
    company: "Tech Startup",
    role: "Frontend Developer",
    details: [
      "Built a reusable component library with TailwindCSS",
      "Optimized application performance and SEO",
    ],
  },
  {
    date: "Sep 2019 - May 2021",
    company: "Another Company",
    role: "Web Developer",
    details: [
      "Maintained and updated the company website",
      "Integrated REST APIs for various features",
    ],
  },
];
const educationTimelineData = [
  {
    date: "Sep 2021 - Present",
    company: "University of Rhode Island",
    role: "BS in Computer Science",
    details: [
      "Pursuing  a Minor in Cyber Secuirty ",
      "Collaborated with the design team to create a consistent UI",
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
            "w-176 h-9 bg-slate-700  p-1 rounded-lg flex gap-1  justify-center mb-3"
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
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
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
