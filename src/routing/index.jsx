import { Routes, Route } from "react-router"
import Students from "../components/Students"
import Counter from "../components/Counter"
import Users from "../components/Users"
import About from "../pages/About"
import Home from "../pages/Home"
import UserDetails from "../pages/UserDetails"


const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/students" element={<Students />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
            </Routes >
        </>
    )
}
export default WebRouting
