import { DisplayFilms } from "@components/DisplayFilms";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const FilmsPage = () => {
  return (
    <ErrorBoundary fallback={<p>Films failed</p>}>
      <div>
        <h1>Films</h1>
        <DisplayFilms />
      </div>
    </ErrorBoundary>
  );
};
