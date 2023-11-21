import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFA600'
        },
        secondary: {
            main: '#55F377'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    borderRadius: '40px'
                }
            }
        },
        MuiMenuItem: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
})

export default theme;
