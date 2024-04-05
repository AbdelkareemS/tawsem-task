import { Container, Grid } from '@mui/material'
import React from 'react'
import RequestRivisionSection from './RequestRivisionSection'
import Steps from './Steps'
import RequestInfo from './RequestInfo'

const InformationArea = () => {
    return (
        <Container maxWidth="xl" sx={{ paddingX: {xs: "0px", md: "16px"}}}>
            <Grid container spacing={2} direction={{xs: "column-reverse", md: "row"}} sx={{ marginTop: "-3em" }}>
                <Grid item xs={12} md={9}>
                    <RequestRivisionSection />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Steps />
                    <RequestInfo />
                </Grid>
            </Grid>
        </ Container>
    )
}

export default InformationArea