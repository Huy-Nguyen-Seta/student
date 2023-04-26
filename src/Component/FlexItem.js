import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsCaretRightSquare } from 'react-icons/bs'

function FlexItem({ course }) {
    return (
        <>
            <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>{course.title}</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-subMain w-3 h-3'/>
                <span className='text-sm font-medium'>{course.creatDate}</span>
            </div>
            <div className='flex items-center gap-2'>
                <BsCaretRightSquare className='text-subMain w-3 h-3'/>
                <span className='text-sm font-medium'>{course.quantity}</span>
            </div>
        </>
    )
}

export default FlexItem