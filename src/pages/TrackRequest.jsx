import React from "react";
import Posts from "../components/Posts";

const TrackRequest = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Posts
            title="Complaint"
            description="Apply for online complaint."
            buttonText="Apply"
          />
          <Posts
            title="Birth Certificate"
            description="Apply for Birth certificate online."
            buttonText="Apply"
          />
          <Posts
            title="Marriage Reg"
            description="Register your marriage certificate."
            buttonText="Apply"
          />
          <Posts
            title="Trade License"
            description="New trade license applications."
            buttonText="Apply"
          />
          <Posts
            title="Property ID"
            description="Search and verify Property ID."
            buttonText="Search"
          />
          <Posts
            title="Trade License"
            description="New trade license applications."
            buttonText="Apply"
          />
          <Posts
            title="Birth Certificate"
            description="Apply for Birth certificate online."
            buttonText="Apply"
          />
        </div>
      </div>
    </>
  );
};

export default TrackRequest;
