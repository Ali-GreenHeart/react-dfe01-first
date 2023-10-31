const ServiceCard = ({ title, desc, link }) => {
    return (
        <div style={{ border: '1px solid black', borderRadius: 10, margin: 10, padding: 10 }}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <a href={link}>Read More {"->"}</a>
        </div>
    )
}
export default ServiceCard
