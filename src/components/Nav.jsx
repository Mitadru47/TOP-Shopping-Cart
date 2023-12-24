import { Link } from "react-router-dom";

const Nav = () => {

    return(

        <div id="nav">

            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>

        </div>
    );
}

export default Nav;