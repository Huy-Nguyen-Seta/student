import React from 'react'

function Head({title}) {
  return (
    <div className='w-full bg-deepGray lg:h-img relative h-64 overflow-hidden rounded-md'>
        <img src="https://reviewedu.net/wp-content/uploads/2021/11/doi-ten-truong-dai-hoc-xay-dung-tu-ngay-138-e3b-5956862.jpg" alt='nuce' className='w-full h-full object-cover'/>
        <div className='absolute lg:top-24 top-16 w-full flex-colo'>
          <h1 className='text-2xl lg:text-h1 text-main text-center font-bold'>
                  {title}  
          </h1>
        </div>
     </div>
  )
}

export default Head