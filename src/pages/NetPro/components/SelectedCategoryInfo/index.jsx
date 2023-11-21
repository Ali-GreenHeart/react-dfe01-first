import { Box, Typography } from "@mui/material"

const SelectedCategoryInfo = ({ title, body, categoryItems = [] }) => {
    return (
        <Box>
            <Typography variant="h6" fontWeight={600} color="#435072">{title}</Typography>
            <Typography variant="body">{body}</Typography>
            {
                categoryItems.map(({ id, img, title, body }) => {
                    return (
                        <Box key={id}>
                            <img style={{ width: '100px', height: '100px' }} src={img} alt="" />
                            <Typography variant="h6"> {title}</Typography>
                            <Typography>{body}</Typography>
                        </Box>
                    )
                })
            }
        </Box>
    )
}
export default SelectedCategoryInfo
