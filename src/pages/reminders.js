import React from "react";
import { Stack, Box } from "@mui/material";
import Header from '../components/Header'


const Reminders = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%'
    }}>
      <Stack direction="row" justifyContent="center">
        <Header />
      </Stack>
    </Box>
  )
}

export default Reminders