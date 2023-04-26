import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const Links = [{
    title: 'Giáo Dục',
    links: [
      { name: 'Trang chủ', link: '/' },
      { name: 'Liên hệ', link: '/about-us' },
      { name: 'Thông tin', link: '/contact-us' },
      { name: 'Khóa học', link: '/course' }

    ]
  },
  {
    title: 'Chủ Đề',
    links: [
      { name: 'Xây dựng', link: '#' },
      { name: 'Kinh tế', link: '#' },
      { name: 'Công nghệ', link: '#' },
      { name: 'Kiến trúc', link: '#' }

    ]
  }, {
    title: 'Tài Khoản',
    links: [
      { name: 'Dashboard', link: '/dashboard' },
      { name: 'Yêu Thích', link: '/favorite' },
      { name: 'Hồ Sơ', link: '/profile' },
      { name: 'Đổi Mật Khẩu', link: '/password' }

    ]
  }]
  return (

    < div className='bg-dry py-4 border=t-2 border-black' >
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
          {Links.map((link, index) => (
            <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
              <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
              <ul className='text-sm flex flex-col space-y-3'>
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link to={text.link} className="text-border inline-block w-full hover:text-subMain">
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
            <Link to="/">
              <img src='/logonuce.png' alt="logo" className='w-2/4 object-contain h-12' />
            </Link>
            <p className='leading-7 text-sm text-border mt-3 justify-center '>
              <span>
                Trường Đại học Xây Dựng
                <br /> Số 55,  Đường Giải Phóng, Hai Bà Trưng Hà Nội
              </span>
              <br/>
              <span>Liên Hệ : + 01234214312</span>
              <br/>


            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer