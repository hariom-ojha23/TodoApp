import { createSlice } from "@reduxjs/toolkit";

const notesFromStorage = localStorage.getItem("archivedNotes")
  ? JSON.parse(localStorage.getItem("archivedNotes"))
  : [];

export const archivedNotesSlice = createSlice({
  name: "archivedNotes",
  initialState: {
    archivedNotesList: notesFromStorage,
  },
  reducers: {
    addArchivedNote: (state, action) => {
      state.archivedNotesList.splice(0, 0, action.payload);
      localStorage.setItem(
        "archivedNotes",
        JSON.stringify(state.archivedNotesList)
      );
    },
    addArchivedNoteAtIndex: (state, action) => {
      const { source, destination, item } = action.payload;
      if (source !== -1) {
        state.archivedNotesList.splice(source, 1);
      }
      state.archivedNotesList.splice(destination, 0, item);
      localStorage.setItem(
        "archivedNotes",
        JSON.stringify(state.archivedNotesList)
      );
    },
    removeArchivedNoteAtIndex: (state, action) => {
      const { source } = action.payload;
      state.archivedNotesList.splice(source, 1);
      localStorage.setItem(
        "archivedNotes",
        JSON.stringify(state.archivedNotesList)
      );
    },
    updateArchivedNoteAtIndex: (state, action) => {
      const { data } = action.payload;
      state.archivedNotesList = state.archivedNotesList.map((x) =>
        data.id === x.id ? data : x
      );
      localStorage.setItem(
        "archivedNotes",
        JSON.stringify(state.archivedNotesList)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addArchivedNote,
  addArchivedNoteAtIndex,
  removeArchivedNoteAtIndex,
  updateArchivedNoteAtIndex,
} = archivedNotesSlice.actions;

export default archivedNotesSlice.reducer;
