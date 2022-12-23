import React from "react";
import { Box, Button } from "@mui/material";
import NotesLayout from "../components/NotesLayout";
import { Stack } from "@mui/system";

const Trash = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%'
    }}>
      <Stack flexDirection="row-reverse">
          <Button sx={{padding: '10px 22px', fontSize: 14}} color="error" variant="outlined">Empty Trash</Button>
      </Stack>
      <NotesLayout />
    </Box>
  )
}

export default Trash