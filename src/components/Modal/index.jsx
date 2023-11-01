import { useState } from 'react';
import style from './index.module.css'
const Modal = ({ onSubmitCallback }) => {
    const [showModal, setShowModal] = useState(false)
    const [value, setValue] = useState('')
    return (
        <>
            <button onClick={() => {
                setShowModal(true)
            }} >edit the user</button>
            {
                showModal && <div className={style.modal}>
                    <input
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        type="text" style={{ fontSize: 32 }} placeholder='enter your name' />
                    <button onClick={() => {
                        onSubmitCallback(value)
                        setShowModal(false)
                    }}  >submit and close</button>
                </div>
            }
        </>
    )
}

export default Modal;
