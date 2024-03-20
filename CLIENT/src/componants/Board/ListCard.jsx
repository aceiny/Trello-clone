import React, { useState } from 'react';
import CardCard from './CardCard';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
const ListCard = ({ list }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: String(list._id) });
  const ListStyle = {
    transform: CSS.Transform.toString(transform) || '',
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
        <h1 className="text-[15px] font-[600]">{list.name}</h1>
      </div>
      <article className="flex flex-col gap-2">
        {list.cards &&
          list.cards.map((card) => <CardCard key={card.id} card={card} />)}
      </article>
      <input
        type="text"
        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
        className=" text-white bg-transparent border border-white py-2 w-full"
      />
    </div>
  );
};

export default ListCard;
