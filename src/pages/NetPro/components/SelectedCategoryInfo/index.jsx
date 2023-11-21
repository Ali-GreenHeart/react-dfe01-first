import { Box, Pagination, Typography } from "@mui/material"
import { useState } from "react"

const SelectedCategoryInfo = ({ title, body, categoryItems = [] }) => {
    const [page, setPage] = useState(0)
    return (
        <Box>
            <Typography variant="h6" fontWeight={600} color="#435072">{title}</Typography>
            <Typography variant="body">{body}</Typography>
            {
                categoryItems.slice(page * 3, page * 3 + 3).map(({ id, img, title, body }) => {
                    return (
                        <Box key={id}>
                            <img style={{ width: '100px', height: '100px' }} src={img} alt="" />
                            <Typography variant="h6"> {title}</Typography>
                            <Typography>{body}</Typography>
                        </Box>
                    )
                })
            }
            <Pagination onChange={(event, value) => setPage(value - 1)} count={categoryItems.length / 3} variant="outlined" shape="rounded" />
        </Box>
    )
}
export default SelectedCategoryInfo
