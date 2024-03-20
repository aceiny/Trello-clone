import React from 'react';
const CardCard = ({ card, provided }) => {
  return (
    <div className="bg-[#22272B] hover:border border-blue-400 cursor-pointer p-2 rounded-md">
      <p>{card.name}</p>
    </div>
  );
};

export default CardCard;
