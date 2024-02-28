import React from "react";
import Sidebar from "../componants/Home/Sidebar";
import BoardList from "../componants/Home/BoardList";

const HomePage = () => {
  return (
    <div className="bg-[#1D2125] flex-1 pt-[40px] flex items-start justify-center">
      <div className="flex gap-8 justify-center">
        <Sidebar />
        <BoardList />
      </div>
    </div>
  );
};

export default HomePage;
