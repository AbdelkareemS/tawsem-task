import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React from 'react'
import HeroBG from "../assets/hero-bg.png"

const Hero = () => {
    return (
        <Box style={{
            backgroundImage: `url(${HeroBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom"
        }}>
            <Container
                dir="rtl"
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: {
                        md: "5em",
                        xs: "1em"
                    },
                    height: {
                        md: "30em",
                        xs: "15em"
                    }
                }} >
                <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: {md: "12px", xs: "9px"} }}>
                    <Link underline="hover" color="text.primary" href="/">
                        الخدمات
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/getting-started/installation/"
                        aria-current="page"
                    >
                        إصدار شهادة تصميم مبدئية
                    </Link>
                </Breadcrumbs>
                <Typography variant="h2" color="text.primary" sx={{ fontSize: {md: "3.75rem", xs: "2.075rem" }}}>تقديم طلب</Typography>
            </Container>
        </Box>
    )
}

export default Hero