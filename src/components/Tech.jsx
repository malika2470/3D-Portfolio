
import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      {/* Title section */}
      <h2 className="text-center text-2xl font-bold my-10">Technologies I Know:</h2>

      {/* Technology grid */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 bg-gray-800 rounded-lg overflow-hidden" key={technology.name} style={{ backgroundImage: `url(${technology.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay with the technology name */}
            <div className="text-white text-sm p-2 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
