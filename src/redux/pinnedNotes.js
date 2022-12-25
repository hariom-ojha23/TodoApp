import { createSlice } from "@reduxjs/toolkit";

const notesFromStorage = localStorage.getItem("pinnedNotes")
  ? JSON.parse(localStorage.getItem("pinnedNotes"))
  : [];

export const pinnedNotesSlice = createSlice({
  name: "pinnedNotes",
  initialState: {
    pinnedNotesList: notesFromStorage,
  },
  reducers: {
    addPinnedNote: (state, action) => {
      state.pinnedNotesList.splice(0, 0, action.payload);
      localStorage.setItem(
        "pinnedNotes",
        JSON.stringify(state.pinnedNotesList)
      );
    },
    addPinnedNoteAtIndex: (state, action) => {
      const { source, destination, item } = action.payload;
      if (source !== -1) {
        state.pinnedNotesList.splice(source, 1);
      }
      state.pinnedNotesList.splice(destination, 0, item);
      localStorage.setItem(
        "pinnedNotes",
        JSON.stringify(state.pinnedNotesList)
      );
    },
    removePinnedNoteAtIndex: (state, action) => {
      const { source } = action.payload;
      state.pinnedNotesList.splice(source, 1);
      localStorage.setItem(
        "pinnedNotes",
        JSON.stringify(state.pinnedNotesList)
      );
    },
    updatePinnedNoteAtIndex: (state, action) => {
      const { data } = action.payload;
      state.pinnedNotesList = state.pinnedNotesList.map((x) =>
        data.id === x.id ? data : x
      );
      localStorage.setItem(
        "pinnedNotes",
        JSON.stringify(state.pinnedNotesList)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addPinnedNote,
  addPinnedNoteAtIndex,
  removePinnedNoteAtIndex,
  updatePinnedNoteAtIndex,
} = pinnedNotesSlice.actions;

export default pinnedNotesSlice.reducer;
