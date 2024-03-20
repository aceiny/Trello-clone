import React, { useEffect, useState } from 'react';
import ListCard from '../componants/Board/ListCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  ReOrderPosition,
  getBoard,
  reorderList,
} from '../store/reducers/board.reducer';
import { useParams } from 'react-router-dom';
import AddList from '../componants/Board/AddList';
import { Spinner } from '@chakra-ui/react';

const BoardPage = () => {
  const pendingBoard = useSelector((state) => state.Board.pendingBoard);
  const { id } = useParams();
  const board = useSelector((state) => state.Board.board);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!board || board._id !== id) dispatch(getBoard(id));
  }, [id]);

  const DragEndHandler = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      const oldIndex = board.lists.findIndex((list) => list._id === active.id);
      const newIndex = board.lists.findIndex((list) => list._id === over.id);
      const data = {
        list_id: active.id,
        board_id: board._id,
        position: newIndex,
      };
      dispatch(ReOrderPosition(data));
      dispatch(reorderList({ oldIndex, newIndex }));
    }
  };
  if (pendingBoard) {
    return (
      <div className=" flex-1 w-full flex items-center justify-center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }
  return (
      <div className="flex flex-1 items-start py-3 px-3 gap-8 bg-red-200">
        <div className="flex items-start flex-wrap gap-3">
            {board &&
              board.lists.map((list, index) => (
                <ListCard key={index} list={list} />
              ))}
        </div>
        <AddList id={board ? board._id : null} />
      </div>
  );
};

export default BoardPage;
