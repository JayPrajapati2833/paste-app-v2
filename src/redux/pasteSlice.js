import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    // addToPastes: (state, action) => {
    //   const paste = action.payload;
    //   state.pastes.push(paste);
    //   localStorage.setItem("pastes", JSON.stringify(state.pastes));
    //   toast("Paste created Successfully!!");
    // },
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      console.log("Updated Pastes:", state.pastes);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      console.log("Saved to localStorage:", localStorage.getItem("pastes"));
    },
    updateToPastes: (state, action) => {
      console.log("Action", state);
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Removed successfully!!");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
  },
});

export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
