import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Film } from "@apptypes/films";
import { client } from "../../graphQL";
import { GET_FILM } from "../../gql/Queries";

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

export const fetchFilmById = createAsyncThunk(
  "fetch/filmById",
  async (filmId: Film["id"], thunkApi) => {
    // thunkApi.dispatch()

    const result = await client.query({
      query: GET_FILM,
      variables: {
        filmId,
      },
    });

    return result.data.film as Film;
  }
);

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
  // thunks
  extraReducers: (builder) => {
    builder.addCase(fetchFilmById.fulfilled, (state, { payload }) => {
      state.selectedFilm = payload;
    });
    // builder.addCase(fetchFilmById.rejected, (state, action) => {
    //   if (action.payload) {
    //     // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
    //     state.error = action.payload.errorMessage
    //   } else {
    //     state.error = action.error
    //   }
    // })
  },
});

export const { setFilms, setSelectedFilm } = filmsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilms = (state: RootState) => state.films.films;
export const selectSelectedFilm = (state: RootState) =>
  state.films.selectedFilm;
export const selectedFilmSelector = (state: RootState) =>
  state.films.selectedFilm;

export default filmsSlice.reducer;
