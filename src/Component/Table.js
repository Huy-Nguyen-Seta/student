import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

function Table({data, admin }) {
    const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase"
    const Text ="text-sm text-left px-5 py-3 leading-6 whitespace-nowrap"
    const Rows = (course, i) => {
        return (
            <tr key={i}>
                <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                    <img 
                       className='h-16 w-full rounded-full object-cover'
                       src='react.png'
                       alt=''/>
                    
                </div>
                </td>
                <td className={`${Text} truncate`}>Ten</td>
                <td className={`${Text}`}>The loai</td>
                <td className={`${Text}`}>06-10-2000</td>
                <td className={`${Text} float-right flex-rows gap-2`}>
                    <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                        Sửa <FaEdit className="text-green-500"/>
                    </button>
                    <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                         <MdDelete />
                    </button>
                </td>
              </tr>
              
        
        )
    }
  return (  
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-border divide-y divide-border'>
            <thead>
                <tr className='bg-dryGray'>
                    <th scope='col' className={`${Head}`}>
                        Ảnh
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Tên
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Thể loại
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Ngày tạo
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                        Hành động
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
              {[1,2,3,4,5,6,3412,312,321].map((item, index) => (
              <Rows/>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table