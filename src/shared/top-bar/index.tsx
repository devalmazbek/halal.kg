import React from 'react'

import instagram from '../../../public/images/icons/instagram.svg'
import facebook from '../../../public/images/icons/facebook.svg'
import telegram from '../../../public/images/icons/telegram.svg'
import whatsapp from '../../../public/images/icons/whatsapp.svg'

export default function TopBar() {
  return (
    <div className='flex items-center'>
      <div className='flex items-center flex-grow'>
        <h2 className='w-[30rem] font-medium uppercase text-xs leading-1 text-slate-500 '>Кыргызстан Мусулмандар Дин башкармалыгынын Халал иштери боюнча кызматтарды жана продукцияларды сертификациялоо бөлүмү</h2>
        <div className='flex relative flex-grow bg-[#59a94e40] rounded-full bg-emerald-200 mr-4 overflow-hidden h-9 p-1'>
          <button type="submit"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0239 10.0171L14.1792 13.1724" stroke="#59A94E" stroke-width="2"></path>
          <circle cx="6.81641" cy="6.51123" r="4.95996" stroke="#59A94E" stroke-width="2"></circle>
          </svg></button>
          <input type="text" className='w-full bg-transparent border-none focus: outline-none pr-3' placeholder='сайт боюнча издөө'/>
        </div>
        <div className='mr-3'>
          <span>
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3782 0.166748C5.39816 0.166748 0.555664 5.02008 0.555664 11.0001C0.555664 16.9801 5.39816 21.8334 11.3782 21.8334C17.369 21.8334 22.2223 16.9801 22.2223 11.0001C22.2223 5.02008 17.369 0.166748 11.3782 0.166748ZM18.8857 6.66675H15.6898C15.3508 5.32499 14.8487 4.0298 14.1948 2.81008C16.171 3.49042 17.8361 4.85945 18.8857 6.66675ZM11.389 2.37675C12.2882 3.67675 12.9923 5.11758 13.4582 6.66675H9.31983C9.78566 5.11758 10.4898 3.67675 11.389 2.37675ZM3.004 13.1667C2.83066 12.4734 2.72233 11.7476 2.72233 11.0001C2.72233 10.2526 2.83066 9.52675 3.004 8.83341H6.66566C6.579 9.54841 6.514 10.2634 6.514 11.0001C6.514 11.7367 6.579 12.4517 6.66566 13.1667H3.004ZM3.89233 15.3334H7.08816C7.43483 16.6876 7.93316 17.9876 8.58316 19.1901C6.60496 18.5135 4.93865 17.1435 3.89233 15.3334ZM7.08816 6.66675H3.89233C4.93865 4.85669 6.60496 3.4867 8.58316 2.81008C7.92929 4.0298 7.42722 5.32499 7.08816 6.66675ZM11.389 19.6234C10.4898 18.3234 9.78566 16.8826 9.31983 15.3334H13.4582C12.9923 16.8826 12.2882 18.3234 11.389 19.6234ZM13.924 13.1667H8.854C8.7565 12.4517 8.68066 11.7367 8.68066 11.0001C8.68066 10.2634 8.7565 9.53758 8.854 8.83341H13.924C14.0215 9.53758 14.0973 10.2634 14.0973 11.0001C14.0973 11.7367 14.0215 12.4517 13.924 13.1667ZM14.1948 19.1901C14.8448 17.9876 15.3432 16.6876 15.6898 15.3334H18.8857C17.8361 17.1407 16.171 18.5097 14.1948 19.1901ZM16.1123 13.1667C16.199 12.4517 16.264 11.7367 16.264 11.0001C16.264 10.2634 16.199 9.54841 16.1123 8.83341H19.774C19.9473 9.52675 20.0557 10.2526 20.0557 11.0001C20.0557 11.7476 19.9473 12.4734 19.774 13.1667H16.1123Z" fill="#59A94E"></path>
            </svg>
          </span>
        </div>
        <div>
          <ul className='flex items-center justify-between w-32'>
            <li>
              <a href="/" target='_blank'><img src={instagram} alt="" /></a>
            </li>
            <li>
              <a href="/" target='_blank'><img src={facebook} alt="" /></a>
            </li>
            <li>
              <a href="/" target='_blank'><img src={whatsapp} alt="" /></a>
            </li>
            <li>
              <a href="/" target='_blank'><img src={telegram} alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
