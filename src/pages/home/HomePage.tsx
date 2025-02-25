import React from 'react'

import Slider from '../../widgets/slider'
import Statistic from '../../widgets/statistic'
import LastProducts from '../../widgets/last-products'

import { $t } from '../../shared/config/locale';

export default function HomePage() {

  return (
    <div className='last_news'>
      <Slider />
      <section className='container mx-auto'>
        <h2 className='text-5xl mt-4'>{$t('title.about')}</h2>
        <p className='uppercase text-base font-medium my-4 text-gray-400'>{$t('title.statistic')}</p>
        <Statistic/>
      </section>
      <section className='container mx-auto my-6'>
        <h2 className='text-4xl font-semibold mb-5'>{$t('title.last-news')}</h2>
        <LastProducts />
      </section>
      <section>
        <h2>{$t('title.certificate-company')}</h2>
        <p>{$t('title.last-news')}</p>
      </section>
    </div>
  )
}
