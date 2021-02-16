import './collection-preview.styles.scss'
import { CollectionItem } from '../collection-item/collection-item.component'

export const CollectionPreview = ({items, title}) => (
  <div className="collection-preview">
    <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
    <div className="collection-preview__items">
      {items.map(({id, ...props}) => <CollectionItem key={id} {...props} />)}
    </div>
  </div>
)