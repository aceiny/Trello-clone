import React from 'react';
import { Skeleton } from '@chakra-ui/react';
const BoardSkeleton = () => {
  return (
    <div className="h-full w-[60%] py-6  flex justify-start gap-5 flex-wrap">
      {Array(6)
        .fill()
        .map((_, i) => (
          <Skeleton key={i} width="240px" className='py-1 rounded'>
            <div className=" cursor-pointer rounded text-white px-2 w-[230px] py-3 gap-8 flex items-start justify-center flex-col">
              <h1 className="text-[18px] font-[700]">board name</h1>
              <p className="text-[15px] font-[400]"> Trello workspace</p>
            </div>
          </Skeleton>
        ))}
    </div>
  );
};

export default BoardSkeleton;
