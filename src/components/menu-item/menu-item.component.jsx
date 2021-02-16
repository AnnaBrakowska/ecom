import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return(
    <div 
      className={`${size} menu__item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='menu__item-content'>
      <h1 className='menu__item-title'>{title.toUpperCase()}</h1>
      <span className='menu__item-subtitle'>SHOP NOW</span>
    </div>
  </div>
  )
}

export default withRouter(MenuItem)