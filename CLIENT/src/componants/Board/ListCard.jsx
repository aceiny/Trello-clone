import React, { useState } from "react";
import CardCard from "./CardCard";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
const ListCard = ({ name, id }) => {
  const [card , setCard ] = useState([
    {
      id:1,
      name : "kill yasseur"
    },
    {
      id:2,
      name : "kill tamer"
    },
    {
      id:3,
      name : "kill brg"
    }
  ])
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const ListStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={ListStyle}
      {...attributes}
      {...listeners}
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
