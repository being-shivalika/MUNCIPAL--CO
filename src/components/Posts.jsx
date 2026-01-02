import React from "react";

const Posts = () => {
  return (
    <>
      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-75 m-auto mt-10 ">
        <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
          <h5 className="text-sm font-semibold mb-2 text-left mr-auto text-zinc-700">
            Your privacy is important to us
          </h5>

          <p className="w-full mb-4 text-sm text-justify text-indigo-950">
            We process your personal information to measure and improve our
            sites and services, to assist our campaigns and to provide
            personalised content.
            <br />
            For more information see our
            <br />
            <a className="mb-2 text-sm cursor-pointer font-semibold transition-colors hover:text-[#634647] underline underline-offset-2">
              Privacy Policy
            </a>
          </p>

          <button className="mb-2 text-sm mr-auto text-zinc-600 cursor-pointer font-semibold transition-colors hover:text-[#634647] hover:underline underline-offset-2">
            More Options
          </button>
          <button
            className="absolute font-semibold right-6 bottom-6 cursor-pointer py-2 px-8 w-max break-keep text-sm rounded-lg transition-colors text-[#ffffff] hover:text-[#ffffff] bg-blue-500 hover:bg-blue-600 mt-<10>"
            type="button"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
