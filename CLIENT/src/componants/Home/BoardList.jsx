import React from 'react'
import BoardCard from './BoardCard'

const BoardList = () => {
  return (
    <div className='h-full w-[60%] py-6  flex justify-start gap-5 flex-wrap'>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
    </div>
  )
}

export default BoardList