import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import BgColorSelector from "./BgColorSelector";

const UpdateNoteDialog = (props) => {
  const { open, handleClose, item } = props;

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [pinned, setPinned] = useState(false);
  const [archived, setArchived] = useState(false);
  const [bgColor, setbgColor] = useState("#fff");

  useEffect(() => {
    setTitle(item.title);
    setNote(item.note);
    setPinned(item.pinned);
    setArchived(item.archived);
    setbgColor(item.bgColor);
  }, [item]);

  const updateNote = () => {
    const data = {
      title,
      note,
      pinned,
      archived,
      bgColor,
    };
    handleClose(data);
  };

  return (
    <Dialog fullWidth open={open} onClose={updateNote}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 1.5,
          p: 1.5,
          backgroundColor: bgColor,
        }}
      >
        <Stack sx={{ display: "flex" }} direction="row" columnGap={2}>
          <TextField
            autoFocus
            fullWidth
            sx={{ p: "5px" }}
            placeholder="Title"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="titleInput"
          />
          <IconButton onClick={() => setPinned(!pinned)}>
            {pinned ? (
              <PushPinIcon sx={{ fontSize: 26 }} />
            ) : (
              <PushPinOutlinedIcon sx={{ fontSize: 26 }} />
            )}
          </IconButton>
        </Stack>
        <Stack direction="row" columnGap={2}>
          <TextField
            fullWidth
            sx={{ p: "5px" }}
            placeholder="Take a note..."
            multiline
            minRows={3}
            maxRows={20}
            variant="standard"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: 2,
          pt: 1,
          backgroundColor: bgColor,
        }}
      >
        <Stack direction="row" columnGap={2}>
          <BgColorSelector setbgColor={setbgColor} />
          <IconButton onClick={() => setArchived(!archived)}>
            {archived ? <ArchiveIcon /> : <ArchiveOutlinedIcon />}
          </IconButton>
        </Stack>
        <Box>
          <Button
            sx={{ color: "#666" }}
            size="small"
            onClick={() => updateNote()}
          >
            Done
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateNoteDialog;
