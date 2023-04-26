import React from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from '../Title'

function ListLesson() {
  return (
    <div className='my-12'>
      <Title title="Khóa học Liên Quan" Icon={BsFillBookmarkStarFill} />
      <div className='mt-10'>
        <Swiper autoplay={{ delay: 1000, disableOnInteraction: false }} loop={true} spaceBetween={10} speed={1000} module={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,

            },
            400: {
              slidesPerView: 2,

            },
            768: {
              slidesPerView: 3,

            },
            1024: {
              slidesPerView: 4,

            },
            1208: {
              slidesPerView: 5,
              spaceBetween: 30
            },
          }}>
          {
            [1, 1, 32, 3, 4, 21, 321].map((user, i) => (
              <SwiperSlide key={i}>
                <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                  <img src="https://i.morioh.com/2020/03/04/eb705fc35a89.jpg" alt='abc' className='w-full h-64 object-cover rounded mb-2' />
                  <div className="font-semibold text-xl trancuted text-ellipsis overflow-hidden line " >
                  Khoa Hoc Reactjs
                  </div>
                  <button className='w-24 h-10 mt-2 flex-colo transition hover:bg-subMain rounded  bg-white bg-opacity-30 text-white'>
                    <Link to={"/course/1/lesson/1"}>

                      Xem ngay
                    </Link>

                  </button>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div >
  )
}

export default ListLesson