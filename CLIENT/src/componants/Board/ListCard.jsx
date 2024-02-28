import React from "react";
import CardCard from "./CardCard";
const ListCard = ({ name, id }) => {
  const ListStyle = {};
  return (
    <div
      style={ListStyle}
      className="bg-[#101204] text-[14px] pt-2 pb-4 px-[10px] text-[#b6c2cf] w-[302px] min-h-[98px] max-h-[400px] overflow-auto flex flex-col gap-2  rounded-[12px] ListCard "
    >
      <div className="px-3 py-2">
        <h1 className="text-[15px] font-[600]">{name}</h1>
      </div>
      <article className="flex flex-col gap-2">
        <CardCard />
        <CardCard />
        <CardCard />
        <CardCard />
      </article>
      <button className="text-start font-[600] px-1 pt-3 ">Add a card</button>
    </div>
  );
};

export default ListCard;
