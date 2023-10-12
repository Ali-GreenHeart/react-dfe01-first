import reactShekil from '../assets/react.svg'

function Header({ ad, title, onClick, isMain = false, withReact = false }) {
    return <div>
        <h1
            style={{ color: isMain ? 'green' : 'black' }}
        >salam {ad}</h1>
        <p>{title}</p>
        <button onClick={onClick} >click me</button>
        {
            withReact && <img src={reactShekil} alt="" />
        }
        <hr />
    </div>
}
export default Header;
