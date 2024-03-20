import React, { useEffect } from 'react';
import Sidebar from '../componants/Home/Sidebar';
import BoardList from '../componants/Home/BoardList';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../store/reducers/board.reducer';
const HomePage = () => {
  const boards = useSelector((state) => state.Board.boards);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!boards) {
      dispatch(getBoards());
    }
  }, [boards]);
  return (
    <div className="bg-[#1D2125] flex-1 pt-[40px] flex items-start justify-center">
      <div className="flex gap-8 justify-center">
        <Sidebar />
        <BoardList boards={boards} />
      </div>
    </div>
  );
};

export default HomePage;
