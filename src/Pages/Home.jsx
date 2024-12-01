import React, { useEffect, useState } from "react";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import RightsideNav from "./Shared/Navbar/RighsideNav/RightsideNav";
import LeftsideNav from "./Shared/Navbar/LeftsideNav/LeftsideNav";
import BreakingNews from "./Shared/Header/BreakingNews";
import MainNews from "../demo-data/news.json"




const Home = () => {

  const [main,setMain]=useState([]) ;

  useEffect(()=>{
    setMain(MainNews);
  },[])
  
  return (
    <div className="font-poppins ">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6">
        <LeftsideNav></LeftsideNav>

        <div className="col-span-2 border">
          {/* starting of card here */}

          {
            main.slice(6,9).map((res,index)=>(
              <div key={index} className="card bg-base-100  shadow-xl">


               
              <div className="bg-slate-300 flex">

              <div>
                 
              <img width={30} className="rounded-full" src={res.author.img} alt="" />
              </div>
               <div>
               <p>{res?.author?.name}</p>
               <p>{res?.author?.published_date}</p>
               </div>

              </div>


              <figure>
                <img
                  src={res.image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
              
                <p>{res.title}</p>
              </div>
            </div>

            ))
            
          }


         


        </div>

        <RightsideNav></RightsideNav>
      </div>
    </div>
  );
};

export default Home;
