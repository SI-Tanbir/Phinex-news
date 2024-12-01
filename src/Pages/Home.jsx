import React from "react";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import RightsideNav from "./Shared/Navbar/RighsideNav/RightsideNav";
import LeftsideNav from "./Shared/Navbar/LeftsideNav/LeftsideNav";
import BreakingNews from "./Shared/Header/BreakingNews";

const Home = () => {
  return (
    <div className="font-poppins ">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6">
        <LeftsideNav></LeftsideNav>

        <div className="col-span-2 border">
          <h2 className="text-4xl">New comming soons...</h2>
        </div>

        <RightsideNav></RightsideNav>
      </div>
    </div>
  );
};

export default Home;
