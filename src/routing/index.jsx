import { Routes, Route } from "react-router"
import { lazy } from "react"
import { Suspense } from "react"
import Loading from "../components/Loading"

const Counter = lazy(() => import("../components/Counter"))
const Students = lazy(() => import("../components/Students"))
const Users = lazy(() => import("../components/Users"))
const About = lazy(() => import("../pages/About"))
const Home = lazy(() => import("../pages/Home"))
const Services = lazy(() => import("../pages/Services"))
const UserDetails = lazy(() => import("../pages/UserDetails"))
const UsersWR = lazy(() => import("../pages/UsersWR"))

// code splitting   4 eded ->  2.5mb
const WebRouting = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/students" element={<Students />} />
                <Route path="/users-with-reducer" element={<UsersWR />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
            </Routes >
        </Suspense>
    )
}
export default WebRouting
