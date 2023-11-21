import { Container, Grid } from "@mui/material"
import CategoryMenu from "./components/CategoryMenu"

const NetPro = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item>
                        <CategoryMenu />
                    </Grid>
                    <Grid item></Grid>
                </Grid>
            </Container>
        </>
    )
}
export default NetPro
