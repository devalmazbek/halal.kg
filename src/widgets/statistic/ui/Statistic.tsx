import { statistic as statisticData } from '../model/data'

import { statisticDataType } from '../model/type' 
import Card from '../../../shared/ui/card'

export default function Statistic() {
  return (
    <div className='flex justify-between my-4 gap-x-16'>
      {statisticData.map((item: statisticDataType) => (
        <Card key={item.id} title={item.title} description={item.description} className='flex-grow'/>
      ))}
    </div>
  )
}
