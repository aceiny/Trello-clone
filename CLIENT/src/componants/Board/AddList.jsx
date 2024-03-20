import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../store/reducers/board.reducer';
import { toastFNC } from '../../config/toast';

const AddList = ({ id }) => {
  const dispatch = useDispatch();
  const [toggleAdd, setToggleAdd] = useState(false);
  const [name, setName] = useState('');
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const createListHandler = () => {
    if (name == '') {
      toastFNC("name can't be empty", "error");;
      setToggleAdd(false);
      return;
    }
    dispatch(addList({ id, name }));
    setToggleAdd(false);
    setName('');
  };
  return (
    <div className="relative">
      <button
        onClick={() => setToggleAdd(!toggleAdd)}
        className="bg-[#ffffff84] whitespace-nowrap hover:bg-[#a6c5e24d] transition-all px-5 py-2 rounded-lg relative"
      >
        add new list
      </button>
      <div
        className={` bg-black text-white flex flex-col gap-3 items-start rounded-xl  px-5 py-6 absolute top-[110%] origin-top-left transition-all  left-0 ${
          toggleAdd ? 'scale-100' : 'scale-0'
        }`}
      >
        <input
          type="text"
          placeholder="name*"
          value={name}
          onChange={nameHandler}
          className="border  border-white bg-transparent rounded px-3 py-2 outline-none"
        />
        <button
          onClick={createListHandler}
          className="w-full border p-2 rounded bg-white text-black hover:border-white hover:bg-black hover:text-white transition-all  border-transparent "
        >
          DONE
        </button>
      </div>
    </div>
  );
};

export default AddList;
