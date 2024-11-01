import { useQuery, useLazyQuery } from "@apollo/client";

import { GET_FILMS } from "../gql/Queries";
// import { GET_LOCATIONS } from "../gql/Queries";

import { DisplayFilms } from "@components/DisplayFilms";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { type FilmsResponse } from "@apptypes/films";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { useAppSelector } from "../hooks/redux";
import {
  setFilms,
  fetchFilmById,
  selectedFilmSelector,
} from "@features/films/filmsSlice";

export const FilmsPage = () => {
  const dispatch = useDispatch();
  // const store = useStore();
  const selectedFilm = useAppSelector((state) => state.films.selectedFilm);
  const screenLoading = useAppSelector((state) => state.films.isLoading);
  // const [callMeMaybe, {loading, error, data}] = useLazyQuery<FilmsResponse>(GET_FILMS, {
  //   onCompleted
  // });
  const { error, data } = useQuery<FilmsResponse>(GET_FILMS, {
    onCompleted: (data) => {
      dispatch(setFilms(data.allFilms.films));
      dispatch(fetchFilmById(1));
    },
  });
  // const selectedFilm = selectedFilmSelector(store);

  useEffect(() => {
    // GET_FILMS -> REVIEWS -> LAST
    // apollo client (?)
    // saga -> takeEvery/takeLatest -> take(INIT_FILMS) -> put/dispatch(GET_FILMS) -> put/dispatch(REVIEWS) -> put/dispatch(LAST) -> notify UI
  }, []);

  // 1) graphql/apollo chains
  // 2) useEffects + useLazyQuery
  // 3)
  // useEffect(() => {}, data);

  console.log({ screenLoading, error, data });

  if (screenLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <ErrorBoundary fallback={<p>Films failed</p>}>
      <div>
        <h1 className="mb-4 text-4xl">Films</h1>
        <div>
          <h2 className="text-3xl my-4">
            Selected Film: {selectedFilm?.title}
          </h2>
        </div>
        {data && <DisplayFilms data={data} />}
      </div>
    </ErrorBoundary>
  );
};
