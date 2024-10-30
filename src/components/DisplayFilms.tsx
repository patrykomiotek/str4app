import { useQuery } from "@apollo/client";

import { GET_FILMS } from "../gql/Queries";
// import { GET_LOCATIONS } from "../gql/Queries";

interface Film {
  id: number;
  title: string;
  director: string;
  releaseDate: string;
}

interface FilmsResponse {
  allFilms: {
    films: Film[];
  };
}

export const DisplayFilms = () => {
  const { loading, error, data } = useQuery<FilmsResponse>(GET_FILMS);

  console.log({ loading, error, data });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div>
      {data?.allFilms.films.map(({ id, title, director, releaseDate }) => (
        <div key={id}>
          <h3>{title}</h3>
          <b>{director}</b>
          <b>Release: {releaseDate}</b>
          <br />
        </div>
      ))}
    </div>
  );
};
