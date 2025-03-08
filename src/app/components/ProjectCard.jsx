import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <div className="relative group rounded-t-xl overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-52 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] p-4 md:p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
