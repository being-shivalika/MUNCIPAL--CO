import React from "react";
import { Avatar, Button, Card, For, Stack } from "@chakra-ui/react";
import Posts from "../components/Posts";

const CitizenDashboard = () => {
  return (
    <>
      <div classNameName="hero">
        <img src="panchkula.jpg" classNameName="bg-cover" />
      </div>{" "}
      <center>
        <h1 className="text-white font-extrabold text-2xl mt-5">
          Online civic services
        </h1>
      </center>
      <div className="content  flex flex-wrap ">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </>
  );
};

export default CitizenDashboard;
