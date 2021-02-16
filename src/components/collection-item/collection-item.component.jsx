import React from 'react'
import './collection-item.styles.scss'

export const CollectionItem = ({id, name, price, imageUrl}) => {
  return(
    <div className="collection-item">
      <div
        className='collection-item__image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="collection-item__footer">
        <span className="collection-item__footer-name">{name}</span>
        <span className="collection-item__footer-price">{price}</span>
      </div>
    </div>
  )
}