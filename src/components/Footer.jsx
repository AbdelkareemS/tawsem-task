import { Box, Breadcrumbs, Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import FooterBg from "../assets/footer.png"
import Logo from "../assets/logo.png"
import Registration from "../assets/Registration.png"
import SaudiVision from "../assets/saudiVision.png"
import Diriyah from "../assets/Diriyah-Gate-Authority.png"


const Footer = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: {xs: "1rem", md: "5em" } }}>
            <Container maxWidth="xxl" sx={{ height: "58px", backgroundImage: `url(${FooterBg})`, backgroundSize: "contain", backgroundRepeat: "repeat-x" }}></Container>
            <Container maxWidth="xl" dir="rtl" sx={{ marginY: {xs: "20px", md: "67px"} }}>
                <Stack spacing={"32px"} sx={{}}>
                    <img src={Logo} alt="logo" width={215} height={51} />
                    <Typography variant='p' color='text.primary' fontSize={{xs: "12px" ,md: "16px"}} fontWeight={400} lineHeight={"24px"} width={"50%"}>منصة موحدة لتقديم الخدمات الحكومية الإلكترونية لدعم إثراء تجربة العملاء والتركيز على أنظمة عمل موحدة لتسهيل وتمكين وصول المستفيد للخدمات خلال استخدام أحدث التقنيات وأفضل الممارسات العالمية.</Typography>
                </Stack>
            </Container>
            <Container maxWidth="xxl" dir="rtl" sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", gap: "16px", alignItems: "center", padding: "24px", borderTop: "1px solid #918278" }}>
                <Stack spacing={"8px"}>
                    <Typography variant='p' fontSize={"18px"} color='text.primary' fontWeight={500}>مدعوم بواسطة</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px"}}>
                        <img src={Diriyah} alt="Registration" width={24} height={24} />
                        <Typography variant='p' fontSize={"12px"} color='text.primary' fontWeight={400}>هيئة تطوير بوابة الدرعية</Typography>
                    </Box>
                </Stack>
                <Typography variant='p' fontSize={"12px"} color='text.primary' fontWeight={400}>هيئة تطوير بوابة الدرعية. جميع الحقوق محفوظة © 2024 </Typography>
                <Box sx={{ display: "flex", gap: "32px" }}>
                    <img src={Registration} alt="Registration" height={56} />
                    <img src={SaudiVision} alt="SaudiVision" height={56} />
                </Box>
            </Container>

        </Box>
    )
}

export default Footer