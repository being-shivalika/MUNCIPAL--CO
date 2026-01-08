import React from "react";

const Posts = ({ title, description, buttonText, linkText, onBtnClick }) => {
  return (
    <div className="w-full h-full rounded-2xl bg-amber-50 shadow-md hover:shadow-lg transition-shadow border border-amber-100 flex flex-col">
      <div className="flex flex-col flex-1 pt-9 px-6 pb-20 relative">
        <h5 className="text-sm font-bold mb-2 text-zinc-700 uppercase tracking-wide">
          {title || "Service Title"}
        </h5>

        <p className="w-full mb-4 text-sm text-indigo-950 leading-relaxed">
          {description || "Service description will appear here."}
        </p>

        {linkText && (
          <a className="text-sm cursor-pointer font-semibold text-amber-800 hover:text-amber-600 underline underline-offset-2 mb-4 block">
            {linkText}
          </a>
        )}

        <div className="mt-auto flex justify-between items-center absolute bottom-6 left-6 right-6">
          <button className="text-sm text-zinc-600 font-semibold hover:text-amber-800 hover:underline underline-offset-2">
            Details
          </button>

          <button
            onClick={onBtnClick}
            className="font-semibold cursor-pointer py-2 px-6 text-sm rounded-lg transition-colors text-white bg-indigo-900 hover:bg-blue-700 shadow-sm"
            type="button"
          >
            {buttonText || "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
