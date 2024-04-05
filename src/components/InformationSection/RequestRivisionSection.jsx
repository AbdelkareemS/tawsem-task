import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import OwnerCard from '../shared/OwnerCard';
import PartyCard from '../shared/PartyCard';
import AttatchmentCard from '../shared/AttatchmentCard';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const RequestRivisionSection = () => {
    const [expanded, setExpanded] = useState({});

    const projectInfoData = [
        { "نوع المشروع": "تعليمي" },
        { "اسم المشروع": "المحتوى المقروء لصفحة ما ليلهي القارئ" },
        { "نطاق المشروع": "المحتوى المقروء لصفحة ما ليلهي القارئ" },
        { "مالك المشروع": "المحتوى المقروء لصفحة ما ليلهي القارئ" },
        { "اسم المشروع بالعربي": "المحتوى المقروء لصفحة ما ليلهي القارئ" },
        { "اسم مالك المشروع بالعربي": "المحتوى المقروء لصفحة ما ليلهي القارئ" },
        { "رقم الصك": "المحتوى المقروء لصفحة ما ليلهي القارئ" },
        { "نوع الملكية": "المحتوى المقروء لصفحة ما ليلهي القارئ" }
    ]

    const parties = [
        {
            "name": "عبد الله العنزي",
            "email": "example@example.com",
            "phone": "+966549328586",
            "companyDomain": "مقاول",
            "companyName": "شركة البعد التصميمي"
        },
        {
            "name": "عبد الله العنزي",
            "email": "example@example.com",
            "phone": "+966549328586",
            "companyDomain": "مقاول",
            "companyName": "شركة البعد التصميمي"
        },

    ]

    const owners = [
        {
            "ministry": "وزارة التجارة",
            "currentLevel": "تصميم",
            "procedur": "عدم ممناعة",
            "letterNumber": "643545323",
        },
        {
            "ministry": "وزارة التجارة",
            "currentLevel": "تصميم",
            "procedur": "عدم ممناعة",
            "letterNumber": "643545323",
        },

    ]

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded({ ...expanded, [panel]: isExpanded });
    };

    return (
        <Box
            sx={{
                borderRadius: "24px",
                bgcolor: "#fff",
                boxShadow: "0px 0px 16px 0px rgba(71, 65, 57, 0.04)",
                padding: "32px",
                marginX: {
                    xs: "0px",
                    md: "30px"
                },
                direction: "rtl",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem"
            }}>
            <Typography variant='h6'>مراجعة الطلب</Typography>


            <Accordion disabled expanded={expanded['panel1']} onChange={handleChange('panel1')} sx={{
                border: "0px",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                }
            }}>
                <AccordionSummary
                    expandIcon={expanded['panel1'] ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        bgcolor: "primary.main",
                        color: "text.black",
                        borderRadius: expanded === 'panel1' ? "8px 8px 0px 0px" : "8px",
                        border: "0px"
                    }}
                >
                    المعلومات الجيومكانية
                </AccordionSummary>
                <AccordionDetails sx={{
                    border: "1px solid #DBDBDB",
                    borderTop: "0px",
                    borderRadius: "0px 0px 8px 8px",
                    borderRadiusTop: "0px",
                    padding: "20px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

            {/* ============== Project Info Accordion ============== */}
            <Accordion expanded={expanded['projectInfoAccordion']} onChange={handleChange('projectInfoAccordion')} sx={{
                border: "0px",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                }
            }}>
                <AccordionSummary
                    expandIcon={expanded['projectInfoAccordion'] ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="projectInfoAccordion-content"
                    id="projectInfoAccordion-header"
                    sx={{
                        bgcolor: "primary.main",
                        color: "text.black",
                        borderRadius: expanded === 'projectInfoAccordion' ? "8px 8px 0px 0px" : "8px",
                        border: "0px"
                    }}
                >
                    معلومات المشروع
                </AccordionSummary>
                <AccordionDetails sx={{
                    border: "1px solid #DBDBDB",
                    borderTop: "0px",
                    borderRadius: "0px 0px 8px 8px",
                    borderRadiusTop: "0px",
                    padding: "20px",
                    color: "text.black",
                }}>
                    <Stack spacing={"24px"}>
                        {projectInfoData.map(projectData => {
                            const title = Object.keys(projectData)[0]
                            const info = Object.values(projectData)[0]
                            return (
                                <Stack spacing={1}>
                                    <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{title}</Typography>
                                    <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 400 }}>{info}</Typography>
                                </Stack>
                            )
                        })}
                    </Stack>
                </AccordionDetails>
            </Accordion>


            {/* ============== OwnerShip Info Accordion ============== */}
            <Accordion disabled expanded={expanded['ownerShipInfoAccordion']} onChange={handleChange('ownerShipInfoAccordion')} sx={{
                border: "0px",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                }
            }}>
                <AccordionSummary
                    expandIcon={expanded['ownerShipInfoAccordion'] ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="ownerShipInfoAccordion-content"
                    id="ownerShipInfoAccordion-header"
                    sx={{
                        bgcolor: "primary.main",
                        color: "text.black",
                        borderRadius: expanded === 'ownerShipInfoAccordion' ? "8px 8px 0px 0px" : "8px",
                        border: "0px"
                    }}
                >
                    معلومات الملكية
                </AccordionSummary>
                <AccordionDetails sx={{
                    border: "1px solid #DBDBDB",
                    borderTop: "0px",
                    borderRadius: "0px 0px 8px 8px",
                    borderRadiusTop: "0px",
                    padding: "20px",
                    color: "text.black",
                }}>
                    <Stack spacing={"24px"}>
                        {projectInfoData.map(projectData => {
                            const title = Object.keys(projectData)[0]
                            const info = Object.values(projectData)[0]
                            return (
                                <Stack spacing={1}>
                                    <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "24px", color: "text.gray" }}>{title}</Typography>
                                    <Typography variant='p' sx={{ fontSize: "14px", fontWeight: 400 }}>{info}</Typography>
                                </Stack>
                            )
                        })}
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* ============== Project Parties Accordion ============== */}
            <Accordion expanded={expanded['projectPartiesAccordion']} onChange={handleChange('projectPartiesAccordion')} sx={{
                border: "0px",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                }
            }}>
                <AccordionSummary
                    expandIcon={expanded['projectPartiesAccordion'] ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="projectPartiesAccordion-content"
                    id="projectPartiesAccordion-header"
                    sx={{
                        bgcolor: "primary.main",
                        color: "text.black",
                        borderRadius: expanded === 'projectPartiesAccordion' ? "8px 8px 0px 0px" : "8px",
                        border: "0px"
                    }}
                >
                    أطراف المشروع
                </AccordionSummary>
                <AccordionDetails sx={{
                    border: "1px solid #DBDBDB",
                    borderTop: "0px",
                    borderRadius: "0px 0px 8px 8px",
                    borderRadiusTop: "0px",
                    padding: "20px",
                    color: "text.black",
                }}>
                    <Stack spacing={"24px"}>
                        {parties.map(party => {
                            return <PartyCard party={party} />
                        })}
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* ============== Owners Accordion ============== */}
            <Accordion expanded={expanded['ownersAccordion']} onChange={handleChange('ownersAccordion')} sx={{
                border: "0px",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                }
            }}>
                <AccordionSummary
                    expandIcon={expanded['ownersAccordion'] ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="ownersAccordion-content"
                    id="ownersAccordion-header"
                    sx={{
                        bgcolor: "primary.main",
                        color: "text.black",
                        borderRadius: expanded === 'ownersAccordion' ? "8px 8px 0px 0px" : "8px",
                        border: "0px"
                    }}
                >
                    أصحاب المصلحة
                </AccordionSummary>
                <AccordionDetails sx={{
                    border: "1px solid #DBDBDB",
                    borderTop: "0px",
                    borderRadius: "0px 0px 8px 8px",
                    borderRadiusTop: "0px",
                    padding: "20px",
                    color: "text.black",
                }}>
                    <Stack spacing={"24px"}>
                        {owners.map(owner => {
                            return (
                                <OwnerCard owner={owner} />
                            )
                        })}
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* ============== Attatchments Accordion ============== */}
            <Accordion expanded={expanded['attatchmentsAccordion']} onChange={handleChange('attatchmentsAccordion')} sx={{
                border: "0px",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                }
            }}>
                <AccordionSummary
                    expandIcon={expanded['attatchmentsAccordion'] ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="attatchmentsAccordion-content"
                    id="attatchmentsAccordion-header"
                    sx={{
                        bgcolor: "primary.main",
                        color: "text.black",
                        borderRadius: expanded === 'attatchmentsAccordion' ? "8px 8px 0px 0px" : "8px",
                        border: "0px"
                    }}
                >
                    المرفقات
                </AccordionSummary>
                <AccordionDetails sx={{
                    border: "1px solid #DBDBDB",
                    borderTop: "0px",
                    borderRadius: "0px 0px 8px 8px",
                    borderRadiusTop: "0px",
                    padding: "20px",
                    color: "text.black",
                }}>
                    {/* Section One */}
                    <Box sx={{ bgcolor: "#F7F0E8", borderRadius: "8px", padding: "8px 16px", marginBottom: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black' bgcolor='primary'>عام</Typography>
                    </Box>
                    <Box sx={{ marginBottom: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black'>المخطط العام وفق الإحداثيات</Typography>
                    </Box>
                    <AttatchmentCard />
                    <Box sx={{ marginY: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black'>عرض ورشة عمل التصميم الابتدائي</Typography>
                    </Box>
                    <Box sx={{ marginY: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.lightGray'>تم تفويض</Typography>
                        <PartyCard party={parties[0]} />
                    </Box>
                    <Box sx={{ marginBottom: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black'>إثبات ملكية القطعة</Typography>
                    </Box>
                    <AttatchmentCard />
                    {/* Section two */}
                    <Box sx={{ bgcolor: "#F7F0E8", borderRadius: "8px", padding: "8px 16px", marginY: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black' bgcolor='primary'>الحزم الهندسية</Typography>
                    </Box>
                    <Box sx={{ marginBottom: "16px" }}>
                        <Typography variant='p' fontSize={"14px"} fontWeight={500} lineHeight={"28px"} color='text.black'>المخطط العام وفق الإحداثيات</Typography>
                    </Box>
                    <AttatchmentCard />
                </AccordionDetails>
            </Accordion>

            <FormGroup sx={{ marginY: "36px" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{ fontSize: {xs: "11px", md: "1rem"}}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</Typography>} />
            </FormGroup>

            <Box sx={{ display: 'flex', flexDirection: {xs: "column-reverse", md: "row"}, alignItems: {xs: "center"}, gap: '16px' }}>
                <Button color="secondary" size="large" variant="outlined" sx={{ width: {xs: "100%", md: '50%'}, padding: "18px 24px" }}>السابق</Button>
                <Button color="secondary" size="large" variant="contained" sx={{ width: {xs: "100%", md: '50%'}, padding: "18px 24px" }}>تقديم الطلب</Button>
            </Box>




        </Box>
    )
}

export default RequestRivisionSection