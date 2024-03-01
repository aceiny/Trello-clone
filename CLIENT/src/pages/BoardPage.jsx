import React, { useEffect, useState } from "react";
import ListCard from "../componants/Board/ListCard";
import { DndContext, closestCenter, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../store/reducers/board.reducer";
import { useParams } from "react-router-dom";

const BoardPage = () => {
  const {id} = useParams();
  const board = useSelector((state) => state.Board.board);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!board) {
      dispatch(getBoard(id));
    }
    return () => {
      console.log("cleanup");
    };
  }, [board]);
  const [toggleAdd, setToggleAdd] = useState(false);
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
      <div className="flex items-start py-3 px-3 gap-8 bg-red-200">
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
        <div className="relative">
          <button
            onClick={() => setToggleAdd(!toggleAdd)}
            className="bg-[#ffffff84] hover:bg-[#a6c5e24d] transition-all px-5 py-2 rounded-lg relative"
          >
            add new list
          </button>
          <AddList toggle={toggleAdd} />
        </div>
      </div>
    </DndContext>
  );
};


const AddList = ({ toggle }) => {
  return (
    <div
      className={` bg-black text-white flex flex-col gap-3 items-start rounded-xl  px-5 py-6 absolute top-[110%] origin-top-left transition-all  left-0 ${
        toggle ? "scale-100" : "scale-0"
      }`}
    >
      <input
        type="text"
        placeholder="name*"
        className="border  border-white bg-transparent rounded px-3 py-2 outline-none"
      />
      <input
        type="text"
        placeholder="description"
        className="border  border-white bg-transparent rounded px-3 py-2 outline-none"
      />
      <button className="w-full border p-2 rounded bg-white text-black hover:border-white hover:bg-black hover:text-white transition-all  border-transparent ">
        DONE
      </button>
    </div>
  );
};
export default BoardPage;
