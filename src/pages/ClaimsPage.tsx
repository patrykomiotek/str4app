import { ErrorBoundary } from "../components/ErrorBoundary";

export const ClaimsPage = () => {
  return (
    <ErrorBoundary fallback={<p>Claims failed</p>}>
      <div>
        <h1>Claims</h1>
        <p>Lorem</p>
      </div>
    </ErrorBoundary>
  );
};
