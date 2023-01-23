import './index.css'

const TravelCard = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1 className="list-head">{name}</h1>
      <p className="list-para">{description}</p>
    </li>
  )
}
export default TravelCard
