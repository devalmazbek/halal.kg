import React from 'react'

import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import Icon from '../../../shared/ui/icon'
import SocialIcon from '../../../shared/ui/social-icon'

export default function Footer() {
  return (
   <footer className='container mx-auto py-3'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-10'>
          <a href="tel: +996 (998) 16-61-60">
            <Icon icon={faPhoneVolume} className='text-color' />
            <span>+996 (998) 16-61-60</span>
          </a>
          <a href="tel: +996 (998) 16-61-60">
            <Icon icon={faPhoneVolume} className='text-color'/>
            <span>+996 (998) 16-61-60</span>
          </a>
        </div>
        <SocialIcon />
      </div>
   </footer>
  )
}
