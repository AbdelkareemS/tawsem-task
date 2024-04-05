import { Stack, Typography } from '@mui/material'
import React from 'react'

const PartyCard = (props) => {
    const { party } = props
    return (
        <Stack direction="row" spacing={1} sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", border: "1px solid #DBDBDB", borderRadius: "8px", padding: "16px" }}>
            <Stack spacing={"3px"} sx={{ width: '100%' }}>
                <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{party.name}</Typography>
                <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 300, lineHeight: "24px", color: "text.gray" }}>{party.email}</Typography>
                <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 300, lineHeight: "24px", color: "text.gray" }}>{party.phone}</Typography>
            </Stack>
            <Stack spacing={"3px"} sx={{ width: '100%' }}>
                <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{party.companyDomain}</Typography>
                <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 300, lineHeight: "24px", color: "text.gray" }}>{party.companyName}</Typography>
            </Stack>
        </Stack>
    )
}

export default PartyCard