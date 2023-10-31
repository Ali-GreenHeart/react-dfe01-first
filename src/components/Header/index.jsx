import { useContext } from "react"
import "./index.css"
import { NavLink } from "react-router-dom"
import { DataContext } from "../../context-api/DataContext"
import { UserEmailContext } from "../../context-api/UserEmailContext"
import { ColorModeContext } from "../../context-api/ColorModeContext"

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
    const email = useContext(UserEmailContext)
    const [handleClick, emoji] = useContext(ColorModeContext)

    return (
        <div className="container_header">
            <img className="logo" src="/eziz-xan.jpg" alt="" />
            <div>
                <h3>{name} {surname}</h3>
                <h5>{name}'s email is {email}  </h5>
            </div>
            <div>
                <button onClick={handleClick} className="many-mode-button ">{emoji}</button>
            </div>
            <div>
                <Navigation to="/" title="Home" />
                <Navigation to="/about" title="About" />
                <Navigation to="/students" title="Students" />
                <Navigation to="/counter" title="Counter" />
                <Navigation to="/users" title="Users" />
                <Navigation to="/users-with-reducer" title="UserWR" />
            </div>
        </div>
    )
}
export default Header;
