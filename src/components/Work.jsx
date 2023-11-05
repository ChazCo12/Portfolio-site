import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#D3D3D3]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="inline text-4xl font-bold text-[#8892b0] border-b-4 border-[#4361ee]">
            Projects
          </h2>
          <p className="py-3 text-[#494F55] ">
            Check out some of my recent projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#494F55] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl tracking-wider text-[#d3d3d3] font bold ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-[#494F55] bg-[#D3D3D3] rounded-lg">
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-[#494F55] bg-[#D3D3D3] rounded-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
