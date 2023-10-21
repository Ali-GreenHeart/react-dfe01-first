import { Routes, Route } from "react-router"
import Students from "../components/Students"
import Counter from "../components/Counter"
import Users from "../components/Users"


const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>This is Home page!</div>} />
                <Route path="/students" element={<Students />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<Users />} />
            </Routes >
        </>
    )
}
export default WebRouting
