import { Box } from '@mui/material'
import React from 'react'
import './Steps.scss';

const Steps = () => {

  const steps = [
    {
      id: 1,
      label: 'المعلومات الجيومكانية'
    },
    {
      id: 2,
      label: 'معلومات المشروع'
    },
    {
      id: 3,
      label: 'معلومات الملكية'
    },
    {
      id: 4,
      label: 'أطراف المشروع'
    },
    {
      id: 5,
      label: 'أصحاب المصلحة'
    },
    {
      id: 6,
      label: 'المرفقات'
    },
    {
      id: 7,
      label: 'مراجعة الطلب'
    },
  ];




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
      <div className="wizard">
        <div className="process">
          <ul>
            {
              steps.map(step => {
                return (
                  <li key={step.id} className="step">
                    <div className="name">{step.label}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Box>
  )
}

export default Steps