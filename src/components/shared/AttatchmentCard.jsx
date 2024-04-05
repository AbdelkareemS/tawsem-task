import React from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material/styles';
import adobeIcon from "../../assets/adobe.svg"

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const AttatchmentCard = () => {
      
    return (
        <Stack direction="row" spacing={1} sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", alignItems: "center", cursor: "pointer", border: "1px solid #DBDBDB", borderRadius: "8px", padding: "16px" }}>
            <Stack direction='row' sx={{ width: '100%' }}>
                <Box sx={{ bgcolor: "#EDEDED", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px", padding: "8px", borderRadius: "4px"}}>
                    <img src={adobeIcon} width={20} />
                </Box>
                <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black'>عنوان الملف</Typography>
            </Stack>
            <Button spacing={"8px"} component="label" sx={{ border: "1px solid #DBDBDB", padding: "8px 16px", borderRadius: "4px" }}>
                <InfoOutlinedIcon sx={{ width: "16px", color: "black" }} />
                <VisuallyHiddenInput type="file" />
            </Button>
        </Stack>
    )
}

export default AttatchmentCard