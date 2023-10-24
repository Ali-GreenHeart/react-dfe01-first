import { useContext } from "react"
import "./index.css"
import { NavLink } from "react-router-dom"
import { DataContext } from "../../context-api/DataContext"

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

    const { name, surname } = useContext(DataContext)

    return (
        <div className="container_header">
            <img className="logo" src="/eziz-xan.jpg" alt="" />
            <div>
                <h3>{name} {surname}</h3>
            </div>
            <div>
                <Navigation to="/" title="Home" />
                <Navigation to="/about" title="About" />
                <Navigation to="/students" title="Students" />
                <Navigation to="/counter" title="Counter" />
                <Navigation to="/users" title="Users" />
            </div>
        </div>
    )
}
export default Header;
