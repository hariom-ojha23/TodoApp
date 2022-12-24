import { createSlice } from "@reduxjs/toolkit";

const notesFromStorage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notesList: notesFromStorage,
  },
  reducers: {
    createNote: (state, action) => {
      state.notesList.push(action.payload);
      localStorage.setItem('notes', JSON.stringify(state.notesList))
    },
  },
})

// Action creators are generated for each case reducer function
export const { createNote } = notesSlice.actions

export default notesSlice.reducer