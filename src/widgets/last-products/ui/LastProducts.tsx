import React, {useEffect} from 'react'

import ProductService from '../../../shared/api/products'



export default function LastProducts() {

  useEffect(() => {
    ProductService.getPosts().then((data) => console.log(data)).
    catch((error) => console.log(error))
  }, [])


  return (
    <div>
      test
    </div>
  )
}
