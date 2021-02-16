import React from 'react'
import SHOP_DATA from './data'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }


  render() {
    return (
    <div className="shop-page">
      {
        this.state.collections.filter((item, index) => index <= 4).map(({id, ...props}) => (
          <CollectionPreview key={id} {...props}/>
        ))
      }
    </div>
    )
  }
}


export default ShopPage