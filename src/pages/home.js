import React from "react";
import { Box, Stack } from "@mui/system";
import Header from "../components/Header";


const Home = () => {
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

export default Home