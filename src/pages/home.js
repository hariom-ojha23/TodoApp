import React from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import Header from "../components/Header";
import NotesLayout from "../components/NotesLayout";
import { useSelector } from "react-redux";

const Home = () => {
  const { pinnedNotesList } = useSelector((state) => state.pinnedNotes);
  const { otherNotesList } = useSelector((state) => state.otherNotes);
  const { archivedNotesList } = useSelector((state) => state.archivedNotes);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Notes
          </Typography>
        </Toolbar>
      </AppBar>
      <Header />
      <Box sx={{ mt: 10, width: "80%" }}>
        <Grid sx={{ height: "100%" }} container>
          <Grid xs={12} sm={6} md={4} item>
            <Box sx={{ mb: 10 }}>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  fontSize: 12,
                  color: "#666",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                Pinned
              </Typography>
              <NotesLayout notesList={pinnedNotesList} id="pinnedList" />
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <Box sx={{ mb: 10 }}>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  fontSize: 12,
                  color: "#666",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                Archived
              </Typography>
              <NotesLayout notesList={archivedNotesList} id="archivedList" />
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <Box sx={{ mb: 10 }}>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  fontSize: 12,
                  color: "#666",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                Other
              </Typography>
              <NotesLayout notesList={otherNotesList} id="otherList" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
