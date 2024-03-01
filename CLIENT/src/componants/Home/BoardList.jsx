import React from "react";
import BoardCard from "./BoardCard";

const BoardList = ({ boards }) => {
  return (
    <div className="h-full w-[60%] py-6  flex justify-start gap-5 flex-wrap">
      {boards && boards.map((board) => <BoardCard key={board.id} board={board} />)}
    </div>
  );
};

export default BoardList;
