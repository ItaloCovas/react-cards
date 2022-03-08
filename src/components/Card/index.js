import './styles.css';


export default function Card({ image, alt, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
