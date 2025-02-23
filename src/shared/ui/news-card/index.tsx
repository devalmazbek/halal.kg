import React from 'react'
import { Card } from 'antd';

import { ProductType } from '../../types/products';


interface NewsCardProps extends Pick<ProductType, "title" | "meta"> {
  description? :string;
  thumbnail?: string;
}

export default function NewsCard({title, description, meta, thumbnail}: NewsCardProps) {
  return (
    <Card
      hoverable
      style={{minWidth: 240}}
      cover={<img alt={title} src={thumbnail} />}
    >
      <h2 className='text-xl text-primary font-medium'><span>{meta.createdAt.slice(0, 10)}</span></h2>
      <h2 className='text-lg font-semibold'>{title}</h2>
      {description && <>{description}</>}
    </Card>
  )
}
