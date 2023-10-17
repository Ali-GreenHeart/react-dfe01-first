import axios from "axios"
import { useEffect, useState } from "react"

// endpoint
const _url = 'https://652e826d0b8d8ddac0b17fc6.mockapi.io/students'

export default function Students() {
    const [students, setStudents] = useState([])
    const [value, setValue] = useState('')
    useEffect(() => {
        axios.get(_url).then(({ data }) => setStudents(data))
    }, [])

    const onEdit = (_id) => {

    }
    const onDelete = (_id) => {
        axios.delete(`${_url}/${_id}`).then(() => {
            setStudents(students.filter(({ id }) => id !== _id))
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const body = {
            name: value,
            createdAt: new Date(),
            he: 'ne?'
        }
        axios.post(_url, body)
            .then(() => {
                setValue('')
                axios.get(_url).then(({ data }) => setStudents(data))
            })
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={({ target }) => setValue(target.value)} type="text" />
                <button>add student</button>
            </form>
            {
                students.map(({ createdAt, name, id }) => (<div style={{ borderBottom: '1px solid white', display: 'flex', gap: 20 }} key={id}>
                    <h1>{name} created at {createdAt}</h1>
                    <button onClick={() => onEdit(id)}>🖋</button>
                    <button onClick={() => onDelete(id)}>❌</button>
                </div>))
            }
        </>
    )
}
