import { useContext } from "react"
import { DataContext } from "../../context-api/DataContext"

const Footer = ({ }) => {
    const { name } = useContext(DataContext)
    return (
        <footer style={{ backgroundColor: 'lavender' }}>
            im footer  my name is {name}
        </footer>
    )
}
export default Footer
