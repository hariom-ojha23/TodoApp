import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  removeArchivedNoteAtIndex,
  updateArchivedNoteAtIndex,
} from "../redux/archivedNotes";
import {
  removePinnedNoteAtIndex,
  updatePinnedNoteAtIndex,
} from "../redux/pinnedNotes";
import {
  removeOtherNoteAtIndex,
  updateOtherNoteAtIndex,
} from "../redux/otherNotes";
import { useDispatch } from "react-redux";
import UpdateNoteDialog from "./UpdateNoteDialog";

const SingleNote = (props) => {
  const { item, index, id } = props;

  const [displayDelBtn, setDisplayDelBtn] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const dispatch = useDispatch();

  const deleteNote = () => {
    if (id === "pinnedList") {
      dispatch(removePinnedNoteAtIndex({ source: index }));
    } else if (id === "otherList") {
      dispatch(removeOtherNoteAtIndex({ source: index }));
    } else {
      dispatch(removeArchivedNoteAtIndex({ source: index }));
    }
  };

  const handleClickOpen = () => {
    setOpenUpdateDialog(true);
  };

  const handleClose = (data) => {
    setOpenUpdateDialog(false);
    updateDialog(data);
  };

  const updateDialog = (data) => {
    const payload = { ...item, ...data };

    if (id === "pinnedList") {
      dispatch(updatePinnedNoteAtIndex({ data: payload }));
    } else if (id === "otherList") {
      dispatch(updateOtherNoteAtIndex({ data: payload }));
    } else {
      dispatch(updateArchivedNoteAtIndex({ data: payload }));
    }
  };

  return (
    <React.Fragment>
      <Draggable draggableId={item.id} index={index}>
        {(provided) => (
          <Card
            className="notesCard"
            sx={{
              backgroundColor: item.bgColor,
              borderRadius: 2,
              boxShadow: "none",
              my: 2,
              mx: 1,
              position: "relative",
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onMouseOver={() => setDisplayDelBtn(true)}
            onMouseLeave={() => setDisplayDelBtn(false)}
            onClick={handleClickOpen}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: 600 }}
                color="text.secondary"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 15 }}>
                {item.note}
              </Typography>
            </CardContent>

            <CardActions
              className="noteDeleteBtn"
              sx={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                display: displayDelBtn ? "block" : "none",
              }}
            >
              <IconButton onClick={() => deleteNote()}>
                <CloseOutlinedIcon color="error" />
              </IconButton>
            </CardActions>
          </Card>
        )}
      </Draggable>
      <UpdateNoteDialog
        open={openUpdateDialog}
        handleClose={handleClose}
        item={item}
        index={index}
      />
    </React.Fragment>
  );
};

export default SingleNote;
