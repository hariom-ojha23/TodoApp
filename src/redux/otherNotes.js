import { createSlice } from "@reduxjs/toolkit";

const notesFromStorage = localStorage.getItem("otherNotes")
  ? JSON.parse(localStorage.getItem("otherNotes"))
  : [];

export const otherNotesSlice = createSlice({
  name: "otherNotes",
  initialState: {
    otherNotesList: notesFromStorage,
  },
  reducers: {
    addOtherNote: (state, action) => {
      state.otherNotesList.splice(0, 0, action.payload);
      localStorage.setItem("otherNotes", JSON.stringify(state.otherNotesList));
    },
    addOtherNoteAtIndex: (state, action) => {
      const { source, destination, item } = action.payload;
      if (source !== -1) {
        state.otherNotesList.splice(source, 1);
      }
      state.otherNotesList.splice(destination, 0, item);
      localStorage.setItem("otherNotes", JSON.stringify(state.otherNotesList));
    },
    removeOtherNoteAtIndex: (state, action) => {
      const { source } = action.payload;
      state.otherNotesList.splice(source, 1);
      localStorage.setItem("otherNotes", JSON.stringify(state.otherNotesList));
    },
    updateOtherNoteAtIndex: (state, action) => {
      const { data } = action.payload;
      state.otherNotesList = state.otherNotesList.map((x) =>
        data.id === x.id ? data : x
      );
      localStorage.setItem("otherNotes", JSON.stringify(state.otherNotesList));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addOtherNote,
  addOtherNoteAtIndex,
  removeOtherNoteAtIndex,
  updateOtherNoteAtIndex,
} = otherNotesSlice.actions;

export default otherNotesSlice.reducer;
