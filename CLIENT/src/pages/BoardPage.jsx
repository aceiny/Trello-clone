import React, { useState } from "react";
import ListCard from "../componants/Board/ListCard";
import { DndContext, closestCenter, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
const BoardPage = () => {
  const DragEndHandler = (e) => {
    const { active, over } = e;
    if(active.id !== over.id){
      setLists((lists) => {
        const oldIndex = lists.findIndex((list) => list.id === active.id);
        const newIndex = lists.findIndex((list) => list.id === over.id);
        const newList = arrayMove(lists, oldIndex, newIndex);
        return newList;
      });
    }
  }; 
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
    <DndContext collisionDetection={closestCenter} onDragEnd={DragEndHandler}>
      <div className="flex items-start flex-wrap gap-3 px-3 py-3">
        <SortableContext items={lists} strategy={horizontalListSortingStrategy}>
          {lists.map((list, index) => (
            <ListCard key={index} id={list.id} name={list.name} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default BoardPage;
