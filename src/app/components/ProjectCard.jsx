import React, { useState } from "react";
import { CodeBracketIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      {/* صورة المشروع */}
      <div className="relative group rounded-t-xl overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-52 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          {/* زر الكود */}
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          {/* زر الفيديو */}
          <button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <PlayIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* تفاصيل المشروع */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] p-4 md:p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base">{description}</p>
      </div>

      {/* المودال الخاص بالفيديو */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#181818] rounded-xl overflow-hidden max-w-2xl w-full p-5 relative">
            {/* زر الإغلاق */}
           
            {/* الفيديو */}
            <div className="relative pt-[56.25%]"> {/* نسبة عرض إلى ارتفاع 16:9 */}
              <iframe
                src={previewUrl}
                title="Project Video"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
