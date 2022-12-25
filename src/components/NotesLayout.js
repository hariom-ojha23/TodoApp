import React from "react";
import SingleNote from "./SingleNote";
import { Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";

const NotesLayout = (props) => {
  const { notesList, id } = props;
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <Box>
            {notesList.map((item, index) => (
              <SingleNote key={item.id} item={item} index={index} id={id} />
            ))}
            {provided.placeholder}
          </Box>
        </div>
      )}
    </Droppable>
  );
};

export default NotesLayout;
