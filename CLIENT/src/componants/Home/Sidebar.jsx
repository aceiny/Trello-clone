import React from 'react'
import dashboard from '../../assets/icons/dashboard.svg'
import home from '../../assets/icons/home.svg'
import template from '../../assets/icons/template.svg'
export default function Sidebar(){
  return (
    <aside className='  gap-4 px-5 w-[20%] flex flex-col items-start text-[#b6c2cf]'>
        <ul className='flex py-1 w-full flex-col border-b border-[#b6c2cf] '>
            <li className='flex HomeSideBarNav items-center gap-3'>
                <img src={dashboard} alt="dashboard" className='w-5 h-5' />
                <p>Dashboard</p>
            </li>
            <li className='flex  HomeSideBarNav items-center gap-3'>
                <img src={home} alt="home" className='w-5 h-5' />
                <p>Home</p>
            </li>
            <li className='flex HomeSideBarNav items-center gap-3'>
                <img src={template} alt="template" className='w-5 h-5' />
                <p>Template</p>
            </li>
        </ul>
        
        <article className='w-full flex flex-col gap-2'>
            <p className='text-[14px] font-[400] px-3'>Workspace</p>
            <div className='HomeSideBarNav items-center justify-start gap-3 flex text-start'>
                <img src="" alt="image" className='rounded-md h-8 w-8' />
                <p>Trello Workspace</p>
            </div>
        </article>
    </aside>
  )
}
