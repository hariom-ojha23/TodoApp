import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SingleNote from "./SingleNote";

const NotesLayout = () => {

  return (
    <ImageList sx={{p: 1}}  cols={4} gap={10}>
      {[1,2,3,4,5,6].map((item) => (
        <ImageListItem key={item}>
          <SingleNote />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default NotesLayout;
