import { useQuery } from "@apollo/client";

import { GET_FILMS } from "../gql/Queries";
// import { GET_LOCATIONS } from "../gql/Queries";

import { DisplayFilms } from "@components/DisplayFilms";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { type FilmsResponse } from "@apptypes/films";
import { useEffect } from "react";

export const FilmsPage = () => {
  const { loading, error, data } = useQuery<FilmsResponse>(GET_FILMS);
  // const { loading: loadingReviews, error: errorReviews, data: reviewsData } = useQuery<ReviewsResponse>(GET_FILMS_REVIEWS);

  useEffect(() => {
    // GET_FILMS -> REVIEWS -> LAST
    // apollo client (?)
    // saga -> takeEvery/takeLatest -> take(INIT_FILMS) -> put/dispatch(GET_FILMS) -> put/dispatch(REVIEWS) -> put/dispatch(LAST) -> notify UI
  }, []);

  // 1) graphql/apollo chains
  // 2) useEffects + useLazyQuery
  // 3)
  useEffect(() => {}, data);

  console.log({ loading, error, data });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <ErrorBoundary fallback={<p>Films failed</p>}>
      <div>
        <h1>Films</h1>
        {data && <DisplayFilms data={data} />}
      </div>
    </ErrorBoundary>
  );
};
