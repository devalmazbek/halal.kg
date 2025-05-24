import { useTranslation } from 'react-i18next';

import Slider from '../../widgets/slider'
import Statistic from '../../widgets/statistic'
import LastProducts from '../../widgets/last-products'
import { LastNewsSlider } from '../../widgets';

import { $t } from '../../shared/config/locale';

export default function HomePage() {
  const { t } = useTranslation();


  return (
    <div className=''>
      <div className='last_news'>
        <Slider />
      </div>
      <section className='container mx-auto'>
        <h2 className='text-5xl mt-4'>{t('title.about')}</h2>
        <p className='uppercase text-base font-medium my-4 text-gray-400'>{$t('title.statistic')}</p>
        <Statistic/>
      </section>
      <section className='container mx-auto my-6'>
        <h2 className='text-4xl font-semibold mb-5'>{t('title.last-news')}</h2>
        <LastProducts />
      </section>
      <section className='container mx-auto'>
        {/* <h2 className='text-4xl font-semibold mb-5'>{t('title.last-news')}</h2> */}
        <LastNewsSlider />
      </section>
    </div>
  )
}
