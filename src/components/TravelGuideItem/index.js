import './index.css'

const TravelGuideItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  return (
    <li className="list-item">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="item-heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelGuideItem
