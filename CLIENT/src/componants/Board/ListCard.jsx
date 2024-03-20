import React, { useState } from 'react';
import CardCard from './CardCard';
import { Button } from '@chakra-ui/react';
const ListCard = ({ list }) => {
  return (
    <div className="bg-[#101204] text-[14px] pt-2 pb-4 px-[10px] text-[#b6c2cf] w-[302px] min-h-[98px] max-h-[400px] overflow-auto flex flex-col gap-2  rounded-[12px] ListCard ">
      <div className="px-3 py-2">
        <h1 className="text-[15px] font-[600]">{list.name}</h1>
      </div>
      <article className="flex flex-col gap-2">
        {list.cards &&
          list.cards.map((card) => <CardCard key={card.id} card={card} />)}
      </article>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className=" text-white bg-transparent flex-1 border outline-none rounded px-2  border-white py-[6px] w-full"
        />
        <Button className="">+</Button>
      </div>
    </div>
  );
};

export default ListCard;
/*        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}*/
