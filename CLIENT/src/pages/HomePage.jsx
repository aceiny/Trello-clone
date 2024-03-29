import React, { useEffect } from 'react';
import Sidebar from '../componants/Home/Sidebar';
import BoardList from '../componants/Home/BoardList';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../store/reducers/board.reducer';
import BoardSkeleton from '../componants/Home/BoardSkeleton';
import NavBar from '../componants/NavBar';
const HomePage = () => {
  const boards = useSelector((state) => state.Board.boards);
  const pendingBoards = useSelector((state) => state.Board.pendingBoards);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!boards) {
      dispatch(getBoards());
    }
  }, [boards]);
  return (
    <>
      <NavBar />
      <div className="bg-[#1D2125] flex-1 pt-[40px] flex items-start justify-center">
        <div className="flex gap-8 justify-center">
          <Sidebar />
          {pendingBoards ? (
            <BoardSkeleton />
          ) : (
            boards && <BoardList boards={boards} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
