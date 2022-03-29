import {Link} from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="card">
        <div className="front">
            <h2>{props.name}</h2>
            <div className="card-image">
                <img src={props.image} alt={props.name} />
            </div>
        </div>
        <div className="back">
            <div className="card-content">
                <h3>{props.name}</h3>
                <div className=''>
                    <label>Temperament: </label>
                    <p>{props.temperament}</p>
                </div>
                <div className=''>
                    <label>Weight: </label>
                    <p>{props.weight}</p>
                </div>
                <Link to={`/dogs/${props.id}`}>
                    <div className=''>
                        <button>Ver mas...</button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}