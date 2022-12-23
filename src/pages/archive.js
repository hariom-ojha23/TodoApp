import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import NotesLayout from "../components/NotesLayout";

const Archive = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%'
    }}>
      <NotesLayout />
    </Box>
  )
}

export default Archive