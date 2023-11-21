import { Container, Grid, Typography } from "@mui/material"
import CategoryMenu from "./components/CategoryMenu"
import items from "./db"
import SelectedCategoryInfo from "./components/SelectedCategoryInfo"
import { useState } from "react"

const NetPro = () => {
    const [catId, setCatId] = useState(0)
    return (
        <>
            <Container>
                <Grid container p={1} spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <CategoryMenu
                            catId={catId}
                            setCatId={setCatId}
                            categories={items.map(({ category }) => category)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <SelectedCategoryInfo
                            title={items[catId].category}
                            body={items[catId].body}
                            categoryItems={items[catId].categoryItems}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default NetPro
