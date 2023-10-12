import { useState } from 'react';
import style from './index.module.css'
const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <button onClick={() => setShowModal(true)}>show modal</button>

            {
                showModal && <div className={style.modal} >
                    <div className={style.modalContainer}>
                        <div className={style.closeModal} onClick={() => setShowModal(false)}>&times;</div>
                        <h2>title</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam atque libero voluptatum quibusdam magni voluptate blanditiis minima! Officiis similique aspernatur deleniti ratione fugit alias aperiam velit quaerat explicabo optio?
                        </p>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero recusandae enim quis maxime quasi accusantium reprehenderit optio odit sed? Blanditiis, suscipit aliquam cumque id numquam natus nihil quos provident.
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;
