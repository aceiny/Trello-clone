import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
const CardCard = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card._id });
  const CardStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div className="bg-[#22272B] hover:border border-blue-400 cursor-pointer p-2 rounded-md">
      <p>{card.name}</p>
    </div>
  );
};

export default CardCard;
