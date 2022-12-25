import React from "react";
import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
  addPinnedNoteAtIndex,
  removePinnedNoteAtIndex,
} from "./redux/pinnedNotes";
import {
  addOtherNoteAtIndex,
  removeOtherNoteAtIndex,
} from "./redux/otherNotes";
import Home from "./pages/home";
import {
  addArchivedNoteAtIndex,
  removeArchivedNoteAtIndex,
} from "./redux/archivedNotes";

const App = () => {
  const { pinnedNotesList } = useSelector((state) => state.pinnedNotes);
  const { otherNotesList } = useSelector((state) => state.otherNotes);
  const { archivedNotesList } = useSelector((state) => state.archivedNotes);

  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (destination.droppableId === source.droppableId) {
      if (source.droppableId === "pinnedList") {
        const payload = {
          source: source.index,
          destination: destination.index,
          item: pinnedNotesList[source.index],
        };
        dispatch(addPinnedNoteAtIndex(payload));
      }

      if (source.droppableId === "otherList") {
        const payload = {
          source: source.index,
          destination: destination.index,
          item: otherNotesList[source.index],
        };
        dispatch(addOtherNoteAtIndex(payload));
      }

      if (source.droppableId === "archivedList") {
        const payload = {
          source: source.index,
          destination: destination.index,
          item: archivedNotesList[source.index],
        };
        dispatch(addArchivedNoteAtIndex(payload));
      }
    } else {
      if (source.droppableId === "pinnedList") {
        const item = pinnedNotesList[source.index];
        dispatch(removePinnedNoteAtIndex({ source: source.index }));

        if (destination.droppableId === "otherList") {
          const payload = {
            source: -1,
            destination: destination.index,
            item: item,
          };
          dispatch(addOtherNoteAtIndex(payload));
        } else {
          const payload = {
            source: -1,
            destination: destination.index,
            item: item,
          };
          dispatch(addArchivedNoteAtIndex(payload));
        }
      } else if (source.droppableId === "otherList") {
        const item = otherNotesList[source.index];
        dispatch(removeOtherNoteAtIndex({ source: source.index }));

        if (destination.droppableId === "pinnedList") {
          const payload = {
            source: -1,
            destination: destination.index,
            item: item,
          };
          dispatch(addPinnedNoteAtIndex(payload));
        } else {
          const payload = {
            source: -1,
            destination: destination.index,
            item: item,
          };
          dispatch(addArchivedNoteAtIndex(payload));
        }
      } else {
        const item = archivedNotesList[source.index];
        dispatch(removeArchivedNoteAtIndex({ source: source.index }));

        if (destination.droppableId === "pinnedList") {
          const payload = {
            source: -1,
            destination: destination.index,
            item: item,
          };
          dispatch(addPinnedNoteAtIndex(payload));
        } else {
          const payload = {
            source: -1,
            destination: destination.index,
            item: item,
          };
          dispatch(addOtherNoteAtIndex(payload));
        }
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Home />
    </DragDropContext>
  );
};

export default App;
