import React from 'react'
import './menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4,
          size: 'large'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          size: 'large'
        }
      ]
    }
  }

  render() {
    return (
      <div className="menu">
        {this.state.sections.map(({ id, ...props }) => <MenuItem key={id} {...props} />)}
      </div>
    )
  }
}

export default Menu