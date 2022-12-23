import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Header from '../components/Header'
import NotesLayout from "../components/NotesLayout";


const Reminders = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%'
    }}>
      <Stack direction="row" justifyContent="center" sx={{mb: 10}}>
        <Header />
      </Stack>
      <NotesLayout />
    </Box>
  )
}

export default Reminders