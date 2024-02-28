import React from 'react'

const BoardCard = () => {
    const CardStyle = {
        backgroundColor: 'red',
    }
  return (
    <div className=' cursor-pointer rounded text-white px-2 w-[230px] py-3 gap-8 flex items-start justify-center flex-col' style={CardStyle}>
        <h1 className='text-[16px] font-[700]'>Project managament</h1>
        <p className='text-[15px] font-[400]'> Trello workspace</p>
    </div>
  )
}

export default BoardCard