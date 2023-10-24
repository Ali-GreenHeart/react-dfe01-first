import { useState } from "react";
import { createContext } from "react";

export const ColorModeContext = createContext()

const colors = ['light', 'dark', 'green', 'purple', 'pink', 'gold']
const emojis = ['☃', '🎩', '🎄', '🍇', '🍭', '🥇']


const ColorModeContextProvider = ({ children }) => {
    const [index, setIndex] = useState(0)

    const handleClick = () => {
        if (index === colors.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <ColorModeContext.Provider value={[handleClick, emojis[index]]}>
            <div className={`mode-container ${colors[index].concat('ModeContainer')}`}>
                {children}
            </div>
        </ColorModeContext.Provider>
    )
}

export default ColorModeContextProvider;
