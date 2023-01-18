import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import LeftSideCard from "./LeftSideCard/LeftSideCard";
import './NewsFeed.css'

const NewsFeed = () => {
  return (
    <div className="newsFeed">
     <div className="bg-slate-200">
      <LeftSideCard></LeftSideCard>
     </div>
     <div className="">
      <CreatePost></CreatePost>
     </div>
     <div className="bg-red-200">
      <p>rightSidebar</p>
     </div>
    </div>
  );
};

export default NewsFeed;
