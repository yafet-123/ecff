import Link from "next/link";
import React from "react";

function Projects() {
  const ProjectsArray = [
    {
      id: "one",
      name: "Project 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: "two",
      name: "Project 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: "three",
      name: "Project 3",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];
  return (
    <>
      <div className="flex flex-col text-white my-12 w-11/12 mx-auto justify-center space-y-4 md:space-y-0 md:space-x-8 md:flex-row space-x-0 md:-mt-14 md:h-128 md:my-24">
        {ProjectsArray.map((project, index) => {
          return (
            <div
              key={index}
              className={`project-${project.id}-background bg-cover bg-blend-darken	justify-center md:bg-cover
                         md:bg-center h-98 flex flex-col place-items-center text-center md:justify-end
                          border-ecffSecondary border-8 md:w-82 md:h-128 pb-6`}
            >
              <h3 className="text-2xl font-bold font-monospace ">
                {project.name}
              </h3>
              <p className="text-sm text-white">{project.description}</p>
              <Link href="/">
                <a>
                  <h5 className="border text-white font-semibold font-monospace hover:font-bold mt-2 p-1">
                    Read More
                  </h5>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
