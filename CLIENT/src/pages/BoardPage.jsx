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
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { getRandomColor as bg } from '../config/Colors';

const BoardPage = () => {
  const pendingBoard = useSelector((state) => state.Board.pendingBoard);
  const [bgColors, setBgColors] = useState({
    color1: bg(),
    color2: bg(),
  });
  const { id } = useParams();
  const board = useSelector((state) => state.Board.board);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!board || board._id !== id) dispatch(getBoard(id));
  }, [id]);
  const DragEndHandler = (e) => {
    console.log(e);
    const { draggableId, destination, source } = e;
    if (source.index !== destination.index) {
      console.log('droping');
      const oldIndex = source.index;
      const newIndex = destination.index;
      const data = {
        list_id: draggableId,
        board_id: board._id,
        position: newIndex,
      };
      console.log(data);
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
    <div
      style={{
        background:
          'linear-gradient(145deg, ' +
          bgColors.color1 +
          ', ' +
          bgColors.color2 +
          ')',
      }}
      className="flex flex-1 items-start py-3 px-3 gap-8"
    >
      <div className="w-full">
        <DragDropContext onDragEnd={DragEndHandler}>
          <Droppable direction="horizontal" droppableId="lists" type="group">
            {(provided) => (
              <div
                className="flex items-start flex-wrap gap-3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {board &&
                  board.lists.map((list, index) => {
                    return (
                      <Draggable
                        key={list._id}
                        draggableId={list._id}
                        index={index}
                      >
                        {(provided) => (
                          <ListCard
                            key={index}
                            list={list}
                            provided={provided}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                <AddList id={board ? board._id : null} />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default BoardPage;
