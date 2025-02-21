import React from 'react'
import { Card } from 'antd';

import { ProductType } from '../../types/products';


interface NewsCardProps extends Pick<ProductType, "title" | "meta"> {
  description? :string;
  thumbnail?: string;
}

export default function NewsCard({title, description, meta, thumbnail}: NewsCardProps) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={thumbnail} />}
      >
        <h2><span>{meta.createdAt}</span></h2>
        <h2>{title}</h2>
        {description && <>{description}</>}
      </Card>
    </div>
  )
}
