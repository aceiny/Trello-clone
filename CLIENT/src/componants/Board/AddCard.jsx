import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { addCard } from '../../store/reducers/board.reducer';
import { useDispatch } from 'react-redux';

const AddCard = ({ id }) => {
  const [cardName, setCardName] = useState('');
  const dispatch = useDispatch();
  const createCard = () => {
    if (cardName === '') return toastFNC('card name is required', 'error');
    dispatch(addCard({ id, name: cardName }));
    setCardName('');
  };
  return (
    <div className="flex items-center gap-2">
      <input
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        type="text"
        className=" text-white bg-transparent flex-1 border outline-none rounded px-2  border-white py-[6px] w-full"
      />
      <Button onClick={createCard} className="">
        +
      </Button>
    </div>
  );
};

export default AddCard;
