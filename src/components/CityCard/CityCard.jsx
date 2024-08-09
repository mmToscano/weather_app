import "./styles.css"

function CityCard({ name, handleClick }) {
    return(
        <div className="card" onClick={() => handleClick(name)}>
            {name}
        </div>
    )
}

export default CityCard;