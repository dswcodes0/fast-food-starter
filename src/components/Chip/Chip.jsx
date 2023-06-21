import "./Chip.css"

export function Chip({ label = "", isActive = false, chipClick }) {

  const buttonClassName = isActive ? "chip active" : "chip"

  

  return (
    <button className={buttonClassName} onClick={chipClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
