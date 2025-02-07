import React from 'react'

import logo from '../../../assets/images/header/logo.svg'
import instagram from '../../../assets/images/header/icons/instagram.svg'
import facebook from '../../../assets/images/header/icons/facebook.svg'
import telegram from '../../../assets/images/header/icons/telegram.svg'
import whatsapp from '../../../assets/images/header/icons/whatsapp.svg'

export default function Header() {
  return (
    <header>
      <div>
        <div className=''>
          <img src={logo} alt="logo" />    
        </div>
        <div>
          <h2>Кыргызстан Мусулмандар Дин башкармалыгынын Халал иштери боюнча кызматтарды жанапродукцияларды сертификациялоо бөлүмү</h2>
          <div>
            <input type="text" />
          </div>
          <div>
            language
          </div>
          <div>
            <ul>
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
