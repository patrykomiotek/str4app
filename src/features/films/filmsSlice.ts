import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Film } from "@apptypes/films";

// Define a type for the slice state
export interface State {
  films: Film[];
  selectedFilm: Film | null;
}

// Define the initial state using that type
const initialState: State = {
  films: [],
  selectedFilm: null,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<Film[]>) => {
      state.films = action.payload;
    },
    setSelectedFilm: (state, action: PayloadAction<Film>) => {
      state.selectedFilm = action.payload;
    },
  },
});

export const { setFilms, setSelectedFilm } = filmsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilms = (state: RootState) => state.films.films;
export const selectSelectedFilm = (state: RootState) =>
  state.films.selectedFilm;

export default filmsSlice.reducer;
