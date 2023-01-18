import React from "react";
import Courses from "./LeftSideCard/Courses/Courses";
import CreatePost from "./CreatePost/CreatePost";
import LeftSideCard from "./LeftSideCard/LeftSideCard";
import Sponsored from "./LeftSideCard/Sponsored/Sponsored";
import './NewsFeed.css'

const NewsFeed = () => {
  return (
    <div className="newsFeed px-4">
     <div>
      <LeftSideCard></LeftSideCard>
      <Courses></Courses>
      <Sponsored></Sponsored>
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
