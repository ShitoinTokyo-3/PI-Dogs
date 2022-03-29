import { Link } from 'react-router-dom';
 export default function SecondNav(props) {
     return (
            <div className="">
                <nav className="">
                    <Link to="/dogs">
                        <button className="">
                            Home
                        </button>
                    </Link>
                    <div className="">
                        <h3>Doggos</h3>
                    </div>
                </nav>
            </div>
     );
}