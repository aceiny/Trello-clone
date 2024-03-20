import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../store/reducers/board.reducer';
import { toastFNC } from '../../config/toast';
export const NavCreate = () => {
  const dispatch = useDispatch();
  const [boardName, setboardName] = useState('');
  const createBoard = () => {
    if (boardName === '') return toastFNC('board name is required', 'error');
    dispatch(addBoard(boardName));
  };
  return (
    <Menu>
      <MenuButton>
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-black font-[500] transition duration-200 ease-linear">
          Create
        </button>
      </MenuButton>
      <MenuList>
        <MenuItem className=" flex items-center gap-3">
          <input
            type="text"
            value={boardName}
            onChange={(e) => setboardName(e.target.value)}
            placeholder="workspace name"
            className="px-2 py-1 w-40 border-black border outline-none flex-1 text-black rounded"
            onClick={(e) => e.stopPropagation()} // Add this line
          />
          <Button onClick={createBoard}>+</Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
