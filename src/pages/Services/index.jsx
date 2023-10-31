import React, { useEffect, useState } from "react"
import PageContainer from "../../components/PageContainer"
import ServiceCard from "../../components/ServiceCard"
import axios from "axios"



const Service = ({ }) => {
    const [services, setServices] = useState([
        {
            id: 0,
            title: 'Project Plan0',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.',
            link: '#'
        },
        {
            id: 1,
            title: 'Project Plan1',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.',
            link: '#'
        },
        {
            id: 2,
            title: 'Project Plan2',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.',
            link: '#'
        },
    ]
    )


    return (
        <PageContainer>
            <h1>This is Service page</h1>
            {
                // services.map(({id, title, desc, link})=>{
                services.map((props) => {
                    return <ServiceCard key={props.id} {...props} />
                    // return <ServiceCard key={id} title={title} desc={desc} link={link} />
                })
            }
        </PageContainer>
    )
}
export default Service
