import "./index.css"
import { NavLink } from "react-router-dom"

function Navigation({ to, title }) {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'default' })}
        >
            {title}
        </NavLink>
    )
}

function Header({ }) {
    return <div className="container_header">
        <img className="logo" src="/eziz-xan.jpg" alt="" />
        <div>
            <Navigation to="/" title="Home" />
            <Navigation to="/about" title="About" />
            <Navigation to="/students" title="Students" />
            <Navigation to="/counter" title="Counter" />
            <Navigation to="/users" title="Users" />
        </div>
    </div>
}
export default Header;
