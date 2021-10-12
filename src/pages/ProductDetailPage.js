import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { useData } from 'contexts/DataContext'

const ProductDetailPage = () => {
  const { id } = useParams()
  const {getProductDetailsById} = useData()

  const { name,description, imgUrl } = getProductDetailsById(id)
  return (
    <div className="product-detail-page">
      <img src={imgUrl}/>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ProductDetailPage
