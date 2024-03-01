import React, { useEffect, useState } from "react";
import ListCard from "../componants/Board/ListCard";
import { DndContext, closestCenter, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../store/reducers/board.reducer";
import { useParams } from "react-router-dom";
import AddList from "../componants/Board/AddList";

const BoardPage = () => {
  const {id} = useParams();
  const board = useSelector((state) => state.Board.board);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getBoard(id));
  }, [id]);
  
  const DragEndHandler = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      setLists((lists) => {
        const oldIndex = lists.findIndex((list) => list.id === active.id);
        const newIndex = lists.findIndex((list) => list.id === over.id);
        const newList = arrayMove(lists, oldIndex, newIndex);
        return newList;
      });
    }
  };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={DragEndHandler}
      className="flex"
    >
      <div className="flex flex-1 items-start py-3 px-3 gap-8 bg-red-200">
        <div className="flex items-start flex-wrap gap-3">
          <SortableContext
            items={board ? board.lists : []}
            strategy={horizontalListSortingStrategy}
          >
            {
            board &&
            board.lists.map((list, index) => (
              <ListCard key={index} list={list} />
            ))}
          </SortableContext>
        </div>
        <AddList id={board ? board._id : null} />
      </div>
    </DndContext>
  );
};

export default BoardPage;
