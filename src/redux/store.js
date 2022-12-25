import { configureStore } from "@reduxjs/toolkit";
import pinnedNotesReducer from "./pinnedNotes";
import otherNotesReducer from "./otherNotes";
import archivedNotesReducer from "./archivedNotes";

export const store = configureStore({
  reducer: {
    pinnedNotes: pinnedNotesReducer,
    otherNotes: otherNotesReducer,
    archivedNotes: archivedNotesReducer,
  },
});
