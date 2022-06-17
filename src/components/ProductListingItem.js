import React from 'react'
import { Link } from 'react-router-dom'

const ProductListingItem = ({ product: { name, description, imgUrl, id } }) => (
  <div className="product-listing-item">
    <img src={imgUrl} alt={name} className="product-listing-item__image"/>
    <div className="product-listing-item__details">
      <h2 className="product-listing-item__product-name" tabIndex="-1">{name}</h2>
      <p className="product-listing-item__product-description">{description}</p>
      <Link  aria-label={`${name} details`}  role="link" className="product-listing-item__more-details" to={`/details/${id}`}>More details</Link>
    </div>
  </div>
)

export default ProductListingItem
