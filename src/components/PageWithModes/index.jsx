import { useState } from 'react'
import styles from './index.module.css'


let initialRender = true
export default function PageWithModes(props) {
    const [isDark, setIsDark] = useState(false)

    if (initialRender) {
        setIsDark(Boolean(localStorage.getItem('isDark')))
        initialRender = false
    }

    return (
        <div className={styles.container + ' ' + (isDark ? styles.darkMode : '')}>
            <button onClick={() => {
                localStorage.setItem('isDark', !isDark)
                // setIsDark(!isDark)
                setIsDark((pre) => !pre)
            }}>{isDark ? "🌞" : '🌕'}</button>
            {props.children}
        </div>
    )
}
