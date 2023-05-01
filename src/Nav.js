import './App.css';
import { Link} from "react-router-dom";

export default function Navbar(){
    return(
       <nav>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/journey">My journey</Link></li>
            <li><Link to="/program">Programs</Link></li>
            <li><Link to="/Mission">Mission</Link></li>
        </ul>
        
        
       </nav>
    )
}