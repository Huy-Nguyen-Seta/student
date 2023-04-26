import React from 'react'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import Head from '../Component/Head'
import Layout from '../Layout/Layout'

function ContactUs() {
    const contactData = [{
        id: 1,
        title: 'Email Liên Hệ',
        info: 'Interactively ',
        icon: FiMail,
        contact: 'nguyenquanghuy06102000@gmail.com'
    },
    {
        id: 2,
        title: 'Điện Thoại Liên Hệ',
        info: 'Interactively ',
        icon: FiPhone,
        contact: '093214521'
    },
    {
        id: 3,
        title: 'Địa Chỉ',
        info: 'Interactively ',
        icon: FiMapPin,
        contact: '55, Giải Phóng Hai Bà Trưng Hà Nội'
    }
    ]
    return (
        <Layout>
            <div className='min-height-screen container mx-auto px-2 my-6'>
                <Head />
                <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
                    {
                        contactData.map((item) => (
                            <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                                <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2x1'>
                                    <item.icon/>
                                </span>
                                <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                                <p className='mb-0 text-sm text-text leading-7'>
                                    <a href='/' className='text-blue-600'>
                                        {item.contact}
                                    </a>{' '}
                                    {item.info}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </Layout>
    )
}

export default ContactUs