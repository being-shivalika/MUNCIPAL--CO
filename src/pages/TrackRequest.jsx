import React from "react";
import { useOutletContext } from "react-router-dom";
import Notifications from "../components/Notifications";

const TrackRequest = () => {
  const { allRequests } = useOutletContext();

  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-900 mb-8">
        Track Your Applications
      </h1>
      <Notifications requests={allRequests} />
    </div>
  );
};

export default TrackRequest;
