import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterRedux/counterSlice";
import basketReducer from "./features/products/basketSlice";
import filmsReducer from "./features/films/filmsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    films: filmsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
