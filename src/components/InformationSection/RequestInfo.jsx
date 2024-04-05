import React from 'react'
import { Box, Button, Stack, Typography, Divider, Icon } from '@mui/material'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const RequestInfo = () => {
    const requestDetails = [
        {
            title: "رقم الطلب",
            info: "1234567890",
        },
        {
            title: "الخدمة المطلوبة",
            info:"شهادة تصميم مبدئية",
        },
        {
            title: "نوع الإجراء",
            info: "إصدار"
        }
    ]
    return (
        <Box
            sx={{
                borderRadius: "24px",
                bgcolor: "#fff",
                boxShadow: "0px 0px 16px 0px rgba(71, 65, 57, 0.04)",
                padding: "32px",
                maxWidth: "872px",
                direction: "rtl",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "30px"
            }}>
            {
                requestDetails.map((requestDetail, index) => {
                    return (
                        <Stack key={index} spacing={1}>
                            <Typography variant='p' fontSize={"14px"} fontWeight={300} color='text.gray'>{requestDetail.title}</Typography>
                            <Typography variant='p' fontSize={"14px"} fontWeight={400} color='text.black'>{requestDetail.info}</Typography>
                        </Stack>
                    )
                })
            }
            <Divider></Divider>
            <Button color="secondary" size="large" variant="contained">حفظ</Button>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "4px"}}>
                <ErrorRoundedIcon sx={{ color: "#DBDBDB", width: "20px", height: "20px"}} />
                <Typography variant='p' fontSize={"12px"} fontWeight={400} lineHeight={"28px"} color='text.lightGray'>يمكنك حفظ الطلب وإكماله لاحقًا</Typography>
            </Box>
        </Box>
    )
}

export default RequestInfo