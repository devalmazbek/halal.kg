import React from 'react'

import instagram from '../../../public/images/icons/instagram.svg'
import facebook from '../../../public/images/icons/facebook.svg'
import telegram from '../../../public/images/icons/telegram.svg'
import whatsapp from '../../../public/images/icons/whatsapp.svg'

export default function SocialIcon() {
  return (
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
  )
}
