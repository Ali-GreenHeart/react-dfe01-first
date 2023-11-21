import { Box, Button, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material"

const Card = ({ style }) => (
    <Container maxWidth="xs" sx={{ border: '1px solid', ...style }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                ashjdfvbvjfjdjb
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Container >
);

const MuiPage = ({ }) => {
    return (
        <>
            {/* <Button
                style={{}}
                sx={{}}
                variant="contained"
                onClick={() => { console.log('ay seni mui!') }}
            >
                click me
            </Button>
            <Button
                color="secondary"
                variant="contained"
                onClick={() => { console.log('ay seni mui!') }}
            >
                click me
            </Button>
            <Typography variant="h4" color="primary">salam ay mui!</Typography> */}

            {/* <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    border: '1px solid',
                    m: 10,
                    "&>h1": {
                        m: 1,
                        color: 'red',
                        border: '1px solid',
                        bgcolor: 'primary.main'
                    }
                }}
            >
                <h1>sdlkjdfjkn</h1>
                <h1>sdlkjdfjkn2</h1>
            </Box> */}

            {/* <Grid container>
                <Grid item xs={4}>
                    1
                </Grid>
                <Grid item xs={4}>
                    2
                </Grid>
                <Grid item xs={4}>
                    3
                </Grid>
                <Grid item xs={4}>
                    4
                </Grid>
            </Grid> */}

            {/* <Container>
                <Grid container spacing={2} padding={2}>
                    {
                        ['', '', '', '', '', '', '', ''].map((el, index) => (
                            <Grid
                                item xs={12} sm={6} lg={3}>
                                <Card style={{ backgroundColor: index % 2 ? 'red' : 'green' }} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container> */}

            <Container>
                <Stack
                    flexDirection="row"
                    flexWrap="wrap"
                    // spacing={3}
                    p={1}
                    gap={1}
                >
                    {
                        ['', '', '', '', '', '', '', ''].map((el, index) => (
                            <Card style={{ backgroundColor: index % 2 ? 'red' : 'green' }} />
                        ))
                    }
                </Stack>
            </Container>

        </>
    )
}
export default MuiPage
