import React from 'react';
import CardCard from './CardCard';
import AddCard from './AddCard';
const ListCard = ({ list, provided }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="bg-[#101204] text-[14px] pt-2 pb-4 px-[10px] text-[#b6c2cf] w-[302px] min-h-[98px] max-h-[400px] overflow-auto flex flex-col gap-2  rounded-[12px] ListCard "
    >
      <div className="px-3 py-2">
        <h1 className="text-[15px] font-[600]">{list.name}</h1>
      </div>
      <article className="flex flex-col gap-2">
        {list.cards &&
          list.cards.map((card) => <CardCard key={card.id} card={card} />)}
      </article>
      <AddCard id={list._id}/>
    </div>
  );
};

export default ListCard;