import React from 'react'

import logo from './../../../../public/images/header/logo.svg'
import instagram from '../../../../public/images/icons/instagram.svg'
import facebook from '../../../../public/images/icons/facebook.svg'
import telegram from '../../../../public/images/icons/telegram.svg'
import whatsapp from '../../../../public/images/icons/whatsapp.svg'

export default function Header() {
  return (
    <header className=''>
      <div className='flex items-center'>
        <div className=''>
          <img src={logo} alt="logo" width={80} />    
        </div>
        <div className='flex items-center flex-grow ml-3'>
          <h2 className='font-medium uppercase text-xs leading-1 text-slate-500 w-96 '>Кыргызстан Мусулмандар Дин башкармалыгынын Халал иштери боюнча кызматтарды жанапродукцияларды сертификациялоо бөлүмү</h2>
          <div className='flex-grow flex relative rounded-full bg-emerald-200 mr-4 overflow-hidden h-7 focus: border-none focus:border-none'>
            <button type="submit"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0239 10.0171L14.1792 13.1724" stroke="#59A94E" stroke-width="2"></path>
            <circle cx="6.81641" cy="6.51123" r="4.95996" stroke="#59A94E" stroke-width="2"></circle>
            </svg></button>
            <input type="text" className='w-full bg-transparent border-none ' placeholder='сайт боюнча издөө'/>
          </div>
          <div>
            language
          </div>
          <div>
            <ul className='flex items-center'>
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
    </header>
  )
}
