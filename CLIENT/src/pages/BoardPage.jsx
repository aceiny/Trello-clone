import React, { useState } from "react";
import ListCard from "../componants/Board/ListCard";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
const BoardPage = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "To Do",
    },
    {
      id: 2,
      name: "In Progress",
    },
    {
      id: 3,
      name: "Done",
    },
  ]);

  return (
    <div className="flex items-start flex-wrap gap-3 px-3 py-3">
      {lists.map((list, index) => (
        <ListCard key={index} id={list.id} name={list.name} />
      ))}
    </div>
  );
};

export default BoardPage;
