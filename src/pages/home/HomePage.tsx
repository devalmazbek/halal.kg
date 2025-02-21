import React from 'react'

import Slider from '../../widgets/slider'
import Statistic from '../../widgets/statistic'
import LastProducts from '../../widgets/last-products'

export default function HomePage() {
  return (
    <div>
      <Slider />
      <section className='container mx-auto'>
        <h2 className='text-5xl mt-4'>Халал Даму</h2>
        <p className='uppercase text-base font-medium my-4 text-gray-400'>біздің көрсеткіштер</p>
        <Statistic/>
      </section>
      <section>
        <LastProducts />
      </section>
    </div>
  )
}
