import { createSlice } from "@reduxjs/toolkit";
import i18n from "./i18n";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLanguage: localStorage.getItem("language") || "en",
  },
  reducers: {
    setLanguage(state, action) {
      state.currentLanguage = action.payload;
      i18n.changeLanguage(action.payload); // Измените язык в i18next
      localStorage.setItem("language", action.payload); // Сохраните язык в localStorage
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
