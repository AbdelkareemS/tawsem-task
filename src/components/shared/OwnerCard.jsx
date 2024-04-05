import { Stack, Typography } from '@mui/material'
import React from 'react'

const OwnerCard = (props) => {
    const { owner } = props
    return (
        <Stack direction="row" spacing={1} sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", alignItems: "center", border: "1px solid #DBDBDB", borderRadius: "8px", padding: "16px" }}>
            <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 500, lineHeight: "24px", color: "text.gray", width: '100%' }}>{owner.ministry}</Typography>
            <Stack spacing={"8px"} sx={{ width: '100%' }}>
                <Typography variant='p' sx={{ fontSize: "12px", fontWeight: 300, lineHeight: "24px", color: "text.lightGray" }}>المرحلة</Typography>
                <Typography variant='p' sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{owner.currentLevel}</Typography>
            </Stack>
            <Stack spacing={"8px"} sx={{ width: '100%' }}>
                <Typography variant='p' sx={{ fontSize: "12px", fontWeight: 300, lineHeight: "24px", color: "text.lightGray" }}>الإجراء</Typography>
                <Typography variant='p' sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{owner.procedur}</Typography>
            </Stack>
            <Stack spacing={"8px"} sx={{ width: '100%' }}>
                <Typography variant='p' sx={{ fontSize: "12px", fontWeight: 300, lineHeight: "24px", color: "text.lightGray" }}>رقم خطاب عدم الممانعة</Typography>
                <Typography variant='p' sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{owner.letterNumber}</Typography>
            </Stack>
        </Stack>
    )
}

export default OwnerCard