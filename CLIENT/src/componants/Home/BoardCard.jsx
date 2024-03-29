import React from 'react';
import { Link } from 'react-router-dom';

const BoardCard = ({ board, bg }) => {
  const CardStyle = {
    background: 'linear-gradient(145deg, ' + bg() + ', ' + bg() + ')',
  };
  return (
    <Link to={`board/${board._id}`}>
      <div
        className=" cursor-pointer rounded text-white px-2 w-[230px] py-3 gap-8 flex items-start justify-center flex-col"
        style={CardStyle}
      >
        <h1 className="text-[18px] font-[700]">{board.name}</h1>
        <p className="text-[15px] font-[400]"> Trello workspace</p>
      </div>
    </Link>
  );
};

export default BoardCard;
