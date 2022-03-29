import {Link} from 'react-router-dom'

export default function LadingPage(){
    return (
        <div>
            <h1>Doggos</h1>
            <Link to={'/dogs'}>
                <button>Comenzar!!!</button>
            </Link>
            
        </div>
    )
    
}